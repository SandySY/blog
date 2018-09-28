let config = require("../build");
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