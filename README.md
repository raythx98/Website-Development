# My Awesome Portfolio Websites🌐

Hello! Here is my personal portfolio website based on [this template](https://github.com/smaranjitghose/awesome-portfolio-websites). 

Even though it was based on an open-source implementation, my version has undergone rigorous testing, UI/UX improvements and near-perfect mobile responsiveness. To use **my template**, look at [this section](#use-my-website-as-template) below.

Feel free to reach out to me via the information provided in the [website](https://raythx98.github.io/portfolio-website/) or [linkedin](https://www.linkedin.com/in/raythx/).

<p align="left"><img src="https://media.giphy.com/media/9JrkkDoJuU0FbdbUZU/giphy.gif" width = 40%></p>

# Use my Website as Template

### Forking the repository
- Visit my [repository](https://github.com/raythx98/portfolio-website).
- Fork the repository by clicking on the Fork button

### Cloning the repository
- Visit the repository
- Copy the link `https://github.com/raythx98/portfolio-website.git` of the repository by clicking on the clone button
- Open terminal
- Type `git clone https://github.com/raythx98/portfolio-website.git`

### Personalising your Website

> Images

- Images are organised under `assets/images`
- For a start, add your profile picture to `assets/images`
- Open index.html
- Change the `<img src="">` to your image path, do take note that image file names are case-sensitive
- This changes the picture in the home page

> Social Media Links

* Home Page
  * Under `index.html`, search for `socialicon` and change the links
* Footer
  * Under `js/app.js`, search for `social-button` and change the links

> Contact Form

* Under `js/app.js`, search for `form action` and replace the random string of characters with your email
  * For example, `<form action="https://formsubmit.co/myemail@dot.com" method="POST">`
* Submit a test form and follow the instructions to activate the API

> Website Signature

* Under `js/app.js`, search for `navbar-brand` and change the words to your desired signature

> Home Page

* To change the name on the home page
  * Open `index.html`
  * Change all instances of `Ray Toh` to your Name
* To change the interests displayed
  * Open `index.html`
  * Search for `data-words` and change the list of words

> Experience

* Add your work experience images to `assets/images/experience-page`
* To change the interests displayed
  * Open `index.html`
  * Search for `data-words` and change the list of words

> Projects
> Research
> Education


To change the work experience details :

Add your work experience images to assets -> images -> experience-page folder
Open experience.js
Under Work Experience Cards heading,
Change the current title to your position inside title
Change the current image path to your image path inside cardImage
Change the current place to your industry/company name inside place
Change the current time to your duration of work inside time
Change the current description to your job description inside desp
Volunteership

To change the volunteership details :

Add your volunteership work images to assets -> images -> experience-page folder
Open experience.js
Under Volunteership Cards heading,
Change the current title to your organisation name inside title
Change the current image path to your image path inside cardImage
Change the current description to your job description inside description
Mentorship

To change the mentorship details :

Add your mentorship work images to assets -> images -> experience-page folder
Open experience.js
Under Mentorship Card heading,
Change the current title to your organisation name inside title
Change the current image path to your image path inside image
Change the current time to your duration of work inside time
Change the current description to your work description inside desp
Projects Page
Projects

To change the projects details :

Add your projects images to assets -> images -> project-page folder
Open project.js
Under Project Cards heading,
Change the current title to your project name inside title
Change the current image path to your project image path inside cardImage
Change the current description to your project description inside description
Add the preview link inside Previewlink
Add the github link inside Githublink
Research Page
Research

To change the research details :

Add your research work images to assets -> images -> research-page folder
Open research.js
Under Research Details Table heading,
Change the current title to your research paper title inside title
Change the current authors to your research paper authors inside authors
Change the current conferences to your research conferences inside authors
Change the current research year to your research year inside researchYr
Change the current image path to your image path inside image
Change the current vancouver to yours inside vancouver
Change the current bibtex to yours inside bibtex
Education Page
Education

To change the formal education details :

Add your institute images to assets -> images -> education-page folder
Open education.js
Under Timeline Section heading,
Change the current title to your institute name inside heading
Change the current image path to your image path inside image
Change the current sub heading to yours inside subheading
Change the current description to yours inside description
mooc

To change the mooc section details :

Add your MOOCs images to assets -> images -> education-page folder
Open education.js
Under MOOCs Cards heading,
Change the current title to your course name inside title
Change the current image path to your course image path inside cardImage
Change the current MOOC link to yours inside moocLink
badges

To change the badges section details :

Add your badges' images to assets -> images -> education-page folder
Open education.js
Under Badges heading,
Change the current badge title to yours inside title
Change the current image path to your badge image path inside image
Change the current description to yours inside description
SEO and Miscellaneous
Search for site_name and update it to the link to your portfolio

Search for title and update it from John Doe | Home to Your Name | Home

Search for description and update by writing something about yourself

Search for url and update it to the link to your portfolio

Search for site and again update it to the link to your portfolio

Search for application-name and update it from John Doe | Home to Your Name | Home

Search for apple-mobile-web-app-title and update it from John Doe | Home to Your Name | Home

Search for summary and update it by writing somthing about yourself

Final Steps
After making all the changes, now it's time to push these changes to your local repository. For this, steps to be followed are :

Save the changes you have made till now

Open terminal in the file you made the changes

Type git add .

Then type git commit -m "Your commit message"

Then finally, git push origin master
