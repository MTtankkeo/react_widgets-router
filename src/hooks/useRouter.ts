import { RouterBinding } from "../modules/router_binding";
import { RouteOptions, RoutingBehavior } from "../types";
import { useLocation } from "./useLocation";

export function useRouter(options?: RouteOptions) {
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
                ? RouterBinding.instance.move("/" + [...context.consumedPath, routingPath].join("/"))
                : RouterBinding.instance.push("/" + [...context.consumedPath, routingPath].join("/"));
        }
    }

    return callback;
}