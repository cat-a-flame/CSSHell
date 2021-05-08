---
layout: layouts/post.liquid
author: cat_a_flame
date: 2021-05-08T16:00:00
pageTitle: Let's talk about units
lead: "There is a life beyond pixels and percentages. Using `px` units is fine in certain cases, the real mistake is using absolute instead of relative units."
badcode: "p { font-size: 16px; line-height: 20px; margin-bottom: 8px; }"
goodcode: "body { font-size: 16px; /* Better let browsers set the base font size, usually it's 16px */ } p { font-size: 1rem; line-height: 1.25; margin-bottom: 0.5em; }"
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

- Using relative units ensures that the website scales proportionally according to your choice of font, and according to the users' choice of screen size and zoom level.
- The formula to calculate the rem value is `size / base-font-size` (in our case, this is 16), in short `8 / 16 = 0.5`. If you don't want to grab a calculator every time you need a new unit, use Sass and create mixin. [Here is how](https://css-tricks.com/snippets/css/less-mixin-for-rem-font-sizing/).

</div>

<div class="article-section">

## Good example

```css
{{ goodcode | prettyCSS | safe }}
```
</div>

<div class="article-section resources-section">

## Resources
- [CSS Units: Which Ones To Use And Avoid](https://medium.com/swlh/css-units-which-ones-to-use-and-avoid-31e4ed461f9)
- [CSS values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [Building Resizeable Components with Relative CSS Units ](https://css-tricks.com/building-resizeable-components-relative-css-units/)
</div>