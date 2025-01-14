import myImage from './assets/images/logo1.png';
import dBazzar from './assets/images/dbazzar.png';
import exploreTech from './assets/images/exploretech.png';
import pawsPact from './assets/images/pawspact.png';
import vtTech from './assets/images/vettech.png';
import vtFriends from './assets/images/vtfriends.png';
import dvmCentral from './assets/images/dvm.png';
import gervertUsa from './assets/images/GerUSA.png';


const logotext = "AMMAR";
const meta = {
    title: "Ammar Abbas",
    description: "I’m Ammar Abbas Senior SQA Engineer _ Associate Project Manager,currently working in Lahore, Pakistan",
};

const introdata = {
    title: "I’m Ammar Abbas",
    animated: {
        first: "I ensure quality.",
        second: "I break to improve.",
        third: "I protect experiences.",
    },
    description: "I am a Senior Software Quality Assurance Engineer with over 6 years of experience, specializing in ensuring the highest quality standards through comprehensive testing methodologies. As an Associate Project Manager, I effectively manage cross-functional teams, ensuring timely delivery of projects with optimal results while maintaining clear communication and strong collaboration across all stakeholders.",
    your_img_url: myImage,
};

const dataabout = {
    title: "A bit about me",
    aboutme: "I am a Senior Software Quality Assurance Engineer with over 6 years of experience, specializing in ensuring the highest quality standards through comprehensive testing methodologies. As an Associate Project Manager, I effectively manage cross-functional teams, ensuring timely delivery of projects with optimal results while maintaining clear communication and strong collaboration across all stakeholders.",
};
const worktimeline = [
    {
        jobtitle: "Senior Software Quality Assurance Engineer",
        where: "Droidor",
        date: "2022 - Present",
    },
    {
        jobtitle: "Associate Project Manager",
        where: "Droidor",
        date: "2023 - Present",
        
    },
    {
        jobtitle: "Software Quality Assurance Engineer",
        where: "Gtech",
        date: "2021 - 2022",
        
    },
    {
        jobtitle: "Software Quality Assurance Engineer",
        where: "CareTek",
        date: "2020 - 2021",
        
    },
    {
        jobtitle: "Junior QA Engineer",
        where: "Technolyte",
        date: "2019 - 2020",
        
    },
   
];


const skills = [
    {
        name: "Manual Testing",
        value: 100,
    },
    {
        name: "Automation Testing (Selenium, Cypress)",
        value: 85,
    },
    {
        name: "API Testing (Postman, REST Assured)",
        value: 80,
    },
    {
        name: "Project Management (Agile, Scrum)",
        value: 95,
    },
    {
        name: "JIRA",
        value: 85,
    },
    {
        name: "Test Case Design",
        value: 100,
    },
    {
        name: "Leadership & Team Management",
        value: 90,
    },
    {
        name: "Stakeholder Communication",
        value: 98,
    },
    {
        name: "CI/CD Integration (Jenkins)",
        value: 83,
    },
    {
        name: "Risk Management",
        value: 80,
    }
];


const services = [
    {
        title: "Quality Assurance & Testing",
        description: "Comprehensive testing services including manual and automated testing, ensuring your software meets the highest quality standards before release.",
    },
    {
        title: "Project Management & Coordination",
        description: "Efficient project management using Agile and Scrum methodologies to ensure timely delivery and successful completion of software development projects.",
    },
    {
        title: "API Testing & Integration",
        description: "Ensuring seamless communication between systems with thorough API testing, guaranteeing smooth integration and functionality of third-party services.",
    },
    {
        title: "Continuous Integration & Delivery (CI/CD)",
        description: "Implementing CI/CD pipelines to automate testing and deployment processes, ensuring quicker and more reliable software releases.",
    },
    {
        title: "Risk Management & Quality Control",
        description: "Identifying potential risks and implementing preventive measures, ensuring smooth project execution and mitigating any disruptions.",
    }
];


const dataportfolio = [{
        img: exploreTech,
        description: "ExploreTECH is a digital marketplace for the Middle East and Africa’s Hospitality and Travel industries, offering tech solutions from global providers.",
        link: "https://www.exploretech.io/en",
    },
    {
        img: dBazzar,
        description: "DBazzar is an E-Commerce platform with food, pharmacy, grocery, and services, featuring an e-Wallet, affiliate program, and loyalty rewards.",
        link: "https://play.google.com/store/apps/details?id=com.dbazzar.apptwo&hl=en",
    },
    
    {
        img: dvmCentral,
        description: "DVM Central is a veterinary marketplace that connects veterinarians with reliable suppliers for all their animal healthcare needs.",
        link: "https://www.dvmcentral.com/",
    },
    {
        img: pawsPact,
        description: "Our app simplifies pet care management with features like online clinic quotes and secure payment options, all easily accessible from your phone.",
        link: "https://www.pawspact.com/",
    },

    {
        img: vtFriends,
        description: "Meet new friends, meet anyone who know something that you know",
        link: "https://www.vtfriends.com/login",
    },
    {
        img: vtTech,
        description: "Vet And Tech - Your Ultimate Source Featuring Free Educational Resources & Animal Health Solutions",
        link: "https://www.vetandtech.com/",
    },
    {
        img: gervertUsa,
        description: "Large marketplace to buy Surgical Instruments in USA, We also Manufacture Instruments on demand.",
        link: "https://www.gervetusa.com/",
    },
   
];

const contactConfig = {
    YOUR_EMAIL: "mikespike99@gmail.com",
    YOUR_FONE: "+92-323-1489189",
    description: "Feel free to reach out for any inquiries or collaboration opportunities. I’m always open to discussing new projects and ideas. Let’s connect and bring your vision to life!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_6t2t13l",
    YOUR_TEMPLATE_ID: "template_01w3cgc",
    // YOUR_USER_ID: "user_id",
};

const socialprofils = {
    linkedin: "https://www.linkedin.com/in/syed-ammar-abbas-rahat-390878193/",
    instagram: "https://www.instagram.com/im.syedammarabbas/",
    facebook: "https://www.facebook.com/ammar.rahat1",
    
    
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};