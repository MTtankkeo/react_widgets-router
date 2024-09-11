
/** Signature for the callback function that is called when a location path updated. */
export type RouterUpdateListener = (newPath: string) => void;

export class RouterBinding {
    private static _instance: RouterBinding;
    private constructor() {
        window.onpopstate = (_) => this.notifyListeners(location.pathname);
    }

    static get instance() {
        return this._instance ?? (this._instance = new RouterBinding());
    }

    /** This values defines listeners that is called when a location path updated. */
    listeners: RouterUpdateListener[] = [];
    
    addListener(listener: RouterUpdateListener) {
        console.assert(!this.listeners.includes(listener), "Already exists a given listener in the context.");
        this.listeners.push(listener);
    }

    removeListener(listener: RouterUpdateListener) {
        console.assert(this.listeners.includes(listener), "Already not exists a given listener in the context.");
        this.listeners = this.listeners.filter(l => l != listener);
    }

    notifyListeners(newPath: string) {
        this.listeners.forEach(l => l(newPath))
    }

    route(path: string) {
        this.notifyListeners(path);
        history.pushState(null, "", path);
    }
}