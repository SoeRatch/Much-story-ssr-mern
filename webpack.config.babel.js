import path from 'path'
import webpack from 'webpack'
import { WDS_PORT } from './src/shared/config'
import { isProd } from './src/shared/util'
const ReactLoadableSSRAddon = require('react-loadable-ssr-addon');

export default {

 entry: [
  'react-hot-loader/patch',
  './src/client',
],
  output: {
    path:__dirname + '/dist',
    filename:'[name].js',
    chunkFilename:'[name].chunk.js',
    publicPath:isProd ? '/static/' : `http://localhost:${WDS_PORT}/dist/`,
  },
  devServer:{
    port: WDS_PORT,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  optimization: {
    splitChunks: {
      maxInitialRequests: 3,
      cacheGroups: {
        commons:{
          test: /[\\/]node_modules[\\/]/,
          name:'vendors',
          chunks:'all',
          minChunks:2,
        },
        default:{
          minChunks:2,
          reuseExistingChunk:true,
        }
      },
    },
  },
  devtool: isProd ? false : 'source-map',
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      {
            test: /\.css$/,
             use: [
                 {
                   loader: "style-loader"
                 },
                 {
                   loader: "css-loader",
                   options: {
                     modules: true
                   }
                 }
              ]
          }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
     alias: { 'react-dom': '@hot-loader/react-dom'  }
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ReactLoadableSSRAddon({
      filename: 'react-loadable-ssr-addon.json',
    }),
  ]
}