import { ReactElement } from "react";
import { RouterContext } from "../modules/router_context";
import { RouteProperties } from "../widgets/Route";
export declare const _RouterContext: import("react").Context<RouterContext | null>;
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
export declare function Router({ location, children }: RouterProperties): import("react/jsx-runtime").JSX.Element;
