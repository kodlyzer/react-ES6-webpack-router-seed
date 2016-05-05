var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        'main.bundle': [
            './src/index.jsx'
        ],
        vendor: ['react', 'react-dom', 'react-router'],
    },

    devtool: process.env.NODE_ENV === 'production' ? '' : 'inline-source-map',

    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].js',
        publicPath: '/'
    },

    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ] : [new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")],

    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: path.join(__dirname, 'src'),
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-0'],
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass',
            include: path.join(__dirname, 'src')
        }]
    }
}
