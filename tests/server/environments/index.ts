export const env = {
  name: 'local',
  config: {
    server: {
      port: 3005,
      httpsPort: 3445
    },
    sslKey: './certs/server.key',
    sslCert: './certs/server.crt',
  }
};
