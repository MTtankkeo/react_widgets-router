import { useContext } from "react";
import { _RouterContext } from "../widgets/Router";
import { RouterContext } from "../modules/router_context";

export function useLocation() {
    const context = useContext(_RouterContext) ?? new RouterContext(location.pathname);
    return context;
}