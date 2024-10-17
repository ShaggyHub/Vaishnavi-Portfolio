/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vaishnavi Chintawar",
  title: "Hi all, I'm Vaishnavi",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with expertise in HTML, CSS, and Bootstrap for front-end design. Additionally, I excel in JavaScript, Node.js, and SQL for building dynamic and responsive applications, while proficiently managing version control with Git and GitHub."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1vpjqMdE_Jq9VZNsbkHCLYs3eAt7ZjdIc/view?usp=drive_link",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "www.linkedin.com/in/vaishnavi-chintawar-892b28242",
  gmail: "chintawarvaishnavi47@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications"),
    emoji(
      "⚡ Proficient in full-stack development with expertise in modern technologies like React.js, Node.js, and SQL databases, alongside adept version control using Git and GitHub"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  "softwareSkills": [
    {
      "skillName": "html",
      "fontAwesomeClassname": "fab fa-html5"
    },
    {
      "skillName": "css",
      "fontAwesomeClassname": "fab fa-css3-alt"
    },
    {
      "skillName": "Bootstrape",
      "fontAwesomeClassname": "fab fa-bootstrap"
    },
    {
      "skillName": "JavaScript",
      "fontAwesomeClassname": "fab fa-js"
    },
    {
      "skillName": "Java",
      "fontAwesomeClassname": "fab fa-java"
    },
    {
      "skillName": "PHP",
      "fontAwesomeClassname": "fab fa-php"
    },
    {
      "skillName": "reactjs",
      "fontAwesomeClassname": "fab fa-react"
    },
    {
      "skillName": "nodejs",
      "fontAwesomeClassname": "fab fa-node"
    },
    {
      "skillName": "npm",
      "fontAwesomeClassname": "fab fa-npm"
    },
    {
      "skillName": "sql-database",
      "fontAwesomeClassname": "fas fa-database"
    },
    {
      "skillName": "git",
      "fontAwesomeClassname": "fab fa-git"
    },
    {
      "skillName": "GitHub",
      "fontAwesomeClassname": "fab fa-github"
    }
  ],
  "display": true
}


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Maharashtra Institute Of Technology, Aurangabad",
      logo: require("./assets/images/Dr._Babasaheb_Ambedkar_Marathawada_University_logo.png"),
      subHeader: "Bachelor's in Computer Science",
      duration: "CGPA: 9.26 CGPA",
      desc: "Bachelor's in Technology graduate with expertise in computer science and software engineering. Proficient in diverse coursework and hands-on projects, equipped with the skills for impactful contributions in the tech industry.",
      descBullets: [
        "Bachelor's in Technology specializing in computer science and software engineering.",
        "Completed rigorous coursework and hands-on projects, acquiring skills vital for success in the tech sector"
      ]
    },
    {
      schoolName: "Gramin Polytechnic, Nanded",
      logo: require("./assets/images/Msbte.png"),
      subHeader: "Diploma in Computer Science",
      duration: "Percentage: 92.4%",
      desc: "Diploma holder in Computer Science with practical proficiency in software development and system analysis. Equipped with fundamental knowledge and skills for entry-level roles in the IT industry.",
      descBullets: [
        "Acquired fundamental knowledge and skills essential for entry-level positions in the IT sector.",
        "Diploma in Computer Science emphasizing practical software development and system analysis."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Creasophere Tech Pvt Ltd",
      companylogo: require("./assets/images/Creaosphere.jpeg"),
      date: "Sep 2023 – Present",
      desc: "Expertise in building dynamic and responsive user interfaces" ,
      descBullets: [
        "Expertise in building dynamic and responsive user interfaces using React and Next.js",
        "Proficient in creating interactive and engaging web applications with a focus on user experience",
        "Thorough understanding of HTML and CSS for structuring and styling web pages"
      ]
    },
    {
      role: "Intern",
      company: "Start-O-Cope",
      companylogo: require("./assets/images/startocope.jpg"),
      date: "March 2023 – Aug 2023",
      desc: "Throughout my recent internship with Strat-o-cope, I acquired invaluable hands-on expertise in web development, speci cally focused on the WordPress and Shopify platforms.",
      descBullets: [
        "I had the privilege to delve into server management.",
        "This involved leveraging AWS services to establish and uphold optimized, secure server environments.",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Graphical Password Authentication",
      projectDesc: " GPA (Graphical Password Authentication) stands as a pivotal technique in computer security. In today's landscape, computer security reigns supreme within the realm of computer science, ensuring the safeguarding of user and customer data.Recognizing the inherent strength of the human brain in storing and recalling images or image based passwords, GPA emerges as a valuable tool in modifying authentication measures.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Amazon Clone",
      projectDesc: " I led the frontend development e orts for an Amazon clone project, where I meticulously designed and implemented the user interface using HTML, CSS, and JavaScript. My role involved crafting a visually appealing and responsive website that closely mirrored the original Amazon platform, paying attention to details like layout, typography, and color schemes. I also integrated interactive components, including product listings, user authentication, and a dynamic shopping cart, to enhance the user experience",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "9518757831",
  email_address: "chintawarvaishnavi47@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
