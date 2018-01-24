const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const md = require('markdown-it')();
const slugify = require('transliteration').slugify;
const stripTags = require('strip-tags');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');


const config = require('../config');

const env = process.env.NODE_ENV || 'development';

console.log('---------env------:', env);

function wrap (render) {
    return function () {
        return render.apply(this, arguments)
            .replace('<code v-pre class="', '<code class="hljs ')
            .replace('<code>', '<code class="hljs">');
    };
};

function convert (str) {
    str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
        return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
    });
    return str;
};

module.exports = {
    context: path.resolve(__dirname, '../docs'),
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.md$/,
                loader: 'vue-markdown-loader',
                options: {
                    use: [
                        [require('markdown-it-anchor'), {
                            level: 2,
                            slugify: slugify,
                            permalink: true,
                            permalinkBefore: true
                        }],
                        [require('markdown-it-container'), 'demo', {
                            validate: function (params) {
                                return params.trim().match(/^demo\s*(.*)$/);
                            },
                            render: function (tokens, idx) {
                                const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/);

                                if (tokens[idx].nesting === 1) {
                                    const description = (m && m.length > 1) ? m[1] : '';
                                    const content = tokens[idx + 1].content;
                                    const html = convert(stripTags(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
                                    const descriptionHTML = description ? md.render(description) : '';

                                    return `<docs-demo-block> 
                                                <div class="source" slot="source">${html}</div>
                                                ${descriptionHTML}`;
                                } else {
                                    return '</docs-demo-block>\n';
                                }
                            }
                        }]
                    ],
                    preprocess: function (markdownIt, source) {
                        /* eslint-disable camelcase */
                        markdownIt.renderer.rules.table_open = function () {
                            return '<table class="table">';
                        };
                        markdownIt.renderer.rules.fence = wrap(markdownIt.renderer.rules.fence);
                        return source;
                    }
                }
            },
        ]
    },
    resolve: {
        extensions: ['.vue', '.js', '.md'],
        modules: [path.join(__dirname, '../node_modules')],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    resolveLoader: {
        modules: [path.join(__dirname, '../node_modules')]
    },

    performance: {
        hints: false
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'tpl.html',
            filename: 'index.html',
            inject: true,
            env: process.env.NODE_ENV,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: false
            }
        }),

        new ProgressBarPlugin()
    ]
};