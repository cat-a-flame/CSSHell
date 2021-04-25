---
layout: layouts/post.liquid
author: cat_a_flame
date: 2021-04-25T11:59:00
pageTitle: 'Overspecified specificity'
lead: "Specificity determines, which CSS rule is applied by the browsers. Developers often write overly specific selectors just to be 10000% sure their rules will _rule_."
badcode: 'div#my-popup div span.my-radiocheckbox-label-text {color: #666;} #some-id .label {color: #111 !important;}'
goodcode: '.my-class-checkbox-label {color: #666;}'
example: '.label-color {color: red;} .label-color {color: black;}'
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

- Overspecifing rules will lead to hard maintainability and code readability, while there is no real benefit.
- If we want to reuse our code, avoid using IDs for styling: as the name indicates, these are unique identifiers, they cannot be repeated within a page. If you need help with naming selectors and avoid styling conflicts, try using [BEM](http://getbem.com/) or other similar naming methodologies.

CSS stands for _Cascading Style Sheets_, which means, if you apply different color for a text several times in your CSS with the same specificity, the selector which is further down in the source will apply. For example, in the code below, the font color is going to be black:

```css
{{ example | prettyCSS | safe }}
```

### How to calculate specificity

![Visual representation of selector specificity](/src/images/posts/specificity.svg)

- If the element has inline styling, that automatically wins (1,0,0,0 points)
- For each ID value, apply 0,1,0,0 points
- For each class value, pseudo-class or attribute selector, apply 0,0,1,0 points
- For each element reference, apply 0,0,0,1 point

You can generally read the values as if they were just a number like 1,0,0,0 is "1000", and so clearly wins over a specificity of 0,1,0,0 or "100". The commas are there to remind us that this isn't really a "base 10" system, in that you could technically have a specificity value of like 0,1,13,4 – and that "13" doesn't spill over as a base 10 system would.

The `!important` value appended to a CSS property value is an automatic win, it overrides even inline styles from the markup. The only way an `!important` value can be overridden is with another `!important` rule declared later in the CSS and with equal or great specificity value otherwise. You could think of it as adding 1,0,0,0,0 to the specificity value.

CSS Specificity is one of the most difficult concepts to grasp in Cascading Style Sheets. I strongly recommend reading all the resources I mention above because once you master this knowledge, it's going to be easy to apply it like setting `!important` to every line 😉
</div>

<div class="article-section">

## Good example

```css
{{ goodcode | prettyCSS | safe }}
```

</div>

<div class="article-section resources-section">

## Resources
- [Specificity on w3.org](https://www.w3.org/TR/selectors-3/#specificity)
- [Specificity on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [Specifics on CSS Specificity](https://css-tricks.com/specifics-on-css-specificity/)
- [CSS Specificity: Things You Should Know](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)
- [Specificity Calculator](https://specificity.keegan.st/)
</div>
