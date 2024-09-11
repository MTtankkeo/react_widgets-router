import { HTMLAttributes, RefAttributes } from "react";
import { RouterContext } from "./modules/router_context";
/**
 * Signature for the enumeration that defines the behavior
 * types of routing within the application. (i.e. Browser)
 */
export declare enum RoutingBehavior {
    /** Routes are considered absolute, meaning they are interpreted from the root of the application. */
    absolute = 0,
    /** Routes are considered relative, meaning they are interpreted based on the current route's context. */
    relative = 1
}
/** Signature for the interface that defines options about the route behaviors. */
export interface RouteOptions {
    context?: RouterContext;
    replace?: boolean;
    routing?: RoutingBehavior;
}
/** Signature for the types that defines a component of React/Preact. */
type JSXCustomElement<T extends HTMLElement> = HTMLAttributes<T> & RefAttributes<T>;
declare module "react/jsx-runtime" {
    namespace JSX {
        interface IntrinsicElements {
            "route-sliver": JSXCustomElement<HTMLDivElement>;
        }
    }
}
export {};
