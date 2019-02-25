import app from './server';

const appMessage = () =>
  console.log(
    'App is running on ' + GLOBALS.PORT + ' port'
  );

app.listen(GLOBALS.PORT, appMessage);

/* Handle /assets/ */

const devServerMessage = () =>
  console.log(
    'Dev Server is running on ' + GLOBALS.DEV_SERVER_PORT + 'port'
  );

async function startDevServer() {
  await import('./devServer').then(module => {
    const devServer = module.default;
    devServer.listen(GLOBALS.DEV_SERVER_PORT, devServerMessage);
  });
};

if (
  GLOBALS.NODE_ENV === 'development' &&
  GLOBALS.DEV_SERVER_PORT 
) {
  startDevServer();
}
