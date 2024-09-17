import { RouterContext } from "../modules/router_context";
/**
 * This hook is used to reference the currently uniquely defined pure router context.
 * Therefore, it is used not only for referencing absolute or relative paths
 * but also for consuming paths.
 */
export declare function useLocation(): RouterContext;
