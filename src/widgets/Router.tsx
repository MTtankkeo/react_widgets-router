import { createContext, ReactElement, useContext } from "react";
import { RouterContext } from "../modules/router_context";
import { RouteProperties } from "../widgets/Route";
import { LocationUtil } from "../utils/location";
import { useLocation } from "../hooks/useLocation";

export const _RouterContext = createContext<RouterContext | null>(null);

export function Router({location, children}: {
    location?: string;
    children: ReactElement<RouteProperties> | ReactElement<RouteProperties>[];
}) {
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

    // This value defines a component that must be rendered.
    const RenderRoute = passedRoute?.props.component;

    return (
        <_RouterContext.Provider value={context}>
            {passedRoute?.props.element ?? (RenderRoute ? <RenderRoute /> : <></>)}
        </_RouterContext.Provider>
    )
}