import { ReactElement } from "react";
import { RouteProperties } from "./Route";

export function RenderRoute({route, active}: {route?: ReactElement<RouteProperties>, active: boolean}) {
    // This value defines a component that must be rendered.
    const RenderComponent = route?.props.component;
    const RenderElement = route?.props.element;
    const Render = RenderElement ?? (RenderComponent ? <RenderComponent /> : <></>);

    return (
        <div style={{display: active ? "contents" : "none"}}>{Render}</div>
    );
}