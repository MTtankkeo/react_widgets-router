import { RouterBinding } from "../modules/router_binding";
import { RouteOptions, RoutingType } from "../types";
import { useLocation } from "./useLocation";

export function useRoute(options?: RouteOptions) {
    const context = options?.context ?? useLocation();

    // By calling this callback function, we can define a path relatively.
    const callback = (path: string) => {
        const routingType = options?.routing ?? RoutingType.relative;
        const routingPath = path.startsWith("/") ? path.slice(1) : path;

        if (routingType == RoutingType.absolute) {
            RouterBinding.instance.push(path);
        } else {
            RouterBinding.instance.push("/" + [...context.consumedPath, routingPath].join("/"));
        }
    }

    return callback;
}