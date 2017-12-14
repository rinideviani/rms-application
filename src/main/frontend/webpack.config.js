const path = require('path');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    source: path.join(__dirname, 'app'),
    output: path.join(__dirname, '../../../target/classes/static')
};

const common = {
		entry: {
		    js: "./app/index.jsx",
		    css: "./app/main.css",
		    html: "./app/index.html",
		  },

		  output: {
		        path: PATHS.output,
		        publicPath: '',
		        filename: 'bundle.js'
		    },
		  module: {
			    preLoaders: [
			        //Eslint loader
			      { test: /\.jsx?$/, exclude: /node_modules/, loader: "eslint-loader"},
			    ],
			    loaders: [
			      { test: /\.html$/, loader: "file?name=[name].[ext]" },
			      { test: /\.css$/, loader: "file?name=[name].[ext]" },
			      { test: /\.jsx?$/, exclude: /node_modules/, loaders: [  "babel-loader"]},
			    ],
			  },
			  resolve: {
			    extensions: ['', '.js', '.jsx']
			  },
			  eslint: {
			    configFile: './.eslintrc'
			  },
};

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devServer: {
            port: 9090,
            proxy: {
                '/': {
                    target: 'http://localhost:8080',
                    secure: false,
                    prependPath: false
                }
            },
            publicPath: 'http://localhost:9090/',
            historyApiFallback: true
        },
        devtool: 'source-map'
    });
}

if (TARGET === 'build') {
    module.exports = merge(common, {});
}

