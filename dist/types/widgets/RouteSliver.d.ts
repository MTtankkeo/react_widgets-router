import { ReactElement } from "react";
import { RouteProperties } from "./Route";
/**
 * A component that manages the rendering of a route based on its active state.
 * It handles animations for transitioning between routes.
 */
export declare function RouteSliver({ route, active, first }: {
    active: boolean;
    first: boolean;
    route?: ReactElement<RouteProperties>;
}): import("react/jsx-runtime").JSX.Element;
