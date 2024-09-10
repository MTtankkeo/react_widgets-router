const HTMLInlinePlugin = require("html-inline-webpack-plugin");

/** @type {import("webpack").Configuration} */
const config = {
    mode: "development",
    entry: "./src/index.tsx",
    module: {
        rules: [
            { // for Typescript
                test: /.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    plugins: [
        new HTMLInlinePlugin({
            template: "./src/index.html",
            filename: "index.html",
            inline: false,
        })
    ]
}

module.exports = config;