import project1 from "../projects/e-commerce.jpeg";
import project2 from "../projects/portofolio.jpeg";
import project3 from "../projects/Auth_app.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. ${(
  <br />
)}
With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. ${(
  <br />
)}My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. 
          With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. 
          My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to 
          learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, 
          I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "February 2024 - Present",
    role: "Full Stack Developer",
    company: "Karpadu.com",
    description: `Build new components or update existing ones.
    Ensure components are reusable and maintainable by following best practices like hooks and Context API.
    Debug issues in the UI, including styling, state management, or API integration.
    Develop RESTful APIs for the application, handling requests, responses, and middleware.
    Implement business logic and database queries.
    Debug backend issues, such as performance bottlenecks or API errors.`,
    technologies: ["Javascript", "React.js", "Express.js", "MySQL"],
  },
  {
    year: "December 2022 - November 2023",
    role: "IT support",
    company: "XALKIADAKIS A.E",
    description: `Designed and Diagnoses and resolves hardware, software, and network issues to assist users with their technical needs.
    Troubleshooting, system maintenance, and user training are all performed to ensure that IT operations run smoothly.
    Acts as the initial point of contact for technical inquiries, providing immediate resolution and great customer service. user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Express.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind", "React"],
  },
  {
    title: "Authentication app",
    image: project3,
    description:
      "Created a safe and feature-rich authentication application that allows users tosign up, log in, and manage their accounts while utilizing strong security measures.",
    technologies: ["HTML", "Tailwind", "React"],
  },
];

export const CONTACT = {
  address: "Heraklion, Crete (Greece)",
  phoneNo: "+30 6945511792 ",
  email: "giorgoslankonakes@gmail.com",
};
