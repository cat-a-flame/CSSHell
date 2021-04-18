---
layout: layouts/post.liquid
author: cat_a_flame
date: 2021-04-18T18:44:00
pageTitle: 'font-family everywhere!'
lead: "Specifying the primary font for almost every selector is not a good approach, yet I often run into this issue."
badcode: '.my-class-1 {font-family: Roboto;} .my-class-2 {font-family: Roboto;} p {font-family: Roboto;} .my-class-3 {font-family: Roboto;} footer {font-family: Roboto;}'
goodcode: 'body {font-family: "Roboto", sans-serif;}'
goodcode2: ':root {--heading-font-family: "Georgia", "Times New Roman", "Times", serif;} .title {font-family: var(--heading-font-family;)}'
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

- Duplicating the `font-family` import only leads to hard maintainability. If, for some reason you want to change your website's font, you have to do it in every line, or, in all files.
- If you add the font name by hand, there is a high chance you mistype it once and the browser will load a totally different font (once I saw Ariel instead of Arial...).
- Quotation is not necessary, but it's a good approach to use it, mostly when the font name contains whitespaces.
- Always add a fallback option. If `Roboto` isn't available, then the user-agent-defined sans serif font will be used. Note, these are not font names, so don't use quotation marks!
- If you want to use a different kind of font for your headings, links, whatever, the best approach it to store the name as a CSS variable.
</div>

<div class="article-section">

## Good example

```css
{{ goodcode | prettyCSS | safe }}
```

## Another good example

```css
{{ goodcode2 | prettyCSS | safe }}
```

</div>

<div class="article-section resources-section">

## Resources
- [CSS Font Module Level 3](https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/#propdef-font-family)
- [font-family on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
</div>
