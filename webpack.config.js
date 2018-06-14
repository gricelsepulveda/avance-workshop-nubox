const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ROOT_PATH = require('path')
const WEBPACK = require('webpack')
require("babel-core/register");
require("babel-polyfill");


//Ruta en donde está Json de configuración
const baseUrl = { url: '' }

module.exports = {
  entry:
  {
    index: ['babel-polyfill',ROOT_PATH.resolve(__dirname,'src/index.js')],
  },
  output:
  {
    filename: 'demo' + '.[name].js',
  },
  devServer:
  {
    contentBase: __dirname + '/dist/',
    compress: true,
    port: 8095,
    open: true,
    historyApiFallback: true,      
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      '@actions': path.resolve('src/actions/containers'),
      '@components': path.resolve('src/components'),
      '@containers': path.resolve('src/containers'),
      '@constants': path.resolve('src/constants'),
      '@reducers': path.resolve('src/reducers'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },      
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false }
          }
        ]
      },
      {
        test: /\.woff$/,
        use: 'file-loader?name=[name].[ext]&mimetype=application/font-woff'
      }
      ,
      {
        test: /\.woff2$/,
        use: 'file-loader?name=[name].[ext]&mimetype=application/font-woff2'

      }
      ,
      {
        test: /\.ttf$/,
        use: 'file-loader?name=[name].[ext]&mimetype=application/font-sfn'
      }
      ,
      {
        test: /\.eot$/,
        use: 'file-loader?name=[name].[ext]'
      }
      ,
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: 'file-loader?name=[name].[ext]'
      }
      ,
      {
        test: /\.svg$/,
        use: 'file-loader?name=[name].[ext]&mimetype=image/svg+xml'
      },

      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }, 
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?url=false&minimize=true',
            'sass-loader?sourceMap'
          ],
        })
      },    
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new ExtractTextPlugin("./styles.css"),
    new WEBPACK.DefinePlugin({
      BASE_URL: JSON.stringify(baseUrl)
    })
  ]
};