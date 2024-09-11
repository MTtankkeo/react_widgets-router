/** Signature for the callback function that is called when a location path updated. */
export type RouterUpdateListener = (newPath: string) => void;
/**
 * This singleton class that manages routing and state updates.
 * Listens to history changes and notifies registered listeners
 * when the current path changes.
 */
export declare class RouterBinding {
    private static _instance;
    private constructor();
    static get instance(): RouterBinding;
    /** This values defines listeners that is called when a location path updated. */
    protected listeners: RouterUpdateListener[];
    /** This value defines whether a pop event must be ignored once. */
    private needsIgnoreApiEvent;
    addListener(listener: RouterUpdateListener): void;
    removeListener(listener: RouterUpdateListener): void;
    /** Notifies staticly a given path to registered listeners. */
    notifyListeners(newPath: string): void;
    /**
     * Navigate to a new path if it differs from the current path.
     * Updates the history stack and notifies listeners of the new path.
     */
    push(path: string): void;
    /**
     * Move to a new path by first going back in the history stack
     * and then pushing the new path. Notifies listeners of the new path.
     *
     * Therefore, This just merely replaces the current path
     * with a given path, And the path depth does not change.
     */
    move(path: string): void;
    /** Move forward in the history stack and notify listeners of the current path. */
    forward(): void;
    /** Move backward in the history stack and notify listeners of the current path. */
    backward(): void;
}
