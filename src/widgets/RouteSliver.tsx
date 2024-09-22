import { ReactElement, useLayoutEffect, useRef } from "react";
import { RouteProperties } from "./Route";

/** 
 * A component that manages the rendering of a route based on its active state. 
 * It handles animations for transitioning between routes.
 */
export function RouteSliver({route, active, first}: {
    active: boolean;
    first: boolean;
    route?: ReactElement<RouteProperties>;
}) {
    const activeRef = useRef<boolean>(active);
    const sliverRef = useRef<HTMLDivElement>(null);

    // This value defines a component that must be rendered.
    const RenderComponent = route?.props.component;
    const RenderElement = route?.props.element;
    const Render = RenderElement ?? (RenderComponent ? <RenderComponent /> : <></>);

    useLayoutEffect(() => {
        const sliver = sliverRef.current;

        // When an element should not be rendered initially,
        // there is no need to consider fade-in or fade-out animation tasks.
        if (sliver && first && activeRef.current == active)  {
            if (!active) {
                sliver.style.display = "none";
            }
        } else if (sliver) {
            activeRef.current = active;

            const computedStyle = getComputedStyle(sliver);
            const fadeinKeyframe = computedStyle.getPropertyValue("--router-fadein-keyframe").replaceAll("\"", "");
            const fadeinDuration = computedStyle.getPropertyValue("--router-fadein-duration")
            const fadeoutKeyframe = computedStyle.getPropertyValue("--router-fadeout-keyframe").replaceAll("\"", "");
            const fadeoutDuration = computedStyle.getPropertyValue("--router-fadeout-duration");

            if (active) {
                sliver.style.display = "unset";

                // Starts fade-in animation effect of a route sliver.
                if (fadeinKeyframe) {
                    sliver.style.animation = `${fadeinKeyframe} ${fadeinDuration || "0.3s"}`;
                    sliver.onanimationend = null;
                    return;
                }
            } else {
                // Starts fade-out animation effect of a route sliver.
                if (fadeoutKeyframe) {
                    sliver.style.animation = `${fadeoutKeyframe} ${fadeoutDuration || "0.3s"}`;
                    sliver.onanimationend = () => sliver.style.display = "none";
                    return;
                }

                sliver.style.display = "none";
            }
        }

        activeRef.current = active;
    }, [active]);

    return (
        <route-sliver ref={sliverRef} children={Render} />
    );
}

addEventListener("DOMContentLoaded", () => {
    const sheet = new CSSStyleSheet();

    // This CSS selector is selecting a router-sliver element.
    sheet.insertRule(`
        route-sliver {
            position: absolute;
            width: 100%;
            height: 100%;
        }
    `);

    // This CSS selector is selecting the parent of a route-sliver.
    sheet.insertRule(`
        *:has(> route-sliver) {
            position: relative;
            top: 0px;
            left: 0px;
        }
    `);

    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
});