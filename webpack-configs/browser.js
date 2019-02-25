import path from 'path';
import dotenv from './utils/dotenv';
import {browser as entry} from './utils/entry';
import {browser as output} from './utils/output';
import externals from './utils/externals';
import resolve from './utils/resolve';
import globals from './plugins/globals';
import html from './plugins/html';
import {hmr} from './plugins/webpack';
import {browser as babel} from './loaders/babel';
import statics from './loaders/statics';
import css from './loaders/css';

const config = {
  __DIR: path.resolve('./')
};

dotenv(config);

export default function browser() {
  const development = process.env.NODE_ENV === 'development';
  const production = !development;
  const props = {...config, production};

  return {
    mode: development ? 'development' : 'production',
    context: config.__DIR,
    entry: entry(props),
    output: output(props),
    externals: externals(props),
    resolve: resolve(props),
    devtool: development ? 'inline-source-map' : false,
    module: {
      rules: [
        babel(props), 
        statics(props),
        css(props)
      ]
    },
    plugins: [
      globals(props), 
      html(props),
      development ? hmr() : false
    ].filter(Boolean)
  }
};
