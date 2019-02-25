import path from 'path';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import config from 'webpack-configs/browser.js';

const options = {
  contentBase: path.resolve(__dirname, 'build'),
  publicPath: '/assets/',
  hot: true,
  hotOnly: true,
  host: 'localhost',
  writeToDisk: true
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config({development: true}));
const server = new webpackDevServer(compiler, options);

export default server;
