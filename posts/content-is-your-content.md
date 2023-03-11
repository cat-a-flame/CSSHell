---
layout: layouts/post.liquid
author: cat_a_flame
date: 2023-03-11T14:15:00
pageTitle: content is your Content?
lead: "I saw a developer using the `content` property for adding extra text to a label, because why not, he said. Sadly, this raises several issues."
badcode: '.label::after { content: "My label"; }'
goodcode: '@media print {
    a[href]::after {
        content: " (" attr(href) ")";
    }
}'
---

<div class="article-section">

{{ lead }}


## Bad example

```css
{{ badcode | prettyCSS | safe }}
```

</div>
<div class="article-section list-section">

## What is the problem and how to fix it

- Accessibility: CSS content is not accessible to screen readers, which makes it difficult for users with visual impairments to access the content. Also, you can not select it because it doesn't behave as a text.
- SEO: Search engines may not be able to read CSS content, which means that the content will not be indexed or displayed in search results.
- Maintenance: If you need to update or change the content, you will have to go through the CSS file instead of the HTML file, which can be time-consuming and error-prone.
- Structure: CSS content does not follow the semantic structure of HTML, which makes it difficult to maintain a consistent document structure and can lead to accessibility issues.
- Styling: CSS content is limited in terms of styling options compared to HTML text. This can limit the design options for the webpage. If the user disables the stylesheet, the text won't be visible.
- Separation of concerns: CSS content blurs the separation of concerns between HTML and CSS, which can make it more difficult to maintain and update the code.

If you need to display any kind of text, always do it in the HTML code. `::before` and `::after` pseudo-elements are best used for decorative purposes. However, in print view, it is a good idea for using it to display URLs. If you happen to print an article or documentation, it can come in handy to make the link visible behind the keyword. Go on, check out the print preview of this post!
</div>

<div class="article-section">

## Good example

```css
{{ goodcode | prettyCSS | safe }}
```

</div>

<div class="article-section resources-section">

## Resources
- [MDN CSS content](https://developer.mozilla.org/en-US/docs/Web/CSS/content)
- [Accessibility support for CSS generated content](https://tink.uk/accessibility-support-for-css-generated-content/)
- [How is CSS pseudo content treated by screen readers?](https://accessibleweb.com/question-answer/how-is-css-pseudo-content-treated-by-screen-readers/)
</div>
