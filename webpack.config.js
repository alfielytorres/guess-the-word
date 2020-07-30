const path = require('path') // require library that allows us to combine paths in a global way


// in -> out
module.exports = {
    entry: ['babel-polyfill','./src/index.js'], // input - relative path entry path to where our src code lives
    output: {
        path: path.resolve(__dirname, 'public/scripts'), // combines paths 
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devServer: {
        contentBase:path.resolve(__dirname, 'public'), //must be an absolute path
        publicPath:'/scripts/' // where webpack puts out assets 
    },
    devtool:'source-map'
}
