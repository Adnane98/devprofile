import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hello, my name is Adnane SAIDII', // e.g: 'Name | Developer'
  lang: 'Francais , Anglais , Arabe , Espagnol', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Adnane SAIDI',
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

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
