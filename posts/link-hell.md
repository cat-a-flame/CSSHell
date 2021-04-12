---
layout: layouts/post.liquid
author: cat_a_flame
date: Created
pageTitle: 'Link: The forgotten accessibility'
lead: "One of the most common mistakes: setting a color for a link, but failing to add :hover, :focus, :active and :visited properties too."
badcode: '
a {
color: red;
}'
goodcode: '
<input type="text" placeholder="First name" />
<input type="text" placeholder="First name" />'
---

<div class="article-section">

{{ lead }}


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