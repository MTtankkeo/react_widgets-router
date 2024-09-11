import { FunctionComponent, ReactNode } from "react";

/** Signature for the interface that defines properties of the `Route` component. */
export interface RouteProperties {
    path: string;
    default?: boolean;
    element?: ReactNode;
    component?: FunctionComponent;
    keepalive?: boolean;
}

/**
 * ### Introduction
 * This component defines the content that should be displayed when the URL path matches the specified route.
 * It serves as a mapping between a URL path and the component or JSX element to render.
 * 
 * This component provides two ways to specify the content:
 * 1. `component`: A reference to a React component that will be rendered when the route matches.
 * 2. `element`: A JSX element or fragment that will be directly rendered when the route matches.
 *
 * See Also, one of `component` or `element` must be provided, but not both.
 * 
 * ### About Keep Alive
 * This `keepalive` property determines if the route's content should remain in memory after navigating away.
 * When `keepalive` is `true`, the route’s elements are kept in memory and their state is preserved,
 * even though they may be excluded from the layout.
 * 
 * ### Example
 * ```tsx
 * return (
 *     <Router>
 *         <Route path="/example-1" component={ExamplePage1} />
 *         <Route path="/example-2" component={ExamplePage2} />
 *         <Route path="/example-3" element={<ExamplePage3 />} />
 *         <Route path="/example-4" element={<>Hello, World!</>} />
 *     </Router>
 * )
 * ```
 */
export function Route(props: RouteProperties) {
    console.assert(props.element != null || props.component != null, "Not exists a given component");
    console.assert(props.element == null && props.component != null, "Cannot define rendering a component.");
    console.assert(props.element != null && props.component == null, "Cannot define rendering a component.");

    // Just returns one of the two a given component.
    return (props.component ?? props.element) as JSX.Element;
}