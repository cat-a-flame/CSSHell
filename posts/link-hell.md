---
layout: layouts/post.liquid
author: cat_a_flame
date: Created
pageTitle: 'Link: The forgotten accessibility'
lead: "One of the most common mistakes: setting a color for a link, but failing to add :hover, :focus, :active and :visited properties too."
badcode: 'a {
color: red;
text-decoration: none;
}

.class { margin: 10px;}
#myID {display: block; color: #000;}'
goodcode: 'a {} a:hover {} a:focus {} a:active {}'
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

- Lorem ipsum dolor <code>href</code> sit amet
- Lorem ipsum dolor sit amet <kbd>ctrl</kbd>
- Lorem ipsum dolor sit amet
- Lorem ipsum dolor sit amet
- Lorem ipsum dolor sit amet
</div>

<div class="article-section">

## Good example

```css
{{ goodcode | prettyCSS | safe }}
```
</div>

<div class="article-section resources-section">

## Resources
- [Content property on MND](https://developer.mozilla.org/en-US/docs/Web/CSS/content)
</div>