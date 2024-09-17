import { useContext, useRef } from "react";
import { _RouterContext } from "../widgets/Router";
import { RouterContext } from "../modules/router_context";

/**
 * This hook used for a purpose of a user simply referring to
 * absolute or relative paths in stateful components.
 */
export function useLocation() {
    const context = useContext(_RouterContext) ?? new RouterContext(window.location.pathname);
    const contextRef = useRef(context);

    // A upper-level router context is not updating.
    if (contextRef.current === context) { 
        return contextRef.current.clone;
    }

    return contextRef.current = context;
}