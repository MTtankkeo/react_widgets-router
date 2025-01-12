import { useContext, useEffect, useState } from "react";
import { _RouterContext } from "../widgets/Router";
import { RouterContext } from "../modules/router_context";
import { RouterBinding } from "../modules/router_binding";

/**
 * This hook is used to reference the currently uniquely defined pure router context.
 * Therefore, it is used not only for referencing absolute or relative paths
 * but also for consuming paths.
 */
export function useLocation() {
    let context = useContext(_RouterContext);
    let binding = RouterBinding.instance;
    if (context == null) {
        const [location, setLocation] = useState(window.location.pathname);

        context = new RouterContext(location);

        useEffect(() => {
            // Called when the window location path changes.
            binding.addListener(setLocation);

            // Called when must be disposing the old listener.
            return () => binding.removeListener(setLocation);
        }, []);
    }

    return context.clone;
}