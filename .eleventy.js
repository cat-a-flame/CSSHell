const filters = require('./_11ty/filters.js');
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addWatchTarget('src/sass');
  eleventyConfig.addPassthroughCopy({'dist/css': 'css'});

  // Filters
  Object.keys(filters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  });

  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    passthroughFileCopy: true
  }
}
