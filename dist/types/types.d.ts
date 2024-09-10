import { RouterContext } from "./modules/router_context";
export declare enum RoutingType {
    absolute = 0,
    relative = 1
}
export type RouteOptions = {
    context: RouterContext;
    replace: boolean;
    routing: RoutingType;
};
