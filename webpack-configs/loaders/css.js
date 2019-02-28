import autoprefixer from 'autoprefixer';

function common(config = {}) {
  const {production} = config;

  return [
    {
      loader: 'css-loader',
      options: {
        modules: true,
        localIdentName: '[name]-[local]-[hash:base64:5]',
        sourceMap: true
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: production,
        plugins() {return [autoprefixer]}
      }
    },
    {
      loader: 'stylus-loader',
      options: {
        sourceMap: production,
        preferPathResolver: 'webpack'
      }
    }
  ]
}

export function styl(config = {}) {
  const {production} = config;

  return {
    test: /\.styl$/,
    use: [
      {
        loader: 'style-loader',
        options: {
          sourceMap: true
        }
      },
      ...common(config)
    ]
  }
}

export function css(config = {}) {
  const {production} = config;

  return {
    test: /\.css$/,
    use: [...common(config)]
  }
}
