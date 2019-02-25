import fs from 'fs';
import path from 'path';
import 'colors';

const availableEnvs = ['development', 'staging', 'production'];
const {NODE_ENV = 'development'} = process.env;

console.log(`NODE_ENV is ${NODE_ENV}`.green);

if (!availableEnvs.includes(NODE_ENV)) {
  console.log(
    `NODE_ENV is invalid`.yellow,
    `ONE OF ${JSON.stringify(availableEnvs)} required`.yellow,
    `'development' WILL BE USED`.green
  );
}

function requireDotenv(filePath) {
  require('dotenv').config({path: filePath});
}

export default function getEnvVariables(config) {
  const {__DIR} = config;

  const dotenvFiles = [
    path.join(__DIR, `.env`),
    path.join(__DIR, `.env.${NODE_ENV}`)
  ];

  dotenvFiles.forEach(requireDotenv);
};
