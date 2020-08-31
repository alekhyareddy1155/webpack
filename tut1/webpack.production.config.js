const path=require('path');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const {CleanWebpackPlugin }=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    // entry: {
    //     'hello-world': './src/hello-world.js',
    //     'Cam':'./src/Cam.js'
    // },
    entry: './src/index.js',
    output: {
        // filename:'[name].[contenthash].js',
        filename: 'bundle.[contenthash].js',
        path:path.resolve(__dirname, './dist'),
        publicPath:''
    },
    mode:'production',
    // optimization: {
    //     splitChunks:{
    //         chunks:"all",
    //         minSize:10000,
    //         automaticNameDelimiter:'_'
    //     }
    // },
    module:{
        rules:[
            {
                test:/\.(png|jpg)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[ '@babel/env' ],
                        plugins:[ 'transform-class-properties' ]
                    }
                },
            },
            {
                test:/\.hbs$/,
                use:[
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            // filename:'[name].[contenthash].css'
            filename: 'styles.[contenthash].js',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // filename:'hello-world.html',
            // chunks:['hello-world','vendors~Cam~hello-world'],
            title:'hello-world',
            template:'src/page-template.hbs',
            description:'some description'
        })
        // new HtmlWebpackPlugin({
        //     filename:'Cam.html',
        //     chunks:['Cam','vendors~Cam~hello-world'],
        //     title:'Cam',
        //     template:'src/page-template.hbs',
        //     description:'Cam'
        // })
    ]
}