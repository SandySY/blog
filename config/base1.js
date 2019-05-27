const resolve = require("path").resolve;

const webpack = require('webpack');
module.exports = {
    mode: "spa",
    head: {
        title: "blog",
        meta: [
            {charset: "utf-8"},
            {
                name: "viewport",
                content: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            },
            {hid: "description", name: "description", content: ""}
        ],
        link: [
            {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
        ],
        script: [
            {
                src: "html5plus://ready",
                body: true
            },
        ]
    },
    css: [
        "animate.css",
        "@/assets/css/main.css"
    ],
    loading: false,
    build: {
        ssr: false,
        filenames: {
            chunk: "[id].[chunkhash].js"
        },
        publicPath: "/source/",
        babel: {
            presets: [
                'es2015',
                ["env",
                    {
                        "targets": {
                            "browsers": ["Android >= 4.4", "ios >= 8"]
                        }
                    }
                ],
                "vue-app",
                "stage-0"
            ],
            ignore: [
                /*"/assets/vendor/mui.js",
                "/plugins/mqttws31.js"*/
            ],

            plugins: [
                "transform-runtime",
                "transform-decorators-legacy"
            ]
        },
        postcss: [
            require("autoprefixer")({
                browsers: ["> 0%"]
            })
        ],
        extend(config, {isDev, isClient}) {

        },
        vendor: [
            "babel-polyfill",
            /*"qs",
            "echarts",
            "mint-ui",
            "mescroll.js",
            "@/plugins/mqttws31.js"*/
        ],
        plugins: [
            /*new webpack.ProvidePlugin({
                jQuery: "jquery",
                '$': 'jquery'
            })*/
        ]
    },
    generate: {
        minify: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            decodeEntities: true,
            minifyCSS: true,
            minifyJS: true,
            processConditionalComments: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeOptionalTags: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            removeTagWhitespace: true,
            sortAttributes: true,
            sortClassName: true,
            trimCustomFragments: true,
            useShortDoctype: true
        }
    },
    plugins: [
        {
            src: "@/plugins/common.js",
            ssr: false
        },
      /*{
        src: "@/plugins/wechat.js",
        ssr: false
      },
      {
        src: "@/plugins/sentry.js",
        ssr: false
      },
      {
        src: "@/plugins/mui.js",
        ssr: false
      },
      {
        src: "@/plugins/UploadeSdk.js",
        ssr: false
      },
      {
        src: "@/plugins/components.js",
        ssr: false
      },
      {
        src: "@/plugins/sxSDK.js",
        ssr: false
      },
      {
        src: "@/plugins/SanyNativeSDK.js",
        ssr: false
      },
        {
            src: "@/plugins/init.js",
            ssr: false
        }, {
            src: "@/plugins/umeng.js",
            ssr: false
        },*/
    ],
    router: {
        mode: "hash",
        middleware: [
            /*"Common",
            "KeepLogin",
            "mqtt"*/
        ],
        extendRoutes(routes) {
            routes.push({
                name: "not-found",
                path: "*",
                component: resolve(__dirname, "../pages/index.vue")
            });
        }
    }
};
