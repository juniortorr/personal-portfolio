const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/app.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(plug|jpg|jpeg|gif|png|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|tff|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    minimizer: [
      '...',
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
            ],
          },
        },
      }),
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/home.html',
      minify: true,
    }),
    new EnvironmentPlugin({
      NODE_ENV: 'development',
      MAILSLURP_API_KEY: '6506e120f92ffbd315518bb9cb7d87a74daf8b83701972fe7dc244063456343e',
      MAILSLURP_EMAIL: '73507db7-7601-4ce0-be9d-2ca2abc8f272',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'main.js',
    assetModuleFilename: 'images/[name]',
  },
};
