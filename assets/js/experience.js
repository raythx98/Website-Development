//  Technical experience cards

const techexperiencecards = document.querySelector(".technical-experience-cards");
const techexp = [
  {
    title: "Artificial Intelligence Intern",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "Defence Science & Technology Agency (DSTA)",
    time: "(May 2021 - Aug 2021)",
    desp: "<li>Worked to migrate Flipkart lite’s product page to AMP pages so that they load up instantly.</li> <li>Made changes in the current progressive web app of Flipkart to react to different actions performed on AMP page.</li> <li>Created a node module called “fk-amp” which abstracts all the files and middlewares and can be easily imported and used from express server.</li>",
  },
  {
    title: "Teaching Assistant",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "National University of Singapore (NUS)",
    time: "(Mar - Aug, 2019)",
    desp: "<li>Worked with MOZILLA as a part of Google Summer Of Code.</li><li>Worked on Extension Activity Monitor which is a privileged extension for Firefox that uses the activityLog API (privileged API) to monitor the activities of the other installed extensions.</li><li>The activityLog API listens for logs from other installed extensions.</li>",
  },
  {
    title: "NLP Intern",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "Defence Science & Technology Agency (DSTA)",
    time: "(Nov 2016 - Dec 2016)",
    desp:"<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  },
];

const techShowCards2 = () => {
  let output = "";
  techexp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  techexperiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", techShowCards2);

//  Work experience cards


const workexperiencecards = document.querySelector(".work-experience-cards");
const workexp = [
  {
    title: "Tax Officer",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "Inland Revenue Authority of Singapore (IRAS)",
    time: "(Jun 2020 - Aug 2020)",
    desp: "<li>Served up to 50 taxpayers by clarifying any tax queries and handling tax-related matters such as tax filing, objection to assessment, payment and refund.</li> <li>Handled SIRS and income relief matters during COVID-19 period.</li> <li>Worked with senior tax officers to resolve conflicts regarding tax clearance and double taxation act.</li>",
  },
  {
    title: "Changi Experience Ambassador",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "Changi Airport Group",
    time: "(Dec 2018 - Sep 2019)",
    desp: "<li>Provided the Changi Experience at the world's best airport by performing Counter and Roving operations.</li><li>Engaged passengers to establish their flight details so as to better introduce and suggest available facilities and retail options.</li><li>handled all ad-hoc services relating to the operations, such as a security breach or medical emergency.</li>",
  },
  {
    title: "Service Ambassador",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "Maybank Singapore",
    time: "(Nov 2014 - Dec 2014)",
    desp:"<li>Efficiently directed and managed branch traffic by ensuring that all customers are served within the defined timelines.</li><li>This includes complete customer complaint management as per defined guidelines.</li><li>Developed new prospects and interacted with existing customers to increase sales of the banks’ products and/or services by being as a focal point for all customers walking in the branch.</li>",
  },
];

const workShowCards2 = () => {
  let output = "";
  workexp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  workexperiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", workShowCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "30 DaysofFlutter",
    cardImage: "assets/images/experience-page/5.jpg",
    description:
      "Helping beginners from their first steps in Flutter to building fully functional cross-platform applications.",
  },
  {
    title: "Garuda Hacks",
    cardImage: "assets/images/experience-page/6.jpg",
    description:
      "MLH sponsored Indonesia's premier Global Virtual Hackathon on 14 - 16th August 2020.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "HakinCode",
    image: "assets/images/experience-page/hakin.png",
    time: "06/2020 - 08/2020",
    desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
  },
  {
    title: "Google Summer of Code",
    image: "assets/images/experience-page/gsoc.png",
    time: "03/2020 - 08/2020",
    desp: "<li>Google Summer of Code is a global program focused on introducing students to open source software development.</li><hr /><li>It is a great platform to explore new areas, maybe discover a new career path!</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
