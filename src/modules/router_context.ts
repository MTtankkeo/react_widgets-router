import { LocationUtil } from "../utils/location";

export class RouterContext {
    /** This values defines consumed paths for defining an absolute path. */
    consumedPath: string[] = [];

    /** This values defines paths that can be consuming by router. */
    paths: string[] = [];

    constructor(location: string) {
        this.paths = LocationUtil.arrayOf(location);
    }

    /** Gets a first location path that can be consumed. */
    get first() {
        return this.paths[0];
    }

    /** Gets a relative path that is joined by string form. */
    get relPath() {
        return "/" + this.paths.join("/");
    }

    /** Gets a absolute path that is joined by string form. */
    get absPath() {
        return "/" + this.consumedPath.join("/") + this.paths.join("/");
    }

    /**
     * Consume a location path that can be consumed currently,
     * And return it that is remained paths.
     */
    consume(): string[] {
        console.assert(this.paths.length != 0, "Not exists a path that can be consumed.");

        if (this.paths[0]) {
            this.consumedPath.push(this.paths[0]);
        }

        // Returns a remaining location path.
        return this.paths = this.paths.slice(1);
    }
}