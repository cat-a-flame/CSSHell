const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const filters = require('./_11ty/filters.js');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('js');
  
  // Filters
  Object.keys(filters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  });

  // sass config
  eleventyConfig.setBrowserSyncConfig({
    files: './_site/css/**/*.css'
  });

  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    passthroughFileCopy: true
  }
}
