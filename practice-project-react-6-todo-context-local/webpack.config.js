const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
    entry: '.src/components/index.js', // Assuming your entry point is src/index.js
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js' // Output filename
    },
    module: {
        rules: [
            // Add any necessary rules for processing JavaScript/JSX files
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        new CircularDependencyPlugin({
            exclude: /node_modules/, // Exclude node_modules directory
            failOnError: true, // Fail the build if circular dependencies are found
            cwd: process.cwd(), // Use the current working directory
        })
    ]
};
