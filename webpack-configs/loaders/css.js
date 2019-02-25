import autoprefixer from 'autoprefixer';

export default function(config = {}) {
  const {production} = config;

  return {
    test: /\.(css|styl)$/,
    use: [
      {
        loader: 'style-loader',
        options: {sourceMap: true},
      },
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
      }
    ]
  }
};
