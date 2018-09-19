const webpack = require('webpack');
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
        hot: true,//热编译
        port: 8085//更改端口号，默认8080
    },
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
