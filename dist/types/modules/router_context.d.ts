export declare class RouterContext {
    private location;
    /** This values defines consumed paths for defining an absolute path. */
    consumedPaths: string[];
    /** This values defines paths that can be consuming by router. */
    paths: string[];
    constructor(location: string);
    /** Gets a first location path that can be consumed. */
    get first(): string;
    /** Gets a relative path that is joined by string form. */
    get relPath(): string;
    /** Gets a absolute path that is joined by string form. */
    get absPath(): string;
    /** Gets a clone of this router context. */
    get clone(): RouterContext;
    /**
     * Consume a location path that can be consumed currently,
     * And return it that is remained paths.
     */
    consume(): string[];
}
