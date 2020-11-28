import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hello, my name is Adnane SAIDI', // e.g: 'Name | Developer'
  lang: 'Francais , Anglais , Arabe , Espagnol', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Adnane SAIDII',
  subtitle: 'I am an embedded systems engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Actuellement étudiant en 3éme année de cycle d ingenierie à l ESTIA (Ecole Supérieure de technologies industrielles avancées) en France, et en parallele je prépare mon master de science en systémes embarqués et robotique à luniversité de SALFORD Manchester ',
  paragraphTwo: "Je suis à la recherche d'un stage de fin d'études en robotique / systems embarqués et intelligence artificielle",
  paragraphThree: "Si mon profil vous interesse , je me tiens a votre entiere disposition pour toutes informations complémentaires",
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

//Education data
export const educationData = [
  {
    id: nanoid(),
    img: 'fs.jpg',
    title: 'Full Stack Developer',
    info: 'Developping a hybrid mobile application for a restaurant based on their website to command and order delivries from home .',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Data Analyst Intern',
    info: "About OCP Group : " ,
    info2 : "OCP is the largest phosphate producer in the world and a leading global fertilizer player, backed by almost a century of production history. OCP has exclusive access to the world's largest phosphate rock reserve base in Morocco .",
    url: 'https://www.ocpgroup.ma/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'fs.jpg',
    title: 'Full Stack Developer',
    info: 'Developping a hybrid mobile application for a restaurant based on their website to command and order delivries from home .',
    info2: 'It was an intership of 3 months , i worked on this project from the beginning using Ionic , AngularJS and NodeJS ',
    info3: 'I have done a big part of the specifications of the project and i learned how to set-up , troubleshoot and manage the application servers (API and JOBQS )',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Data Analyst Intern',
    info: "About OCP Group : " ,
    info2 : "OCP is the largest phosphate producer in the world and a leading global fertilizer player, backed by almost a century of production history. OCP has exclusive access to the world's largest phosphate rock reserve base in Morocco .",
    info3: "My missions during the internship : ",
    info4: "Improvement of the removal process at the Benguerir mine",
    info5 : "Ensuring the continuation of production in complete safety, satisfying and arbitrating needs, decreasing and limiting expenses are questions that count in my subject. It is in this context that the present work aims to improve and optimize the activities of the mine clearance phase of the Benguerir mine through a critical analysis of field data.",
    info6 : " As part of the OCP group's strategy focused on the 3 axes; To increase capacity, reduce costs and improve flexibility, it was necessary to: ",
    info7 : "- Carry out a study on the extraction line of the benguerir mine.",
    info8 : "- Submit to an analysis related to the loss of performance during the operation.",
    url: 'https://www.ocpgroup.ma/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Voulez-vous que je sois parmi vos salariés ?',
  btn: '',
  email: 'a.saidi@net.estia.fr',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/adnaneesaidi/',
    },

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/adnane-saidi-709b50172/',
    },

  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
