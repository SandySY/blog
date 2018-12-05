const resolve = require("path").resolve;

module.exports = {
  /*
  ** Headers of the page
  */
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
    '@/assets/css/main.css',
    '@/assets/style-index.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    publicPath: "/source/"
    /*
    ** Run ESLint on save
    */
    /*ssr: false,
    filenames: {
      chunk: "[id].[chunkhash].js"
    }
    postcss: [
      require("autoprefixer")({
        browsers: ["> 0%"]
      })
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }*/
  },
  plugins: [
    {
      src: "@/plugins/components.js",
      ssr: false
    }
  ],
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
  router: {
    mode: "hash",
    middleware: [],
    extendRoutes(routes) {
      routes.push({
        name: "not-found",
        path: "*",
        component: resolve(__dirname, "./pages/index.vue")
      });
    }
  }
}

