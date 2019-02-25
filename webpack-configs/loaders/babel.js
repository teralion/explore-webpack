
function babelOptions(config = {}) {
  const presets = ['@babel/preset-env'];
  const plugins = [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import'
  ];

  return {
    presets,
    plugins
  }
};

const shared = {
  test: /\.js|jsx$/,
  exclude: /node_modules(?!.+-es6)/
};

export function browser(config = {}) {
  return {
    ...shared,
    use: [
      {
        loader: 'babel-loader',
        options: babelOptions(config)
      }
    ]
  }
};

export function server(config = {}) {
  return {
    ...shared,
    use: [
      {
        loader: 'babel-loader',
        options: babelOptions(config)
      }
    ]
  }
};
