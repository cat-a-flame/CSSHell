---
layout: layouts/post.liquid
author: cat_a_flame
date: 2021-04-15T14:50:00
pageTitle: 'Prefix mess'
lead: "Browser vendors sometimes add prefixes to experimental or nonstandard CSS properties and JavaScript APIs, so developers can experiment with new ideas while — in theory — preventing their experiments from being relied upon and then breaking web developers' code during the standardization process."
badcode: '.my-class {-webkit-transition: left 400ms ease-out; /* older webkit */ -webkit-transition: left 400ms ease-out; -moz-transition: left 400ms ease-out; -ms-transition: left 400ms ease-out; -o-transition: left 400ms ease-out; transition: left 400ms ease-out;}'
goodcode: '.my-class {transition: left 400ms ease-out;}'
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

- Adding unnecessary prefixes makes your code harder to read and maintain. The file size can also increase for no reason.
- If not sure which property requires a prefix, and which one not, use [caniuse.com](https://caniuse.com). With this tool you can check the overall support for every property, when they plan to leave the prefix (if it has any), and so on.
- If you don't want to mess with prefixes (understandable), you can use [Autoprefixer](https://www.npmjs.com/package/autoprefixer) in your build process, and this part can be covered automatically.
- Browser vendors are working to stop using vendor prefixes for experimental features. Web developers have been using them on production Web sites, despite their experimental nature. This has made it more difficult for browser vendors to ensure compatibility and to work on new features; it's also been harmful to smaller browsers who wind up forced to add other browsers' prefixes in order to load popular web sites (Source: MDN).
</div>




<div class="article-section">

## Good example

```css
{{ goodcode | prettyCSS | safe }}
```
</div>

<div class="article-section resources-section">

## Resources
- [Vendor prefix](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix)
</div>
