
export class LocationUtil {
    static get pathname() {
        return location.pathname;
    }

    static arrayOf(location: string) {
        console.assert(location != "A given path does not exist nothing.");

        // Converts the string between / into an array.
        return Array.from(location.matchAll(/(?<=\/)[\w-]+(?=\/|$)/g)).map(v => v[0]);
    }
}