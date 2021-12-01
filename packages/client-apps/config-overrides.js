/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */

module.exports = {
  webpack(config) {
    config.plugins = [...config.plugins];

    return config;
  }
};
