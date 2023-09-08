# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

### Links

- Solution URL: (https://github.com/Mervic05/sunnyside-agency-landing-page-main)
- Live Site URL: (https://mervic05.github.io/sunnyside-agency-landing-page-main/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I sharpened my skills in CSS Grid as I used it as my primary layout tool to get the exact structure I wanted. It was really tough but through determination, ersistence and research, I was able to get the result I wanted.

Some code snippets I'm proud of:

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
```

The code snippet above was what enables me to add the animations on scroll. This is a short but wonderful block of code. Check the app.js file to see how it was used.

### Continued development

Going further, I want to add Tailwind CSS to my Skills bag. My future projects will feature Tailwind CSS. If you're viewing from the future, you can chck them already :)

### Useful resources

- Kevim Powell's Youtube videos on CSS Grid and some other channels was a really helpful resource. It is advisable that a you watch tutorials, you also practice because that's the only way you actually learn.

## Author

- GitHub - [@Mervic05](https://mervic05.github.io/sunnyside-agency-landing-page-main/)
- Frontend Mentor - [@Mervic05](https://www.frontendmentor.io/profile/Mervic05)
- Twitter - [@victor_eggie](https://www.twitter.com/victor_eggie)
