import path from 'path';
import fs from 'fs';
import template from 'build/main.mustache';
import request from 'request';

async function getTemplates(ctx) {
 ctx.body = template.render({
    title: 'Hello, Server!',
    scripts: `function sayHi() { console.log('${GLOBALS.SECRET}'); }; sayHi();`,
    supersecret: `SUPERSECRET IN CONSOLE`
  });
};

function getAsset(ctx) {
  if (GLOBALS.NODE_ENV === 'development') {
    getDevAsset(ctx);
  } else if (GLOBALS.NODE_ENV === 'production') {
    getProdAsset(ctx);
  }
};

function getDevAsset(ctx) {
  if (GLOBALS.DEV_SERVER_PORT) {
    ctx.body = request(`http://localhost:9000/assets/${ctx.assetFilename}`);
  } else {
    console.warn('NO DEV_SERVER_PORT');
  }
};

function getProdAsset(ctx) {
  ctx.body = fs.createReadStream(`build/${ctx.assetFilename}`);
};

export const all = getTemplates;
export const assets = getAsset;