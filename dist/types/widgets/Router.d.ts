import { ReactElement } from "react";
import { RouteProperties } from "../widgets/Route";
export declare function Router({ location, children }: {
    location?: string;
    children: ReactElement<RouteProperties> | ReactElement<RouteProperties>[];
}): import("react/jsx-runtime").JSX.Element;
