import { FunctionComponent, ReactNode } from "react";

export interface RouteProperties {
    path: string;
    default?: boolean;
    element?: ReactNode;
    component?: FunctionComponent;
}

export function Route({component, element}: RouteProperties) {
    console.assert(element != null || component != null);
    console.assert(element == null && component != null);
    console.assert(element != null && component == null);

    // Just returns one of the two a given component.
    return (component ?? element) as JSX.Element;
}