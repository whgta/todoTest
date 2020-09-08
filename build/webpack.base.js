const path = require('path')
    //引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const stylus = require('stylus')
module.exports = {

    entry: './src/main.js',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../dist')
    },
    //打包规则
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.(jpg|jpeg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    limit: 2048
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.styl(us)?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'stylus-loader'
                ]
            }
        ]
    },
    //插件
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),

    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            '@': path.resolve(__dirname, '../src'),
            'styles': path.resolve(__dirname, '../src/assets/styles'),
            'images': path.resolve(__dirname, '../src/assets/images')

        }
    }
}