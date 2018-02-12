const path = require('path');

const webpackTestConfig = require('../build/webpack.test.config');
/* eslint-disable */
let isCI = process.env.CONTINUOUS_INTEGRATION ? true : false;

module.exports = config => {
    config.set({
        frameworks: ['mocha', 'chai'],
        files: [
            './table.spec.js'
        ],
        browsers: [isCI ? 'ChromeTravisCI' : 'Chrome'],
        customLaunchers: {
            ChromeTravisCI: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
        plugins: [
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-sourcemap-loader',
            'karma-webpack',
            'karma-mocha-reporter',
            'karma-chai',
            'karma-coverage',
            'karma-coveralls'
        ],
        reporters: ['progress', 'mocha', 'coverage', 'coveralls'],
        singleRun: true,
        autoRun: true,
        mochaReporter: {
            colors: {
                success: 'blue',
                info: 'bgGreen',
                warning: 'cyan',
                error: 'bgRed'
            },
            symbols: {
                success: '+',
                info: '#',
                warning: '!',
                error: 'x'
            }
        },
        coverageReporter: {
            dir: './coverage',
            reporters: [
              { type: 'lcov', subdir: '.' },
              { type: 'text-summary', subdir: '.' }
            ]
        },
        preprocessors: {
            './table.spec.js': ['webpack', 'sourcemap']
        },
        logLevel: config.LOG_INFO,
        colors: true,
        webpack: webpackTestConfig,
        webpackMiddleware: {
            noInfo: true
        }
    });
};
