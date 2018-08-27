const path=require("path")
const htmlWebpackPlugin=require("html-webpack-plugin")
const webpack=require("webpack")
const appModule=process.env.appModule.trim()
module.exports={
    entry:{
        home:`./src/entry/${appModule}.ts`
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
            loader:"style-loader!css-loader!sass-loader"
        },{
            test:/\.(png|svg|jpg|gif)$/,
            use:{
                loader:"file-loader",
                options:{
                    name:"[name].[ext]",
                    outputPath:"assets"
                }
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
        new htmlWebpackPlugin({
            template:`./src/entry/${appModule}.html`
        }),
        new webpack.HotModuleReplacementPlugin({})
    ],
    devServer: {
        historyApiFallback: true,
        hot:true
    }
}