import { HTMLAttributes, RefAttributes } from "react";
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

/** Signature for the types that defines a component of React/Preact. */
type JSXCustomElement<T extends HTMLElement> = HTMLAttributes<T> & RefAttributes<T>

declare module "react/jsx-runtime" {
    namespace JSX {
        interface IntrinsicElements {
            "route-sliver": JSXCustomElement<HTMLDivElement>;
        }
    }
}