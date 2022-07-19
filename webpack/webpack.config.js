const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = (enVars) => {
  const { env } = enVars;
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
};
