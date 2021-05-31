# My Awesome Portfolio Websites🌐

Hello! Here is my personal portfolio website based on [this template](https://github.com/smaranjitghose/awesome-portfolio-websites). 

Even though it was based on an open-source implementation, my version has undergone rigorous testing, UI/UX improvements and near-perfect mobile responsiveness. To use **my template**, look at [this below section](#use-my-website-as-template).

Feel free to reach out to me via the information provided in the [website](https://raythx98.github.io/portfolio-website/) or [linkedin](https://www.linkedin.com/in/raythx/).

<p align="center"><img src="https://media.giphy.com/media/9JrkkDoJuU0FbdbUZU/giphy.gif" width = 40%></p>

# Use my Website as Template

### Forking the repository
- Visit the (repository)[https://github.com/raythx98/portfolio-website]
- Fork the repository by clicking on the Fork button

Cloning the repository
Visit the repository
Copy the link the of the repository by clicking on the clone button
git clone

Open terminal
Type git clone https://github.com/smaranjitghose/awesome-portfolio-websites.git
Changing the details
Home Page
Home

To add your image on the home page :

Add your image to assets -> images folder
Open index.html
Change the <img src=""> to your image path
To change the name on home page :

Open index.html
Change the name from John Doe to Your Name
To change the interests displayed :

Open index.html
Inside h1 tag, change the data-words with your interests
To add your social media links :

Open index.html
Inside <div class="social-icons"> fill up the link to your social media accounts inside href
Navbar
Navbar

To change the logo :
Add your logo image inside assets -> images folder
Open main.js
Under Footer and Navbar heading, inside <a href="#!" class="brand-logo">, change the path inside <img src=""> to your image path
Footer
Footer

To change the logo :

Open main.js
Go to let footer, inside <a class="webintern-footer-logo" href="#">, change the path inside<img src=""> to your image path
To add your social media links :

Open main.js
Inside <div class="social-icons-footer"> fill up the link to your social media accounts inside href
Experience Page
Experience

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
