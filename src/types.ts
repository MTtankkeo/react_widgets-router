import { RouterContext } from "./modules/router_context";

export enum RoutingType {
    absolute,
    relative,
}

export type RouteOptions = {
    context: RouterContext;
    replace: boolean;
    routing: RoutingType;
}