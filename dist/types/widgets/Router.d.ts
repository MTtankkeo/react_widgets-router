import { ReactElement } from "react";
import { RouterContext } from "../modules/router_context";
import { RouteProperties } from "../widgets/Route";
export declare const _RouterContext: import("react").Context<RouterContext | null>;
export declare function Router({ location, children }: {
    location?: string;
    children: ReactElement<RouteProperties> | ReactElement<RouteProperties>[];
}): import("react/jsx-runtime").JSX.Element;
