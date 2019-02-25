
export default function(options = {}) {
  const {production} = options;

  return {
    test: /\.mustache$/,
    use: [
      {
        loader: 'mustache-loader',
        options: {
          noShortcut: true,
          tiny: !!production
        }
      }
    ]
  }
};
