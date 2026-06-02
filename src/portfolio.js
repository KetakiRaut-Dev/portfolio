import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// ================= SPLASH SCREEN =================
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

// ================= GREETING =================
const illustration = {
  animated: true,
};

const greeting = {
  username: "Ketaki Raut",
  title: "Hi all, I'm Ketaki",
  subTitle: emoji("Full Stack Developer (React, Java, Spring Boot, MySQL)"),
  resumeLink: "https://drive.google.com/file/d/1NfyHpDIVY1ulA7CQLQFTzUvuTW9kOa7l/view?usp=drive_link",
  displayGreeting: true,
};

// ================= SOCIAL =================
const socialMediaLinks = {
  github: "https://github.com/KetakiRaut-Dev",
  linkedin: "https://www.linkedin.com/in/ketaki-raut-011744312",
  gmail: "ketakiraut024@gmail.com",
  display: true,
};

// ================= SKILLS =================
const skillsSection = {
  title: "What I do",
  subTitle: "Full Stack Developer",
  skills: [
    emoji("⚡ Frontend (React.js)"),
    emoji("⚡ Backend (Java, Spring Boot)"),
    emoji("⚡ Database (MySQL)")
  ],
  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" }
  ],
  display: true,
};

// ================= EDUCATION =================
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "RTMNU Nagpur University",
      subHeader: "B.Tech Computer Engineering",
      duration: "2021 - 2025",
      desc: "Graduation completed in Computer Engineering"
    }
  ]
};

// ================= TECH STACK =================
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend", progressPercentage: "85%" },
    { Stack: "Backend", progressPercentage: "75%" },
    { Stack: "Programming", progressPercentage: "80%" }
  ],
  displayCodersrank: true
};

// ================= WORK EXPERIENCE =================
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Intern",
      company: "Info Origin Technologies",
      date: "2026",
      desc: "Worked on React + Spring Boot project",
      descBullets: [
        "Frontend development",
        "Backend APIs",
        "Database handling"
      ]
    }
  ]
};

// ================= BIG PROJECTS =================
const bigProjects = {
  title: "Projects",
  subtitle: "My Work",
  projects: [
    {
      projectName: "Time Management System",
      projectDesc: "React + Spring Boot + MySQL project",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/KetakiRaut-Dev"
        }
      ]
    }
  ],
  display: true
};

// ================= ACHIEVEMENTS (FIXED - IMPORTANT) =================
const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Certifications",
  display: true,
  achievementsCards: [
    {
      title: "Java Full Stack Certification",
      subtitle: "Kiran Academy",
      image: require("./assets/images/java.png"),
      imageAlt: "Java Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/11P0c0_13--qSxkzDLxjLNt_-Fip-Wq6e/view?usp=drive_link"
        }
      ]
    }
  ]
};

// ================= BLOG (SAFE) =================
const blogSection = {
  displayMediumBlogs: false,
  blogs: [],
  display: false
};

// ================= TALK (SAFE) =================
const talkSection = {
  talks: [],
  display: false
};

// ================= PODCAST (SAFE) =================
const podcastSection = {
  podcast: [],
  display: false
};

// ================= OPEN SOURCE =================
const openSource = {
  showGithubProfile: true,
  display: true
};

// ================= RESUME =================
const resumeSection = {
  title: "Resume",
  subtitle: "Download Resume",
  display: true
};

// ================= CONTACT =================
const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "Open for opportunities",
  email_address: "ketakiraut024@gmail.com"
};

// ================= TWITTER =================
const twitterDetails = {
  userName: "",
  display: false
};

// ================= HIRE STATUS =================
const isHireable = true;

// ================= EXPORT =================
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  openSource,
  resumeSection,
  contactInfo,
  twitterDetails,
  isHireable
};
