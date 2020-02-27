const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
module.exports = {
    entry: "./src/index.js",
    mode :"development",
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/(node_modules|bower_components)/,
                loader:"babel-loader",
                options:{
                    presets:["@babel/env"]
                }
            },
            {
                test:/\.css$/,
                use:["style-loader", "css-loader"]
            },
            {
                test:/\.(png|jpe?g|svg|gif)$/,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            name:"[name].[ext]",
                            outputPath:"images"
                        }
                    }
                ]
            },
            {
                test: /\.(html)$/,
                 use: {
                        loader: 'html-loader',
                        options: {
                            attrs: [':data-src']
                        }
                }
            }
        ]
    },
    resolve:{
        extensions:["*", ".js", ".jsx"]
    },
    output:{
        path: path.resolve(__dirname, "dist/"),
        publicPath:"/dist/",
        filename:"output.js"
    },
    devServer:{
        contentBase: path.join(__dirname, "public/"),
        port:3000,
        publicPath:"http://localhost:3000/dist/",
        open:true,
        stats:"errors-only",
        writeToDisk:true,
        hot:true,
        historyApiFallback:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            hash:true,
            inject:"body",
            template:"./public/index.html",
            filename:"output.html"
        }),
        new CleanWebpackPlugin()
    ]
}














