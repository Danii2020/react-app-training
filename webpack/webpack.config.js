/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = (enVars) => {
  const { env } = enVars;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
};
