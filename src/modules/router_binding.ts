
/** Signature for the callback function that is called when a location path updated. */
export type RouterUpdateListener = (newPath: string) => void;

/**
 * This singleton class that manages routing and state updates.
 * Listens to history changes and notifies registered listeners
 * when the current path changes.
 */
export class RouterBinding {
    private static _instance: RouterBinding;
    private constructor() {
        window.onpopstate = (_) => this.notifyListeners(location.pathname);
    }

    static get instance() {
        return this._instance ?? (this._instance = new RouterBinding());
    }

    /** This values defines listeners that is called when a location path updated. */
    protected listeners: RouterUpdateListener[] = [];

    addListener(listener: RouterUpdateListener) {
        console.assert(!this.listeners.includes(listener), "Already exists a given listener in the context.");
        this.listeners.push(listener);
    }

    removeListener(listener: RouterUpdateListener) {
        console.assert(this.listeners.includes(listener), "Already not exists a given listener in the context.");
        this.listeners = this.listeners.filter(l => l != listener);
    }

    /** Notifies staticly a given path to registered listeners. */
    notifyListeners(newPath: string) {
        this.listeners.forEach(l => l(newPath))
    }

    /**
     * Navigate to a new path if it differs from the current path.
     * Updates the history stack and notifies listeners of the new path.
     */
    push(path: string) {
        if (location.pathname != path) {
            this.notifyListeners(path), history.pushState(null, "", path);
        }
    }

    /**
     * Move to a new path by first going back in the history stack
     * and then pushing the new path. Notifies listeners of the new path.
     * 
     * Therefore, This just merely replaces the current path
     * with a given path, And the path depth does not change.
     */
    move(path: string) {
        if (location.pathname != path) {
            history.back();
            history.pushState({}, "", path);
            this.notifyListeners(location.pathname);
        }
    }

    /** Move forward in the history stack and notify listeners of the current path. */
    forward() {
        history.forward(), this.notifyListeners(location.pathname);
    }

    /** Move backward in the history stack and notify listeners of the current path. */
    backward() {
        history.back(), this.notifyListeners(location.pathname);
    }
}