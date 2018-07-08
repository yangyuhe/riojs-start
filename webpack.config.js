const path=require("path")
const Clean=require("clean-webpack-plugin")
const htmlWebpackPlugin=require("html-webpack-plugin")
const webpack=require("webpack")
const multi = require("multi-loader")
module.exports={
    entry:{
        app:"./src/index.ts"
    },
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    devtool: 'source-map',
    module:{
        rules:[{
            test:/\.ts$/,
            use:[
                {
                    loader:"ts-loader",
                    options:{
                        transpileOnly:true
                    }
                }
            ]
        },{
            test:/\.scss$/,
            loader:multi(
                "style-loader!css-loader!sass-loader"
            )
        },{
            test:/\.(png|svg|jpg|gif)$/,
            use:{
                loader:"file-loader"
            }
        },{
            test: /\.js$/,
            use: ["source-map-loader"],
            enforce: "pre"
        },{
            test:/\.html$/,
            use:["html-loader"]
        }]
    },
    resolve:{
        extensions:[".ts",".js"]
    },
    plugins:[
        new Clean(["./dist"]),
        new htmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new webpack.HotModuleReplacementPlugin({})
    ],
    devServer: {
        historyApiFallback: true,
        hot:true
    }
}