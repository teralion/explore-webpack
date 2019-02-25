import path from 'path';

export function browser(props = {}) {
  const {__DIR} = props;

  return {
    app: [
      '@babel/polyfill',
      path.join(__DIR, 'app')
    ]
  }
};

export function server(props = {}) {
  const {__DIR} = props;

  return {
    server: [
      '@babel/polyfill',
      path.join(__DIR, 'server')
    ]
  };
};
