import { useContext, useState } from "react";
import { _RouterContext } from "../widgets/Router";
import { RouterContext } from "../modules/router_context";
import { RouterBinding } from "../modules/router_binding";

export function useLocation() {
    let context = useContext(_RouterContext);
    let binding = RouterBinding.instance;
    if (context == null) {
        const [location, setLocation] = useState(window.location.pathname);

        context = new RouterContext(location);
        binding.addListener((_, newPath) => {
            setLocation(newPath);
        });
    }

    return context;
}