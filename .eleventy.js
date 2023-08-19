const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('./src/assets');

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime);
    });

    eleventyConfig.setServerOptions({
        liveReload: true,
        domDiff: true,
        port: 8080,
        watch: [],
        showAllHosts: true,
        https: {
            // key: "./localhost.key",
            // cert: "./localhost.cert",
        },
        encoding: "utf-8",
        showVersion: false,
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}
