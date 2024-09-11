import { createContext, ReactElement, useRef } from "react";
import { RouterContext } from "../modules/router_context";
import { RouteProperties } from "../widgets/Route";
import { LocationUtil } from "../utils/location";
import { useLocation } from "../hooks/useLocation";
import { RouteSliver } from "./RouteSliver";

export const _RouterContext = createContext<RouterContext | null>(null);

export function Router({location, children}: {
    location?: string;
    children: ReactElement<RouteProperties> | ReactElement<RouteProperties>[];
}) {
    // This values defines previously and currently rendered relative path of a component.
    const storage = useRef(new Set<string>());
    const context = useLocation();
    const element = Array.isArray(children) ? children : [children];

    let passedRoute = element.find(e => {
        return (LocationUtil.arrayOf(e.props.path)[0] == context.first && location == null)
            || (LocationUtil.arrayOf(e.props.path)[0] == LocationUtil.arrayOf(location ?? "")[0] && location);
    });

    if (passedRoute) {
        context.paths.length != 0 && context.consume();
    }

    // If a component to be rendered cannot be defined, it will be
    // redefinding to a component that can be rendered by default.
    passedRoute ??= element.find(e => e.props.default);

    if (passedRoute && storage.current.has(passedRoute.props.path) == false) {
        storage.current.add(passedRoute.props.path);
    }

    return (
        <_RouterContext.Provider value={context}>
            {
                Array.from(storage.current).map((path, index) => {
                    // Whether a given path corresponds to a current location path.
                    const isCurrent = passedRoute?.props.path == path;

                    // A component corresponds to a given path.
                    const route = element.find((e) => e.props.path == path);

                    return <RouteSliver key={path} active={isCurrent} first={index == 0} route={route} />;
                })
            }
        </_RouterContext.Provider>
    )
}