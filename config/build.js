let config = require("./base");
Object.assign(config, {
    router: {
        base: "./",
        mode: "hash",
        middleware: ["Common", "KeepLogin", "mqtt"]
    }
});
module.exports = config;
