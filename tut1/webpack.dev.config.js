const path=require('path');
const {CleanWebpackPlugin }=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    // entry: {
    //     // 'hello-world': './src/hello-world.js',
    //     // 'Cam':'./src/Cam.js'
        
    // },
    entry: './src/index.js',
    output: {
        filename:'[name].bundle.js',
        path:path.resolve(__dirname, './dist'),
        publicPath:''
    },
    mode:'development',
    devServer:{
        contentBase: path.resolve(__dirname, './dist'),
        index:'index.html',
        port:9000
    },
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
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // filename:'hello-world.html',
            // chunks:['hello-world'],
            title:'hello-world',
            template:'src/page-template.hbs',
            description:'some description'
        })
        // new HtmlWebpackPlugin({
        //     filename:'Cam.html',
        //     chunks:['Cam'],
        //     title:'Cam',
        //     template:'src/page-template.hbs',
        //     description:'Cam'
        // })
    ]
}