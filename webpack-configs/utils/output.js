import path from 'path';

export function browser(props = {}) {
  const {__DIR} = props;

  return {
    filename: '[name].js',
    path: path.join(__DIR, 'build'),
    publicPath: '/assets/'
  }
};

export function server(props = {}) {
  const {__DIR} = props;

  return {
    filename: 'server.js',
    path: path.join(__DIR, 'build'),
    publicPath: '/assets/',
    library: 'server',
    libraryTarget: 'commonjs2'
  }
};
