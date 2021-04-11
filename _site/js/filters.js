const beautify_css = require('js-beautify').css;
const MarkdownIt = require('markdown-it');

module.exports = {
    pretty: value => {
        return beautify_html(value, {
            "indent_size": 2,
            "inline": ""
        })
    },
    prettyCSS: value => {
        return beautify_css(value, {
            "indent_size": 2
        })
    },
    md: value => {
        const md = new MarkdownIt();
        return md.render(value);
    }
}