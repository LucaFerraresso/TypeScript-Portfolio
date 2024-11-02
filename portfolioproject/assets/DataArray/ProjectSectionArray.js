import {
  XCircle,
  IceCream,
  ArchiveIcon,
  ActivityIcon,
  GitlabIcon,
  AtSignIcon,
  HeartIcon,
} from "lucide-react";

const projects = [
  {
    title: "C.R.U.D operations",
    description:
      "Esplora la potenza di MongoDB con la CRUD operations App, un'applicazione web intuitiva progettata per semplificare la gestione dei dati. Questo progetto dimostra l'implementazione delle quattro operazioni fondamentali del database: Create, Read, Update e Delete. L'applicazione, ospitata su Vercel, offre un'interfaccia utente pulita e reattiva, permettendo di aggiungere, visualizzare, modificare ed eliminare record con facilità. Sperimenta la gestione dati in tempo reale grazie all'aggiornamento dinamico della lista. Sviluppata con Next.js e MongoDB, questa applicazione sfrutta la velocità e l'efficienza di queste tecnologie. Il codice sorgente, disponibile su GitHub, offre un'ottima opportunità di apprendimento per chi desidera approfondire lo sviluppo web full-stack. Il progetto CRUD operations App non è solo un'applicazione funzionale, ma anche un prezioso strumento didattico per comprendere le basi della gestione dati con MongoDB. Scopri il potenziale di questa tecnologia e inizia a costruire le tue applicazioni web dinamiche!.",
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
      "React",
    ],
    date: "26/08/2024-07/09/2024",
    icon: <ArchiveIcon color={"var(--color-foreground)"} size={34} />, // Icona per il fork del progetto
    id: 1, // ID univoco per il progetto
  },
  {
    title: "ToDo App",
    description:
      "Immergiti nel mondo dell'organizzazione e della produttività con la nostra rivoluzionaria ToDo App! Sviluppata con tecnologie moderne, questa app ti consente di gestire senza sforzo le tue attività e vivere una vita più ordinata. Inizia creando liste personalizzate per ogni aspetto della tua vita, dal lavoro al tempo libero e alle commissioni domestiche. Aggiungi facilmente attività, assegna scadenze e scegli tra una gamma di colori per un aspetto accattivante. La funzionalità di trascinamento della selezione ti consente di riordinare le attività con facilità, mentre la barra di ricerca integrata ti aiuta a trovare rapidamente ciò che stai cercando. Rimani aggiornato sul tuo progresso grazie all'indicatore di avanzamento e alla funzione di completamento dell'attività. L'interfaccia intuitiva e il design accattivante dell'app la rendono un piacere da usare. Sincronizza i tuoi dati su più dispositivi per accedere alle tue attività ovunque tu vada. Inoltre, le notifiche push ti ricorderanno le scadenze imminenti, garantendo che non ti perderai mai un impegno importante.",
    imageUrl: "/images/homepage/todoapp-preview1.png",
    vercelLink: "https://todoapp-bice-two.vercel.app/",
    githubLink:
      "https://github.com/LucaFerraresso/Edgemony/tree/main/CODE-WEEK-ACTIVITY-SUPER",
    technologies: ["HTML5", "CSS3", "JavaScript", "Sass", "VSCode"],
    date: "03/06/2024-15/06/2024",
    icon: <ActivityIcon color={"var(--color-ocean)"} size={34} />, // Icona per contatti
    id: 2, // ID univoco per il progetto
  },
  {
    title: "Ice-cream App",
    description:
      "Sei pronto a rivoluzionare il tuo desiderio di gelato con la nostra Ice-cream menu App? Questa innovativa applicazione ti porta il mondo dei gelati a portata di mano. Esplora una vasta selezione: Immergiti in un mondo di sapori con il nostro ampio catalogo di gelati. Dal classico alla vaniglia cremosa alle avventurose opzioni al pistacchio, c'è qualcosa per soddisfare ogni palato. Personalizza il tuo gelato: Trasforma il tuo gelato in un capolavoro personalizzando i tuoi topping e condimenti. Scegli tra una varietà di noci, caramelle, sciroppi e molto altro per creare il tuo dolce unico. Trova la gelateria più vicina: Non perderti mai un gelato con la nostra funzione di localizzatore della gelateria. Individua rapidamente le gelaterie vicine e ottieni indicazioni stradali con pochi tocchi. Tecnologie all'avanguardia: Costruita utilizzando l'ultima tecnologia JavaScript, la nostra app è veloce, intuitiva e facile da usare. Il suo design ottimizzato per i dispositivi mobili garantisce un'esperienza senza interruzioni su qualsiasi smartphone.",
    imageUrl: "/images/homepage/ice-cream-menu-preview1.png",
    vercelLink: "https://icescream-menu-app.vercel.app/",
    githubLink:
      "https://github.com/LucaFerraresso/Edgemony/tree/main/HTML%20CSS%20JAVA-SCRIPT/Javascript%20Project",
    technologies: ["HTML5", "CSS3", "JavaScript", "Sass", "VSCode"],
    date: "20/05/2024-31/05/2024",
    icon: <IceCream color={"var(--color-berry)"} size={34} />, // Icona per il gelato
    id: 3, // ID univoco per il progetto
  },
  {
    title: "SicilyPulse",
    description:
      "Entra nel cuore della Sicilia con SicilyPulse App, il tuo compagno di viaggio digitale che offre un'esperienza immersiva nell'isola mediterranea. Esplora la Sicilia: Immergiti in una mappa interattiva che ti guida attraverso città nascoste, riserve naturali e siti archeologici. Pianifica i tuoi itinerari con facilità e scopri i tesori che la Sicilia ha da offrire. Connessioni locali: Collega con guide turistiche locali, scopri aziende autentiche e accedi a consigli esclusivi su gemme nascoste. SicilyPulse App ti avvicina alla vera essenza della cultura siciliana. Innovazione tecnologica: Costruita utilizzando tecnologie all'avanguardia, SicilyPulse App sfrutta la realtà aumentata, la geolocalizzazione e l'apprendimento automatico per offrire un'esperienza di viaggio senza precedenti. Scopri la storia e la cultura siciliane in modo interattivo e coinvolgente. Scarica SicilyPulse App oggi e sblocca il vero potenziale di viaggio della Sicilia, creando ricordi indimenticabili lungo il percorso!",
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
      "React",
    ],
    date: "09/09/2024-22/09/2024",
    icon: <GitlabIcon color={"var(--color-emerald)"} size={34} />, // Icona per il profilo utente
    id: 4, // ID univoco per il progetto
  },
  {
    title: "Portfolio in React",
    description:
      "Portfolio in React: un portfolio digitale  creato per esporre il meglio delle tue abilità. Questa piattaforma dinamica ti consente di mostrare i tuoi progetti più belli, raccontare la tua storia professionale e connetterti con potenziali datori di lavoro. **Funzionalità da esplorare:** * **Presentazione accattivante:** Crea un layout personalizzato che rifletta la tua personalità e il tuo stile unico. Galleria progetti: Presenta i tuoi lavori migliori in un formato coinvolgente, con anteprime, descrizioni e link demo. * **Informazioni dettagliate:** Fornisci un curriculum dettagliato, esperienze lavorative e certificazioni per mettere in evidenza le tue competenze. Contatti fluidi: Assegna il tuo portfolio a un URL personalizzato e collega facilmente i tuoi profili social per una connessione immediata. Portfolio in React è realizzato utilizzando ReactJS, HTML e CSS, garantendo prestazioni eccellenti e un'esperienza utente fluida. Sviluppatori e professionisti creativi troveranno questa soluzione ideale per distinguersi in un mercato competitivo.",
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
      "Vue.js",
      "React",
    ],
    date: "05/08/2024-30/08/2024",
    icon: <AtSignIcon color={"var(--color-sapphire)"} size={34} />, // Icona per GitHub
    id: 5, // ID univoco per il progetto
  },
  {
    title: "Portfolio con Nextjs",
    description:
      "Potfolio personlae sviluppato con il framework next js e linguaggio typescript. Ultimo progetto pubblicato. ",
    imageUrl: "/images/homepage/PorfolioNextjs.png",
    vercelLink: "https://type-script-portfolio-iota.vercel.app/",
    githubLink:
      "https://github.com/LucaFerraresso/TypeScript-Portfolio/tree/main/portfolioproject",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "API/REST API",
      "Node.js",
      "Gemini API",
      "Tailwind CSS",
      "npm",
      "GitHub",
      "VSCode",
      "React",
    ],
    date: "07/10/2024-31/10/2024",
    icon: <HeartIcon color={"var(--color-purple)"} size={34} />, // Icona per chiudere
    id: 6, // ID univoco per il progetto
  },
  {
    title: "Prossimamente",
    description: "Aggiungerò card man mano che i miei progetti aumentano.",
    imageUrl: "/images/homepage/coming-soon.jpg",
    vercelLink: "coming soon",
    githubLink: "coming soon",
    technologies: ["coming soon"],
    date: "-/-/- -/-/-",
    icon: <XCircle color={"var(--color-orange)"} size={34} />, // Icona per chiudere
    id: 7, // ID univoco per il progetto
  },
];

export default projects;
