
/** Signature for the callback function that is called when a location path updated. */
export type RouterUpdateListener = (oldPath: string, newPath: string) => void;

export class RouterBinding {
    private static _instance: RouterBinding;
    private constructor() {}

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

    notifyListeners(oldPath: string, newPath: string) {
        this.listeners.forEach(l => l(oldPath, newPath))
    }

    push(path: string) {
        const oldPath = location.pathname;
        const newPath = path;
        if (oldPath != newPath) {
            this.notifyListeners(oldPath, newPath);
            history.pushState(null, "", newPath);
        }
    }

    pop() {

    }
}