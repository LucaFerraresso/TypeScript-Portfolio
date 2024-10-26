import {
  // Home icon for the homepage
  PhoneCall, // Phone icon for contact
  // Settings icon for configurations
  User, // User icon for account/profile
  GitFork, // Git Fork icon for forking projects
  // Eye icon for "View"
  XCircle, // Close icon for closing dialogs
  // Magic Wand icon for "Genera" (generate)
  // Eye Off icon for "View More"
  IceCream, // Ice Cream icon for "Icescream"
  Github, // GitHub icon for GitHub links
  // Mail icon for "Contatti" (contacts)
} from "lucide-react";

const projects = [
  {
    title: "C.R.U.D operations App",
    description:
      "Ho implementato 4 metodi REST API. IL metodo GET mi permette di accedere a delle informazioni presenti in un database. Con il metodo PUT ,aggiungo un nuovo elemento al database. Con il metodo POST , modifico e aggiorno un elemento gia' esistente. Infine con il metodo DELETE , elimino l'elemento dal database.",
    imageUrl: "/images/homepage/mongodb-app-preview.png",
    vercelLink: "https://mongodb-crud-operations.vercel.app/",
    githubLink:
      "https://github.com/LucaFerraresso/REACT-Portfolio/tree/main/my-next-mongodb-app",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "API/REST API",
      "MongoDB",
      "Node.js",
      "Tailwind CSS",
      "npm",
      "GitHub",
      "VSCode",
    ],
    date: "02/09/2024-07/09/2024",
    icon: <GitFork color="red" />, // Icona per il fork del progetto
    id: 1, // ID univoco per il progetto
  },
  {
    title: "ToDo App",
    description:
      "Una todo app sviluppata usando solo JavaScript. Attraverso una chiamata get all'api , renderizzo 200 todo SUDDIVIDIBILI per titolo, categoria, id ecc ecc.",
    imageUrl: "/images/homepage/todoapp-preview1.png",
    vercelLink: "https://todoapp-bice-two.vercel.app/",
    githubLink:
      "https://github.com/LucaFerraresso/Edgemony/tree/main/CODE-WEEK-ACTIVITY-SUPER",
    technologies: ["HTML5", "CSS3", "JavaScript", "Sass", "VSCode"],
    date: "10/06/2024-15/06/2024",
    icon: <PhoneCall color="red" />, // Icona per contatti
    id: 2, // ID univoco per il progetto
  },
  {
    title: "Ice-cream menu App",
    description:
      "La mia prima app, sviluppata con JavaScript. Attraverso delle funzioni, renderizzo i miei primi componenti. L'app riassume le funzioni di un menu, dando all'utente la possibilità di scegliere tra più combinazioni.",
    imageUrl: "/images/homepage/ice-cream-menu-preview1.png",
    vercelLink: "https://icescream-menu-app.vercel.app/",
    githubLink:
      "https://github.com/LucaFerraresso/Edgemony/tree/main/HTML%20CSS%20JAVA-SCRIPT/Javascript%20Project",
    technologies: ["HTML5", "CSS3", "JavaScript", "Sass", "VSCode"],
    date: "27/05/2024-31/05/2024",
    icon: <IceCream color="red" />, // Icona per il gelato
    id: 3, // ID univoco per il progetto
  },
  {
    title: "SicilyPulse App",
    description:
      "SicilyPulse App, il FinalProject tanto atteso. Questo progetto riassume più di 6 mesi di studio, tutti ben condensati in questo originalissimo gestionale di eventi. SicilyPulse permette di rimanere sempre aggiornati sugli eventi presenti e non. L'app è pensata per gestire TUTTI gli eventi presenti nel territorio siciliano. Attraverso le categorie, l'utente può selezionare eventi di natura culturale, eventi in cucina ed eventi all'aria aperta.",
    imageUrl: "/images/homepage/sicily-pulse-app.png",
    vercelLink: "https://edgemony-final-project.vercel.app/",
    githubLink: "https://github.com/LucaFerraresso/Edgemony-FinalProject",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "API/REST API",
      "MongoDB",
      "Node.js",
      "FireBase",
      "Tailwind CSS",
      "npm",
      "GitHub",
      "VSCode",
    ],
    date: "09/09/2024-22/09/2024",
    icon: <User color="red" />, // Icona per il profilo utente
    id: 4, // ID univoco per il progetto
  },
  {
    title: "myPortfolio in React",
    description:
      "Il mio primo portfolio sviluppato interamente su Vuejs, usando JavaScript e la libreria React. Utilissimo per capire il routing tra le diverse pagine.",
    imageUrl: "/images/homepage/portfolio-preview.png",
    vercelLink: "https://react-portfolio-coral-five.vercel.app/homepage",
    githubLink: "https://github.com/LucaFerraresso/Edgemony-FinalProject",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "API/REST API",
      "Node.js",
      "MongoDB",
      "FireBase",
      "Tailwind CSS",
      "npm",
      "GitHub",
      "VSCode",
    ],
    date: "05/08/2024-30/08/2024",
    icon: <Github color="red" />, // Icona per GitHub
    id: 5, // ID univoco per il progetto
  },
  {
    title: "Prossimamente",
    description: "Aggiungerò card man mano che i miei progetti aumentano.",
    imageUrl: "/images/homepage/coming-soon.jpg",
    vercelLink: "coming soon",
    githubLink: "coming soon",
    technologies: ["coming soon"],
    date: "-/-/- -/-/-",
    icon: <XCircle color="red" />, // Icona per chiudere
    id: 6, // ID univoco per il progetto
  },
];

export default projects;
