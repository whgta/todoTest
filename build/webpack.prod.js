const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge')

const stylus = require('stylus')
const prodConfig = {
    mode: 'production',

}

module.exports = merge(baseConfig, prodConfig)