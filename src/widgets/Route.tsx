import { FunctionComponent, ReactNode } from "react";

export interface RouteProperties {
    path: string;
    element?: ReactNode;
    component?: FunctionComponent;
}

export function Route({component}: RouteProperties) {
    return component;
}