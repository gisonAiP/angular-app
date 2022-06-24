/*
 * Copyright 2022 Motorola Solutions, Inc.
 * All Rights Reserved.
 * Motorola Solutions Confidential Restricted
 */

import express from 'express';
import http from 'http';
import https from 'https';
import bodyParser from 'body-parser';
import path from 'path';
import fs from 'fs';
import { env } from './environments';
import { testsRouter } from './routes/tests';
import { apiRouter } from './routes/api';

const app = express();
const PORT = env.config.server.port || 3000;
const HTTPS_PORT = env.config.server.httpsPort || 3443;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, If-Match, X-WG-Tenant-Id, x-signalr-user-agent, x-msi-continuation');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,PATCH,OPTIONS,POST,DELETE');
  res.setHeader('Access-Control-Expose-Headers', 'ETag, x-msi-continuation');

  delete req.headers['if-none-match'];

  next();
});

app.get('/', (req, res, next) => {
  res.json({
    status: true,
    message: 'Up and running'
  });

  next();
});

app.use((req, res, next) => {
  console.log('====================================');
  const getColoredText = (text) => `\x1b[36m${text}\x1b[0m`;
  console.log(`Request:`, getColoredText(`${req.method} ${req.url}`));
  if (Object.keys(req.body).length) {
    console.log(`Body:`, getColoredText(JSON.stringify(req.body, null, 2)));
  }
  console.log('====================================');
  next();
});


app.use('/api', apiRouter);
app.use('/test', testsRouter);


const server = http.createServer(app);
const logOnStartServer = (type: 'HTTP' | 'HTTPS') => {
  console.log('====================================');
  console.log(`${type} Server started!`);
  console.log('====================================');
  console.log(`Port: ${PORT}`);
  console.log(`Environment: ${env.name}`);
  console.log('====================================');
};

server.listen(PORT, () => logOnStartServer('HTTP'));

https.createServer({
  key: fs.readFileSync(path.join(__dirname, env.config.sslKey), 'utf-8'),
  cert: fs.readFileSync(path.join(__dirname, env.config.sslCert), 'utf-8')
}, app).listen(HTTPS_PORT, () => logOnStartServer('HTTP'));
