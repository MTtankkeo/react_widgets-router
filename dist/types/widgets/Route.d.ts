import { FunctionComponent, ReactNode } from "react";
export interface RouteProperties {
    path: string;
    element?: ReactNode;
    component?: FunctionComponent;
}
export declare function Route({ component }: RouteProperties): FunctionComponent<{}> | undefined;
