# How to Contribute

We are thrilled that you want to contribute to this project, please read this document carefully so you understand the project and the technology used. 

Project Requirements
---

Before you start contributing, please make sure you have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed on your machine. This project is created using Gatsby framework, which a a framework built on React used to build fast static sites or web application.

The project also needs you to have basic understanding of:
* React - (Stateless functional components would suffice)
* Javascript
* CSS - (Basics or Bootstrap)
* HTML
* Git and GitHub (not essential, you can learn it anytime)

It is really not essential to have an advance understanding of technologies stated above in any way, just basic understand would suffice for you to start contributing.

What is Gatsby?
---

Gatsby essentially is a Static Site Generator built on React but it is way more powerful and capable at what it can do than just create static website. Gatsby is one of the leading technology in the JAM Stack. It is encourage that you read a little about Gatsby [here](https://www.gatsbyjs.org/tutorial/) and watch a [this](https://www.youtube.com/watch?v=6YhqQ2ZW1sc&t=5s) short video.

Project Structure
---
The most important folder of the project is the `src` folder. It contains all of essential code and components of the project. The website is built using React. In React parts of websites are abstracted out into components. Almost all of the components of this project are Stateless Functional Components. Following is the directory structure of the project:
```
├── components
│   ├── about
│   │   ├── aboutcard.js
│   │   ├── teamcard.js
│   │   └── teampicture.js
│   ├── contact
│   │   ├── contactanimation.js
│   │   └── contactcards.js
│   ├── footer.js
│   ├── header.js
│   ├── home
│   │   ├── homeanimation.js
│   │   └── homelogo.js
│   ├── image.js
│   └── projects
│       └── projectcard.js
├── images
│   ├── Cloud.svg
│   └── Logo.svg
├── pages
│   ├── 404.js
│   ├── about.js
│   ├── contact.js
│   ├── index.js
│   └── projects.js
└── styles
    ├── about
    │   ├── about.module.scss
    │   ├── aboutcard.module.scss
    │   ├── teamcard.module.scss
    │   └── teampicture.module.scss
    ├── contact
    │   ├── contact.module.scss
    │   ├── contactanimation.module.scss
    │   └── contactcard.module.scss
    ├── header.module.scss
    ├── home
    │   ├── home.module.scss
    │   ├── homeanimation.module.scss
    │   └── homelogo.module.scss
    └── projects
        ├── projectcard.module.scss
        └── projects.module.scss
```
* The `components` folder contains all the React components that is used for creating the website. The folder is further divided into sub folder according to the components on different website pages.
* The `images` folder contains the image files that are used by the website. As of now almost of the mock images are directly source from the unsplash API.
* The `pages` folder is a important folder. Here each file created becomes a page in the website and becomes accessible at `https://website.com/pagename`. 
    * The website has 4 main pages and 1 error page. You can visit these pages by going to https://cranky-panini-be7663.netlify.app
* The `styles` folder contains all the style sheet for styling the React components. SCSS modules have been used to style the components. Don't worry you don't need to know SCSS in order to style the components, understanding of CSS will suffice.
    * The `styles` folder is further divide into subfolders according to styles applied to the components of certain pages.
    

How to Contribute
---

Feel free to fork this repository and then setup a local development on your machine. You can setup the local development on your machine by follwing the commands given below:
```
git clone [YOUR FORK LINK]
cd website
npm i
npm install --global gatsby-cli
gatsby develop
```

The project will be accessible at http://localhost:8000

After making the neccessary changes, you can submit a Pull Request to this repository which would then be reviewed and merged. 

Learning Resources
---
* Gatsby: https://www.gatsbyjs.org/tutorial/ or https://www.youtube.com/watch?v=6YhqQ2ZW1sc&t=5s
* React: https://reactjs.org/tutorial/tutorial.html or https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3
* JavaScript: https://www.youtube.com/watch?v=W6NZfCO5SIk&t=21s

