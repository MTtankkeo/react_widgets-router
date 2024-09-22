import { RouterBinding } from "../modules/router_binding";
import { RouteOptions, RoutingBehavior } from "../types";
import { useLocation } from "./useLocation";

export function useRoute(options?: RouteOptions) {
    const context = options?.context ?? useLocation();

    // By calling this callback function, we can define a path relatively.
    const callback = (path: string) => {
        const routingType = options?.routing ?? RoutingBehavior.relative;
        const routingPath = path.startsWith("/") ? path.slice(1) : path;

        if (routingType == RoutingBehavior.absolute) {
            options?.replace ?? false
                ? RouterBinding.instance.move(path)
                : RouterBinding.instance.push(path);
        } else {
            options?.replace ?? false
                ? RouterBinding.instance.move("/" + [...context.consumedPaths, routingPath].join("/"))
                : RouterBinding.instance.push("/" + [...context.consumedPaths, routingPath].join("/"));
        }
    }

    return callback;
}