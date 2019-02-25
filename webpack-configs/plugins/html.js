import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

function getOptions(config) {
  const {__DIR} = config;

  return {
    title: '',
    inject: 'body',
    template: path.join(__DIR, 'server', 'templates', 'app.mustache'),
    filename: 'main.mustache'
  }
};

export default function(config = {}) {
  return new HtmlWebpackPlugin(getOptions(config));
};
