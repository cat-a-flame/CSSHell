---
layout: layouts/post.liquid
pageTitle: z-index hell
badcode: '
.my-survey {
z-index: 122828282882;
}'
goodcode: ''
---

<div class="article-section">

## Bad code

```html
{{ badcode | prettyCSS | safe }}
```
</div>
<div class="article-section list-section">

## What is the problem and how to fix it

- Lorem ipsum dolor <code>href</code> sit amet
- Lorem ipsum dolor sit amet
- Lorem ipsum dolor sit amet
- Lorem ipsum dolor sit amet
- Lorem ipsum dolor sit amet
</div>

<div class="article-section">

## Good code

```html
{{ goodcode | pretty | safe }}
```
</div>

<div class="article-section resources-section">

## Resources
- [Content property on MND](https://developer.mozilla.org/en-US/docs/Web/CSS/content)
</div>