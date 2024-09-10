/** Signature for the callback function that is called when a location path updated. */
export type RouterUpdateListener = (oldPath: number, newPath: number) => void;
export declare class RouterContext {
    /** This values defines consumed paths for defining an absolute path. */
    consumedPath: string[];
    /** This values defines paths that can be consuming by router. */
    paths: string[];
    /** This values defines listeners that is called when a location path updated. */
    protected listeners: RouterUpdateListener[];
    constructor(location: string);
    /** Gets a first location path that can be consumed. */
    get first(): string;
    /** Gets a relative path that is joined by string form. */
    get relPath(): string;
    /** Gets a absolute path that is joined by string form. */
    get absPath(): string;
    /**
     * Consume a location path that can be consumed currently,
     * And return it that is remained paths.
     */
    consume(): string[];
    addListener(listener: RouterUpdateListener): void;
    removeListener(listener: RouterUpdateListener): void;
}
