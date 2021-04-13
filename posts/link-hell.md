---
layout: layouts/post.liquid
author: cat_a_flame
date: Created
pageTitle: 'Link & the forgotten accessibility'
lead: "One of the most common mistakes: setting a color for a link, but not adding `:hover`, `:focus`, `:active` and states."
badcode: 'a {color: #ca0000; text-decoration: none;} /* And that is the end of link styling */'
goodcode: 'a { color: #ff0000; } a:hover, a:visited, a:focus { color: #a60000; text-decoration: none; } a:active { color: #000000; background-color: #a60000; }'
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

- Without the missing states, our link won't be accessible, users might get confused while navigating through our website with a mouse or a keyboard,
because they won't be able to identify what is clickable and what is not
- By default, browsers set `text-decoration: underline;` to links, but removing this property can also lead to confusion
- Try using a color which fits with your design but still makes it obvious if a text can be clicked. In this blog, the red color is consistent for clickable items

</div>

<div class="post-tip">
    Try navigating on this page by pressing the <kbd>Tab</kbd> key and see what happens!
</div>

<div class="article-section">

## Good example

```css
{{ goodcode | prettyCSS | safe }}
```
</div>

<div class="article-section resources-section">

## Resources
- [Styling links](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links)
- [CSS and JavaScript accessibility best practices](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript)
</div>