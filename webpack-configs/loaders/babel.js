
function babelOptions() {
  const presets = [
    '@babel/preset-env',
    '@babel/react'
  ];

  const plugins = [
    'add-module-exports',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import'
  ];

  return {
    presets,
    plugins,
    babelrc: false
  }
};

const shared = {
  test: /\.js|jsx$/,
  exclude: /node_modules(?!.+-es6)/
};

export function browser() {
  return {
    ...shared,
    use: [
      {
        loader: 'babel-loader',
        options: babelOptions()
      }
    ]
  }
};

export function server() {
  return {
    ...shared,
    use: [
      {
        loader: 'babel-loader',
        options: babelOptions()
      }
    ]
  }
};
