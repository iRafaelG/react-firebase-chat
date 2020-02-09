const path = require('path');
const HTMLWebpack = require('html-webpack-plugin');

module.exports = {

    entry: { //entrada de codigo a traducir
        app: './src/index.js' //app, application... lo que queramos
    },

    output: { //salida del codigo traducido
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' //bundle o el nombre que queramos
    },

    devServer: {
        contentBase: './dist',
        port: 3000
    },

    module: { //indicamos con que modulos debe de traducir los archivos según unas reglas establecidas
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: { //indicamos que presets usar a Babel
                    presets: ['react', 'env']
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },

    plugins: [
        new HTMLWebpack({
            template: './src/index.html',
            filename: './index.html'
        }) 
    ]
}