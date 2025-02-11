import { createContext, ReactElement, useRef, useState } from "react";
import { RouterContext } from "../modules/router_context";
import { RouteProperties } from "../widgets/Route";
import { LocationUtil } from "../utils/location";
import { RouteSliver } from "./RouteSliver";
import { useLocation } from "../hooks/useLocation";

/** This context provides a router context from high-level to low-level. */
export const _RouterContext = createContext<RouterContext | null>(null);

/** Signature for the interface that defines properties of `Router` component. */
export interface RouterProperties {
    location?: string;
    keepAlive?: boolean;
    children: ReactElement<RouteProperties> | ReactElement<RouteProperties>[];
}

/**
 * ### Introduction
 * This component is used to show different content based on the current URL
 * (or a specified location).
 * 
 * It looks at the `Route` components you provide as children and checks if their `path`
 * matches the current location. If there is a match, it displays the component for that route.
 * 
 * ### About Keep Alive
 * This `keepAlive` property determines whether previous routes remain in memory after navigating away.
 * When `keepAlive` is `true`, the elements of the previous route are not removed from memory
 * but are excluded from the layout phase, allowing them to persist without being fully detached from the DOM.
 * 
 * See Also, If a `Route` has its own `keepAlive` setting, it takes priority over the `Router`'s `keepAlive`.
 * If no routes match the current location, it will display a default route if you provide one.
 * 
 * ### Example
 * ```tsx
 * return (
 *     <Router>
 *         <Route path="/example-1" component={ExamplePage1} />
 *         <Route path="/example-2" component={ExamplePage2} />
 *         <Route path="/example-3" component={ExamplePage3} />
 *     </Router>
 * )
 * ```
 */
export function Router({location, keepAlive, children}: RouterProperties) {
    // This values defines previously and currently rendered relative path of a component.
    const storage = useRef(new Map<string, {context: RouterContext}>());
    const context = useLocation();
    const element = Array.isArray(children) ? children : [children];
    const [count, setState] = useState(0);

    let passedRoute = element.find(e => {
        return (LocationUtil.arrayOf(e.props.path)[0] == context.first && location == null)
            || (LocationUtil.arrayOf(e.props.path)[0] == LocationUtil.arrayOf(location ?? "")[0] && location);
    });

    // If a component to be rendered cannot be defined, it will be
    // redefinding to a component that can be rendered by default.
    passedRoute ??= element.find(e => e.props.default || e.props.path == "*");

    // A router is considered a lowest-level router when there
    // is no path that can be consumed.
    if (passedRoute) {
        if (context.paths.length != 0) {
            context.consume();
        }

        storage.current.set(passedRoute.props.path, {context: context.clone});
    } else {
        throw new Error(
            "Route corresponding to a given path was not found. Therefore, You need to " +
            "define a `default` attribute to allow the router to specify a default `Route`."
        );
    }

    return (<>
        {
            Array.from(storage.current).map(([path, state], index) => {
                // Whether a given path corresponds to a current location path.
                const isCurrent = passedRoute?.props.path == path;

                // A component corresponds to a given path.
                const route = element.find((e) => e.props.path == path);

                // Called when must be disposing a route sliver component.
                const onDispose = (props: RouteProperties) => {
                    storage.current.delete(props.path);
                    setState(count + 1);
                }

                return (
                    <_RouterContext.Provider key={path} value={state.context.clone}>
                        <RouteSliver active={isCurrent} first={index == 0} route={route} keepAlive={keepAlive} onDispose={onDispose} />
                    </_RouterContext.Provider>
                )
            })
        }
    </>)
}