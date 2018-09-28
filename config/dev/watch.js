let config = require("../base");
Object.assign(config, {
  modules: [
    [
      "@nuxtjs/dotenv",
      {
        path: "./config/dev"
      }
    ]
  ]
});
module.exports = config;