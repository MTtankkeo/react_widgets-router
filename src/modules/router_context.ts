
export class RouterContext {
    /** This values defines paths that can be using. */
    paths: string[] = [];

    constructor(location: string) {
        console.assert(location != "A given path does not exist nothing.");
        this.paths = Array.from(location.matchAll(/(?<=\/)[\w-]+(?=\/|$)/g)).map(v => v[0]);
    }
}