import { RouterContext } from "../modules/router_context";
/**
 * This hook is used to reference the currently uniquely defined pure router context.
 * Therefore, it is used to consume paths, not for the purpose of referencing
 * absolute or relative paths.
 */
export declare function useLocation(): RouterContext;
