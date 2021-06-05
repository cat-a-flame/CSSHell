---
layout: layouts/post.liquid
author: cat_a_flame
date: 2021-06-05T14:45:00
pageTitle: Convenient CSS naming conventions
lead: "I often run into the problem where I see the same class name being reused on different parts and context of the website, but when 1 out of the 3 properties don't match with the design, developers just use inline styling to override the desired rule."
badcode: '.primary-text { color: #000; font-family: "Open Sans"; line-height: 1.2; }'
badcode2: '
    <h1 class="primary-text">Primary title</h1>
    <h2 class="primary-text" style="color: #333">Subtitle</h2>
    <!-- Changing the font color inline because I want a different color for the subtitle-->'
goodcode: '
    .heading-main { color: #000; font-family: "Open Sans"; line-height: 1.2; }
    .heading-subtitle { color: #333; font-family: "Open Sans"; line-height: 1.2; }'
advancedExample: '
    :root {
        --heading-font-family: "Open Sans";
        --heading-line-height: 1.2;
    }
    
    .heading-main { color: #000; font-family: var(--heading-font-family); line-height: var(--heading-line-height); }
    .heading-subtitle { color: #333; font-family: var(--heading-font-family); line-height: var(--heading-line-height); }'
---

<div class="article-section">

{{ lead }}

## Bad example

```css
{{ badcode | prettyCSS | safe }}
```

```html
{{ badcode2 | pretty | safe }}
```
</div>
<div class="article-section list-section">

## What is the problem and how to fix it

- Using inline styling leads to hard maintenance and code readability. The best way is to separate the view, styling and JavaScript from each other. 
- Class names should reflect what are they styling, like, in my example, you can tell from the CSS that the `.heading-main` is styling the main heading.
- If you work on a website with more people and don't have a naming convention, it has a risk of creating a class with the same name, and that can cause conflicts on the design, most likely if you are working with reuseable components (the most common class name I often see is `.title`).
- There are several methodologies for naming. The most popular one is [BEM](http://getbem.com/), but you can choose by your liking or just come up with a new one which suits the project. The most important is to follow the naming convention all the time.

</div>

<div class="article-section">

## Good example

```css
{{ goodcode | prettyCSS | safe }}
```

## More advanced good example

```css
{{ advancedExample | prettyCSS | safe }}
```
</div>

<div class="article-section resources-section">

## Resources
- [CSS Naming Conventions that Will Save You Hours of Debugging](https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/)
- [Naming Things in CSS](https://elad.medium.com/naming-things-in-css-a7de9ad31cd9)

</div>