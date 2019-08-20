const resolve = require("path").resolve;

module.exports = {
  /*
  ** Headers of the page
  */
  mode: "spa",
  head: {
    title: 'blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' },
      { hid: 'description', name: 'description', content: '博客简历前端开源技术' }
    ]
  },
  css: [
    '@/assets/css/animation.css',
    {
      src: '@/assets/css/common.less',
      lang: 'less'
    }
  ],
  /*
  ** Customize the progress bar color  { color: '#3B8070' }
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*analyze: true/
    /*
    ** Run ESLint on save
    */
    ssr: false,
    filenames: {
      chunk: "[id].[chunkhash].js"
    },
    publicPath: "/source/",
    babel: {
      presets: ['es2015', 'stage-0']
    },
    postcss: [
      require("autoprefixer")({
        browsers: ["> 0%"]
      })
    ],
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)|(assets\/vendor)/
        })
      }
    },
    vendor: [
      "babel-polyfill"
    ],
  },
  generate: {
    minify: {
      collapseBooleanAttributes: true,
      collapseWhitespace: false,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeAttributeQuotes: false,
      removeComments: false,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: false,
      removeStyleLinkTypeAttributes: false,
      removeTagWhitespace: false,
      sortAttributes: true,
      sortClassName: false,
      trimCustomFragments: true,
      useShortDoctype: true
    }
  },
  plugins: [
    {
      src: "@/plugins/components.js",
      ssr: true
    },
    {
      src: "@/plugins/initApp.js",
      ssr: true
    }
  ],
  router: {
    mode: "hash",
    middleware: ["Common", "KeepLogin", "mqtt"],
    extendRoutes(routes) {
      routes.push({
        name: "not-found",
        path: "*",
        component: resolve(__dirname, "../pages/index.vue")
      });
    }
  }
}

