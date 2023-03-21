# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](img/screenshots/screenshot-1.png)
![](img/screenshots/screenshot-2.png)

### Links

- Solution URL: [https://darko96.github.io/faq-accordion-card/]
- Live Site URL: [https://github.com/Darko96/faq-accordion-card]

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Responsive design
- Desktop-first workflow

### What I learned

I learned how to add animations with css

```css
.faq-accortion-img-mobile {
  position: absolute;
  left: 14%;
  top: -20%;
  height: auto;
  width: 23.7rem;

  animation-name: go-up-down;
  animation-duration: 3s;
  animation-delay: 0.1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  transition: transform 0.5s ease-in-out;
}

@keyframes go-up-down {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(1rem);
  }
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

I'll keep practising Javascript, flexbox and Media queries.

### Useful resources

- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - This helped me a lot ot understand CSS Grid.
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This helped me a lot ot understand flex-box.
- [A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/) - This helped me a lot to understand media queries.
- [JavaScript MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - This helped me a lot to understand javascript and DOM.

## Author

- Portfolio [Darko Mijatovic](https://darko96.github.io/portfolio/)
- LinkedIn - [Darko Mijatovic](https://www.linkedin.com/in/darko-mijatovic-512384231/)
- Frontend Mentor - [@Darko96](https://www.frontendmentor.io/profile/Darko96)
- Instagram - [darkomiijatovic](https://www.instagram.com/darkomiijatovic/)

## Acknowledgments

I want to thank a lot to everyone in Frontend Mentor team. Because they made an awesome website where we can practice what we learn.

Thank you so much for checking my project and Any feedback is highly appreciated.
