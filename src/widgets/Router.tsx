import { createContext, FunctionComponent, useContext } from "react";
import { RouteProperties } from "./Route";
import { RouterContext } from "../modules/router_context";

const IRouterContext = createContext(new RouterContext(location.pathname));

export function Router({location, children}: {
    location: string;
    children: FunctionComponent<RouteProperties>[];
}) {
    const context = useContext(IRouterContext);

    return (
        <IRouterContext.Provider value={context}>
            <div>Hello, World!</div>
        </IRouterContext.Provider>
    )
}