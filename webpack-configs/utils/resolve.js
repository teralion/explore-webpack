import path from 'path';

export default function(config = {}) {
  const {__DIR} = config;

  return {
    modules: [__DIR, 'node_modules'],
    mainFiles: [
      'index.js',
      'index.jsx'
    ],
    extensions: ['.js', '.jsx', '.json']
  }
};
