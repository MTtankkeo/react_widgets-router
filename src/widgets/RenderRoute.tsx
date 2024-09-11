import { ReactElement } from "react";
import { RouteProperties } from "./Route";

export function RenderRoute({route, active}: {route?: ReactElement<RouteProperties>, active: boolean}) {
    // This value defines a component that must be rendered.
    const RenderComponent = route?.props.component;
    const RenderElement = route?.props.element;
    const Render = RenderElement ?? (RenderComponent ? <RenderComponent /> : <></>);

    return (
        <render-route style={{display: active ? "contents" : "none"}}>{Render}</render-route>
    );
}

addEventListener("DOMContentLoaded", () => {
    const sheet = new CSSStyleSheet();
    sheet.insertRule("render-route { position: absolute; }");
    sheet.insertRule("*:has(> render-route) { position: relative; }");

    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
});