const webpack = require("webpack");
let env = process.env;
console.log(env.NODE_ENV)
let proxy = null;
let proxyDev = {
    '/api':{
        target: "http://test.json119.com",
        secure: true,
        changeOrigin: true,
        pathRewrite: { '^/api' : '' }
    }
}
let proxyProd = {
    '/api':{
        target: "http://www.json119.com",
        secure: true,
        changeOrigin: true,
        pathRewrite: { '^/api' : '' }
    }
}
if(env.NODE_ENV==="dev"){
    proxy = proxyDev;
}else if(env.NODE_ENV==="prod"){
    proxy = proxyProd;
}

module.exports = {
    entry: __dirname + '/src/index.js',//入口文件
    output: {
        path: __dirname + '/dist',//打包后的文件位置
        filename: 'index.js'//打包后的文件
    },
    devServer: {
        contentBase: './src',//默认本地服务器在跟目录
        historyApiFallback: true,//不跳转，默认会跳转且都跳到index.html上
        inline: true,//源文件改变时刷新页面
        hot: true,
        port: 8085//更改端口号，默认8080
        ,proxy
    },
    // devtool: 'cheap-module-eval-source-map',//好几种模式
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {presets: ["react", "es2015", "stage-0"]}
                }],
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
