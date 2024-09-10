import { FunctionComponent } from "react";
import { RouteProperties } from "./Route";
export declare function Router({ location, children }: {
    location: string;
    children: FunctionComponent<RouteProperties>[];
}): import("react/jsx-runtime").JSX.Element;
