const beautify_css = require('js-beautify').css;
const beautify_html = require('js-beautify').html;
const MarkdownIt = require('markdown-it');

module.exports = {
    prettyCSS: value => {
        return beautify_css(value, {
            "indent_size": 2
        })
    },
    pretty: value => {
        return beautify_html(value, {
            "indent_size": 2,
            "inline": ""
        })
    },
    md: value => {
        const md = new MarkdownIt();
        return md.render(value);
    }
}