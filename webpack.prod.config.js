const path = require("path")
const Clean = require("clean-webpack-plugin")
const htmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: {
        home: "./src/entry/home.ts",
        login:"./src/entry/login.ts"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: [
                {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true
                    }
                }
            ]
        }, {
            test: /\.scss$/,
            "use": [MiniCssExtractPlugin.loader, "css-loader", {
                loader:"sass-loader",
                options: {
                    outputStyle: "compressed",
                    sourceComments:false
                }
            }]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: {
                loader: "file-loader",
                options:{
                    name:"[hash].[ext]",
                    outputPath:"assets"
                }
            }
        }, {
            test: /\.js$/,
            use: ["source-map-loader"],
            enforce: "pre"
        }, {
            test: /\.html$/,
            use: ["html-loader"]
        }]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new Clean(["./dist"]),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename:"[id].css"
        }),
        new htmlWebpackPlugin({
            template: "./src/entry/home.html",
            filename: 'home.html',
            chunks:['home','vendors']
        }),
        new htmlWebpackPlugin({  // Also generate a test.html
            filename: 'login.html',
            template: './src/entry/login.html',
            chunks:['login','vendors']
        })
    ]
}