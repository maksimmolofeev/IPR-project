const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");


module.exports = (env) => {
    const isDev = env.mode === 'development'
    return {
        mode: env.mode || 'production',
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, 'bundle'),
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html')
            })
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: {
            port: env.port || 3000,
            open: true
        },
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }
    }
}