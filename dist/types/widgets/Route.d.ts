import { FunctionComponent, ReactNode } from "react";
export interface RouteProperties {
    path: string;
    default?: boolean;
    element?: ReactNode;
    component?: FunctionComponent;
}
export declare function Route({ component, element }: RouteProperties): JSX.Element;
