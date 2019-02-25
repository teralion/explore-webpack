import app from './server';
import devServer from './devServer'

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

GLOBALS.NODE_ENV && 
GLOBALS.DEV_SERVER_PORT &&
devServer.listen(GLOBALS.DEV_SERVER_PORT, devServerMessage);
