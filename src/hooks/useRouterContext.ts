import { useContext, useState } from "react";
import { _RouterContext } from "../widgets/Router";
import { RouterBinding } from "../modules/router_binding";
import { RouterContext } from "../modules/router_context";

/**
 * This hook is used to reference the currently uniquely defined pure router context.
 * Therefore, it is used to consume paths, not for the purpose of referencing
 * absolute or relative paths.
 */
export function useRouterContext() {
    let context = useContext(_RouterContext);
    let binding = RouterBinding.instance;
    if (context == null) {
        const [location, setLocation] = useState(window.location.pathname);

        context = new RouterContext(location);
        binding.addListener(setLocation);
    }

    return context;
}