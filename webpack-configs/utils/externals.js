import fs from 'fs';

export default function externals() {
  const nodeModules = {};

  fs
    .readdirSync('node_modules')
    .filter(pkg => ['.bin'].indexOf(pkg) === -1)
    .filter(pkg => !/-es6/.test(pkg))
    .forEach(pkg => nodeModules[`${pkg}`] = `commonjs ${pkg}`)

  return nodeModules;
};
