import { ReactElement } from "react";
import { RouteProperties } from "./Route";
/** Signature for the function that is called when a sliver disposed. */
export type RouteSliverDisposeCallback = (props: RouteProperties) => void;
/**
 * A component that manages the rendering of a route based on its active state.
 * It handles animations for transitioning between routes.
 */
export declare function RouteSliver({ route, active, first, onDispose }: {
    active: boolean;
    first: boolean;
    route?: ReactElement<RouteProperties>;
    onDispose: RouteSliverDisposeCallback;
}): import("react/jsx-runtime").JSX.Element;
