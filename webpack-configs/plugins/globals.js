import path from 'path';
import webpack from 'webpack';
import reduce from 'lodash/reduce';
import snakeCase from 'lodash/snakeCase';

function globalizeName(name) {
  return snakeCase(name).toUpperCase();
};

function filterNumber(value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) {
    return Number(value);
  }

  throw new Error('not a number');
};

function sanitizeValue(value) {
  if (typeof value === 'boolean') {
    return value;
  }

  if (value === 'true') {
    return true;
  } else if (value === 'false') {
    return false;
  }

  try {
    return filterNumber(value)
  } catch(e) {
    return JSON.stringify(value);
  }
};

function getNameAndValue(defaultValue, name) {
  const globalizedName = globalizeName(name);
  const value = process.env[name] || defaultValue;

  return [globalizedName, sanitizeValue(value)];
};

function reducer(result, defaultValue, name) {
  const [globalizedName, value] = getNameAndValue(defaultValue, name);

  result[globalizedName] = value;

  return result;
};

function composeGlobals(globals) {
  return reduce(globals, reducer, {});
};

function extractNodeEnv() {
  return JSON.stringify(process.env.NODE_ENV || 'development');
};

export const globals = {
  NODE_ENV: undefined,
  PORT: undefined,
  SECRET: undefined,
  DEV_SERVER_PORT: undefined
};

export default (props = {}) => {
  const {__DIR} = props;

  const composedGlobals = {
    __dirname: JSON.stringify(__DIR),
    __filename: JSON.stringify(path.join(__DIR, 'index.js')),
    NODE_ENV: extractNodeEnv(),
    'process.env.NODE_ENV': extractNodeEnv(),
    GLOBALS: composeGlobals(globals)
  }

  return new webpack.DefinePlugin(composedGlobals);
};
