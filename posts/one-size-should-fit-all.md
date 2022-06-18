---
layout: layouts/post.liquid
author: cat_a_flame
date: 2022-06-18T15:15:00
pageTitle: One size should fit all?
lead: "In modern web development, there is less and less reason to use fix sizing for an element, especially when it's a content wrapper."
badcode: ".wrapper { height: 800px; width: 1024px; }"
goodcode: ".wrapper { max-width: 1024px; }"
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

- There are cases when you need to set the size of an element, but even if you want an image to be 600px wide, that will overflow from the content on mobile.
- Specifying fixed sizes to elements can break the responsiveness. You shouldn't set a size for a `div` unless it's necessary, because you can't cover every possible screen size in your media queries. For example, if the `.wrapper` has a longer content than 800px, everything will overflow.
- Try using `max-width`. That way, you can ensure that your element won't take up the whole area, or sticking out on smaller screens (`max-width` better used on block elements).
- `height` is rarely needed in this case. Let the size of the content decide the height, don't force it!
</div>

<div class="article-section">

## Good example

```css
{{ goodcode | prettyCSS | safe }}
```
</div>
