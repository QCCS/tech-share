module.exports = {
    entry: __dirname + '/src/index.js',//入口文件
    output: {
        path: __dirname + '/dist',//打包后的文件位置
        filename: 'index.js'//打包后的文件
    },
    module: {
        rules:[
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: { presets: ["react","es2015","stage-0"] }
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
    }
}
