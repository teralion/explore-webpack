import Koa from 'koa';
import Router from 'koa-router';

import {all, assets} from './routes';

import errors from './handlers/errors';
import logger from './handlers/logger';
import bodyParser from './handlers/bodyParser';
import statics from './handlers/statics';
import favicon from './handlers/favicon';
import filename from './handlers/filename';

const app = new Koa();
const router = new Router();

app.use(errors);
app.use(logger);
app.use(bodyParser);
app.use(statics);
app.use(favicon);

router
  .get('/assets/*', filename, assets)
  .get('*', all)

app.use(router.routes());

export default app;
