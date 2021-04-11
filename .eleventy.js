const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const filters = require('./_11ty/filters.js');

module.exports = function (eleventyConfig) {
  // Filters
  Object.keys(filters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  });

  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('images');

  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    passthroughFileCopy: true
  }
}
