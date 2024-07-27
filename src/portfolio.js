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
  username: "Hamza Masood",
  title: "Hi all, I'm Hamza",
  subTitle: emoji(
    "Experienced Software Engineer specializing in Android development and currently pursuing a Master's in Artificial Intelligence. Demonstrated success in optimizing app performance and user experience, resulting in significant improvements in engagement and stability. Proficient in multiple programming languages and frameworks, with a focus on scalable and innovative solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1QIOVB48hF__kaGsabL4wvTnFQG-UR8on/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hamzach330",
  linkedin: "https://www.linkedin.com/in/hamza330/",
  gmail: "masoodhamza2021@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL MOBILE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive and user friendly user interfaces for mobile applications"
    ),
    emoji("⚡ Progressive Mobile Applications"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Google Analytics"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Compose/Kotlin MP",
      fontAwesomeClassname: "fab fa-css3-al"
    },
    {
      skillName: "JAVA",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "fab fa-dart"   //<FontAwesomeIcon icon="fa-brands fa-dart-lang" />
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Brandenburg University of Technology Cottbus–Senftenberg",
      logo: require("./assets/images/btulogo2.png"),
      subHeader: "Master of Science in Artificial Intelligence",
      duration: "October 2022 - On-Going",
      desc: "Pursuing a Master's in Artificial Intelligence with a focus on advancing machine learning, data science, and intelligent systems.",
      descBullets: [
        "Gained proficiency in applying various AI programming paradigms (logical, functional, object-oriented, constraint-based) to real-world applications through a course project.",
        "Built expertise in (NLP, NLU, NLG) using text mining techniques (Python, R) and large language models (Transformers) to develop and secure chatbots like Dialogflow CX"
      ]
    },
    {
      schoolName: "University of Engineering and Technology",
      logo: require("./assets/images/uettaxilalogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2012 - April 2017",
      desc: "Bachelor of Science in Computer Science from the University of Engineering and Technology, UET Taxila, with a curriculum including Programming, Digital Logic Design, Operating Systems, Artificial Intelligence, and Network Security.",
      descBullets: [
        "Led the development of WebTel, a multi-functional communication platform integrating various communication tools on a secure server, enhancing efficiency and response time.",
        "Completed 133 credits with a 2.45/4.00 GPA, demonstrating a strong foundation in Computer Science."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Mobile UI Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Integration",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "65%"
    },
    {
      Stack: "Kotlin/Compose Multiplaform Development",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Android",
      company: "CARIAD-SE",
      companylogo: require("./assets/images/cariad.png"),
      date: "June 2023 – Jan 2024",
      // desc: "Android Developer specializing in scalable app solutions and interdisciplinary problem-solving, with expertise in cloud architecture, CI/CD, and stakeholder management.",
      descBullets: [
        "Spearheaded the development of Android apps using Java/Kotlin, resulting in scalable and innovative solutions, enhancing user engagement by 25%.",
        "Optimized app development processes by integrating cloud and software architecture, cutting development time by 30%.",
        "Enhanced project clarity by 20% through meticulous documentation using JIRA and Confluence.",
        "Boosted testing efficiency by 40% via CI/CD implementation and Python scripting for Android apps",
        "Developed a demo with UI enhancements, increasing app downloads by 20% and improving user retention by 15%",
      ]
    },
    {
      role: "Android Developer",
      company: "Telenor Microfinance Bank EasyPaisa",
      companylogo: require("./assets/images/ep1.png"),
      date: "June 2021 – Jan 2022",
      // desc: "Optimized EasyPaisa, Pakistan's top financial app, with high-performance code and critical bug fixes. Led agile teams, integrating advanced analytics and backend APIs, using Git, Jira, and Slack for efficient project management.",
      descBullets: [
        "Spearheaded the development of Android apps using Java/Kotlin, resulting in scalable and innovative solutions, enhancing user engagement by 25%.",
        "Optimized app development processes by integrating cloud and software architecture, cutting development time by 30%.",
        "Enhanced project clarity by 20% through meticulous documentation using JIRA and Confluence.",
        "Boosted testing efficiency by 40% via CI/CD implementation and Python scripting for Android apps",
        "Developed a demo with UI enhancements, increasing app downloads by 20% and improving user retention by 15%",
      ]
    },
    {
      role: "Software Engineer Android",
      company: "LMKT",
      companylogo: require("./assets/images/lmktlogo.png"),
      date: "March 2019 – June 2021",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Efficiently led the full development cycle of the official ZuPeshawar Android app.",
        "Collaborated with cross-functional teams to deliver high-quality, customer-centric mobile experiences.",
        "Influenced future mobile architecture direction at LMKT and ZuPeshawar.",
        "Managed integration projects involving Raspberry Pi and Bluetooth devices for enhanced inventory management solutions.",
        "Played a pivotal role in organizational tasks and requirement gathering, contributing significantly to the company's technological advancements.",
      ]
    },
    {
      role: "Android Developer",
      company: "AKSA-SDS",
      companylogo: require("./assets/images/aksa3.png"),
      date: "July 2017 – March 2019",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Collaborated with cross-departmental teams to create data solutions with 90% accuracy, resulting in 30% decrease in data processing time.",
        "Resolved 95% of client issues within 24 hours, leading to increased customer satisfaction and successful app launches.",
        "Increased user engagement by 20% by developing intuitive and user-friendly UI/UX design for mobile applications.",
        "Identified and resolved 50+ bugs using advanced debugging methods, resulting in a more stable and reliable app.",
      ]
    }
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
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/easypaisalogo.jpg"),
      projectName: "EasyPaisa App",
      projectDesc: "Easypaisa is a Pakistani mobile wallet, mobile payments and branchless banking services provider. It was founded in October 2009 by Telenor Pakistan. It also provides digital payment services through a QR code in partnership with Masterpass and it is the only GSMA mobile money certified service in Pakistan.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://easypaisa.com.pk/"
        },
        {
          name: "Visit App Link",
          url: "https://play.google.com/store/apps/details?id=pk.com.telenor.phoenix&hl=en"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/zuLogo.webp"),
      projectName: "ZuPeshawar App",
      projectDesc: "The Zu Mobile App enhances user experience with features like an efficient journey planner, convenient fare payments, and real-time tracking of buses and bicycles. It provides timely updates on schedules, allows easy Zu Card recharges, and invites user feedback through ratings. This comprehensive suite of tools is designed to streamline and improve the overall transportation experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://transpeshawar.pk/"
        },
        {
          name: "Visit App Link",
          url: "https://play.google.com/store/apps/details?id=com.lmkt.zupeshawar&hl=en&gl=US"
        }
      ]
    },
    {
      image: require("./assets/images/projectGif.gif"),
      projectName: "Curreny App (Android/IOS)",
      projectDesc: "This project uses Kotlin Multiplatform technology to create apps for both Android and iOS from a single codebase. It features a shared core in the /composeApp folder that works for both platforms, while also allowing for platform-specific adjustments. For iOS, the /iosApp folder includes necessary elements and SwiftUI integration. This approach simplifies development by reusing code across platforms and ensures a consistent user experience on both Android and iOS.",
      footerLink: [
        {
          name: "Visit Link",
          url: "https://github.com/hamzach330/CurrencyApp"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "HackerRank Problem Solving",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/hackerranklogo.webp"),
      imageAlt: "HackerRank Problem Solving",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/c797358fd37b"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Compose Multiplatform - iOS/Android",
      // subtitle:
      //   "Completed the course Compose Multiplatform - iOS/Android Development with Kotlin.",
      image: require("./assets/images/udemy-2-logo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-41c53bc8-025a-46dd-b9ad-79eac3b818a6/"
        }
      ]
    },

    {
      title: "Kotlin Essential ",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/LinkedInlogo2.png"),
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+49-176-88205171",
  email_address: "masoodhamza2021@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable,
  resumeSection
};
