---
layout: layouts/post.liquid
author: vanilla_ixth
date: 2021-04-24T13:00:00
pageTitle: font-variation-misfortune
lead: Variable fonts are awesome, but unnecessary usage of `font-variation-settings` will eventually break your styles.
htmlcode: <span class="italic bold">italic bold?</span>
badcode: >-
    .bold { font-variation-settings: 'wght' 700; }
    .italic { font-variation-settings: 'ital' 1; }
goodcode: >-
    .bold { font-weight: bold; }
    .italic {  font-style: italic; }
---

<div class='article-section'>

{{ lead }}

## Bad example

Assume having following stylesheet:

```css
{{ badcode | prettyCSS | safe }}
```

Also assume having an element, which matches multiple rules:
```html
{{ htmlcode | pretty | safe }}
```

What do you think, will it be both _italic_ and __bold__? Hint: it won't.

</div>

<div class='article-section list-section'>

## What is the problem and how to fix it

- `font-variation-settings` do not add up, so, when several rules overlap, they override one another.
- Common workaround for that is [using CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide#notes), but you really don't want to get in that mess just to define font-weight in a fancy way, don't you?
- Redefining `font-weight`, `font-stretch` or `font-style` in this manner does nothing at all, variable fonts can handle these properties without axes modifications. 
  
Latter is even [mentioned in spec](https://www.w3.org/TR/css-fonts-4/#font-variation-settings-def):
> When possible, authors should generally use […] this property for special cases where its use is the only way of accessing a particular infrequently used font variation. For example, it is preferable to use `font-weight: 700` rather than `font-variation-settings: 'wght' 700`.
</div>

<div class='article-section'>

## Good example

Just use font properties:

```css
{{ goodcode | prettyCSS | safe }}
```
</div>

<div class='article-section resources-section'>

## Resources
- [CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4/#font-variation-settings-def)
- [Variable fonts guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)
</div>
