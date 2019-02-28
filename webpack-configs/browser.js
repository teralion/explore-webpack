import path from 'path';
import dotenv from './utils/dotenv';
import {browser as entry} from './utils/entry';
import {browser as output} from './utils/output';
import resolve from './utils/resolve';
import optimization from './utils/optimization';
import globals from './plugins/globals';
import html from './plugins/html';
import {hmr} from './plugins/webpack';
import analyze from './plugins/analyze';
import compression from './plugins/compression';
import {browser as babel} from './loaders/babel';
import statics from './loaders/statics';
import {css, styl} from './loaders/css';

const config = {
  __DIR: path.resolve('./')
};

dotenv(config);

export default function browser() {
  const development = process.env.NODE_ENV === 'development';
  const analyze = false;
  const production = !development;
  const props = {...config, production};

  return {
    target: 'web',
    mode: development ? 'development' : 'production',
    context: config.__DIR,
    entry: entry(props),
    output: output(props),
    resolve: resolve(props),
    devtool: development ? 'inline-source-map' : false,
    module: {
      rules: [
        babel(props), 
        statics(props),
        styl(props),
        css(props)
      ]
    },
    plugins: [
      globals(props), 
      html(props),
      development ? hmr() : null,
      analyze ? analyze() : null,
      production ? compression() : null
    ].filter(Boolean),
    optimization: optimization(props)
  }
};
