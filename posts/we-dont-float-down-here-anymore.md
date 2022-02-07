---
layout: layouts/post.liquid
author: cat_a_flame
date: 2022-02-07T14:50:00
pageTitle: "We don't float down here anymore"
lead: "I just realised I can't tell when was the last time I used the float property. There are so many other ways to align items without any fuss!"
badcode: '.sidebar { float: right; }'
goodcode: '.my-class {transition: left 400ms ease-out;}'
---

<div class="article-section">

{{ lead }}

## Not that bad example

```css
{{ badcode | prettyCSS | safe }}
```
</div>
<div class="article-section list-section">

First of all, `float` is not deprecated. Float was misused. Its original purpose was to align images with texts, nothing more. Then, as layouts and designs started to evolve, we used to align site parts as well, but it was always a pain because elements with the float property were actually floating above our content, so we had to clear them, but `clearfix` was actually a hack, and hard to apply.

Now in 2022, there are several ways to align elements on our webpage and apps. Let's check out what are those:

### Margin
I'm pretty certain that you used `margin: 0 auto;` before to center block elements horizontally. This works with `margin-left: auto;` and `margin-right: auto;` too! The downside is that your element needs to have a fixed size, which is less than 100%. Using fixed sizes is not a good practice, I will explain this in another article later!

### Flexbox
Aligning elements with [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) is really _flexible_. You can not only align them horizontally but vertically too! You can play with the direction, rearrange the item order, etc. Of course, this requires wrapping your desired items into an element with `display: flex;` which can cause a bit long HTML code, but it is worth it.

### Grid
[CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/) is more complex than Flexbox, and it's used on bigger parts of your website such as the main layout.

### Conclusion
Using `float` nowadays is a bit obsolete. I don't say stop using it, but the above-mentioned methods are much easier to use, and a lot more modern. As I said in the beginning, `float` was made to align images, so keep that in mind when you want to align your sidebar to the right! 

</div>

<div class="article-section resources-section">

## Resources
- [Is CSS float deprecated?](https://css-tricks.com/is-css-float-deprecated/)
- [Stop Using Float in CSS - Here Are Your Alternatives](https://blog.shahednasser.com/stop-using-float-in-css-here-are-your-alternatives/)
- [Clearfix: A Lesson in Web Development Evolution](https://css-tricks.com/clearfix-a-lesson-in-web-development-evolution/)

</div>