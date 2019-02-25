import url from 'url';

export default async function(ctx, next) {
  const path = decodeURI(url.parse(ctx.url).pathname);
  ctx.assetFilename = path.split('/')[2];
  await next();
};
