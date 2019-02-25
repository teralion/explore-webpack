import path from 'path';
import dotenv from './utils/dotenv';
import {server as entry} from './utils/entry';
import {server as output} from './utils/output';
import externals from './utils/externals';
import resolve from './utils/resolve';
import globals from './plugins/globals';
import {server as babel} from './loaders/babel';
import mustache from './loaders/mustache';

const config = {
  __DIR: path.resolve('./')
};

dotenv(config);

export default function server() {
  const development = process.env.NODE_ENV === 'development';
  const production = !development;
  const props = {...config, production};

  return {
    target: 'node',
    mode: development ? 'development' : 'production',
    context: config.__DIR,
    entry: entry(props),
    output: output(props),
    resolve: resolve(props),
    externals: externals(props),
    module: {
      rules: [
        babel(props), 
        mustache(props)
      ]
    },
    plugins: [globals(props)]
  }
};
