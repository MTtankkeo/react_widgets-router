import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";

const plugins = [
    typescript({
        tsconfig: "./tsconfig.json",
        useTsconfigDeclarationDir: true
    }),
    terser()
]

const globals = {
    "react": "React",
    "react-dom": "ReactDOM",
    "react/jsx-runtime": "jsxRuntime"
};

/**
 * This config values that defines about rollup compile options.
 * @type {import("rollup").RollupOptions}
 */
export default {
    plugins: plugins,
    input: "./src/index.ts",
    external: ["react", "react-dom", "react/jsx-runtime"],
    output: [
        { file: "./dist/index.esm.js", format: "esm", name: "ReactWidgetsRouter". globals },
        { file: "./dist/index.umd.js", format: "umd", name: "ReactWidgetsRouter", globals }
    ]
}