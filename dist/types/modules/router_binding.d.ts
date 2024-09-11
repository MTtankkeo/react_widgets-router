/** Signature for the callback function that is called when a location path updated. */
export type RouterUpdateListener = (newPath: string) => void;
export declare class RouterBinding {
    private static _instance;
    private constructor();
    static get instance(): RouterBinding;
    /** This values defines listeners that is called when a location path updated. */
    listeners: RouterUpdateListener[];
    addListener(listener: RouterUpdateListener): void;
    removeListener(listener: RouterUpdateListener): void;
    notifyListeners(newPath: string): void;
    push(path: string): void;
    replace(path: string): void;
    pop(path: string): void;
}
