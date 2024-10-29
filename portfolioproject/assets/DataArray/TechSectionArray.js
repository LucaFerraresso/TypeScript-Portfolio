import { Github } from "lucide-react";
import {
  BiLogoFirebase,
  BiLogoMongodb,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { DiHtml5, DiSass } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa6";
import { LiaCss3Alt, LiaJsSquare, LiaNpm } from "react-icons/lia";
import { SiNextdotjs, SiVisualstudiocode, SiPostman } from "react-icons/si";
const icons = [
  {
    component: <DiHtml5 color="green" size={25} />,
    title: "HTML5",
    description:
      "HTML5 è l'ultima versione del linguaggio di markup standard per la creazione di pagine web. Introduce nuove funzionalità come elementi semantici (es. <header>, <footer>, <article>), supporto per multimedia (audio e video) e API per migliorare l'interattività e la funzionalità delle applicazioni web. HTML5 ha anche migliorato la gestione della connettività e della reattività delle pagine, rendendole più veloci e user-friendly.",
  },
  {
    component: <LiaCss3Alt color="red" size={25} />,
    title: "CSS3",
    description:
      "CSS3 è la terza versione del Cascading Style Sheets, utilizzato per stilizzare le pagine web. Questa versione introduce nuove funzionalità, tra cui selettori avanzati, layout responsive (con Flexbox e Grid), animazioni e transizioni, e supporto per le media queries, permettendo di creare design adattivi a diverse dimensioni di schermo. CSS3 rende possibile separare il contenuto dalla presentazione, migliorando la manutenzione e l'accessibilità del codice.",
  },
  {
    component: <LiaJsSquare color="yellow" size={25} />,
    title: "JavaScript",
    description:
      "JavaScript è un linguaggio di programmazione versatile e potente, essenziale per lo sviluppo web moderno. Consente di rendere le pagine interattive, manipolare il DOM, gestire eventi e comunicare con server tramite AJAX. JavaScript supporta anche la programmazione orientata agli oggetti e funzionale. È il linguaggio principale per lo sviluppo frontend e, con l'avvento di Node.js, è diventato un linguaggio popolare anche per il backend.",
  },
  {
    component: <BiLogoTypescript color="blue" size={25} />,
    title: "TypeScript",
    description:
      "TypeScript è un superset di JavaScript che aggiunge la tipizzazione statica, migliorando la robustezza del codice e facilitando la manutenzione dei progetti di grandi dimensioni. Fornisce strumenti di sviluppo come l'autocompletamento e il controllo dei tipi durante la compilazione, riducendo gli errori runtime. TypeScript è particolarmente popolare nel contesto dello sviluppo di applicazioni Angular e React, migliorando l'esperienza degli sviluppatori.",
  },
  {
    component: <SiNextdotjs color="black" size={25} />,
    title: "Next.js",
    description:
      "Next.js è un framework React che permette di costruire applicazioni web performanti e scalabili. Supporta la generazione statica e il rendering lato server, migliorando le prestazioni e l'indicizzazione SEO. Next.js offre anche funzionalità integrate come il caricamento automatico delle pagine e la gestione delle API, semplificando lo sviluppo di applicazioni complesse e offrendo un'ottima esperienza utente.",
  },
  {
    component: <BiLogoMongodb color="orange" size={25} />,
    title: "MongoDB",
    description:
      "MongoDB è un database NoSQL che memorizza i dati in documenti JSON-like, consentendo una gestione flessibile e scalabile dei dati. È particolarmente utile per applicazioni che richiedono una rapida iterazione e schemi di dati dinamici. MongoDB supporta query avanzate e aggregazioni, rendendolo una scelta popolare per applicazioni web moderne, in particolare quelle basate su JavaScript.",
  },
  {
    component: <BiLogoFirebase color="red" size={25} />,
    title: "FireBase",
    description:
      "Firebase è una piattaforma di sviluppo di app che fornisce una gamma di strumenti e servizi per costruire e gestire applicazioni. Offre un database in tempo reale, autenticazione degli utenti, hosting e funzionalità di cloud messaging. Firebase è noto per la sua facilità d'uso e integrazione con applicazioni web e mobili, rendendolo una scelta popolare per sviluppatori che cercano soluzioni rapide e scalabili.",
  },
  {
    component: <BiLogoTailwindCss color="blue" size={25} />,
    title: "Tailwind CSS",
    description:
      "Tailwind CSS è un framework CSS utility-first che permette di costruire interfacce utente moderne e personalizzabili. Invece di fornire componenti predefiniti, Tailwind offre classi utility che possono essere combinate per creare design unici. Questo approccio consente agli sviluppatori di lavorare più rapidamente e mantenere il codice CSS più organizzato e modulare, facilitando la manutenzione a lungo termine.",
  },
  {
    component: <DiSass color="red" size={25} />,
    title: "Sass",
    description:
      "Sass (Syntactically Awesome Style Sheets) è un preprocessore CSS che estende le capacità del CSS standard. Introduce variabili, annidamento, mixin e funzioni, consentendo di scrivere stili più modulari e riutilizzabili. Sass migliora la leggibilità e la gestione dei file CSS, rendendo il processo di sviluppo più efficiente, specialmente per progetti di grandi dimensioni.",
  },
  {
    component: <Github color="black" size={25} />,
    title: "GitHub",
    description:
      "GitHub è una piattaforma di versionamento e gestione del codice sorgente basata su Git. Consente agli sviluppatori di collaborare, gestire versioni del codice, e contribuire a progetti open source. GitHub offre funzionalità come pull request, issue tracking, e wiki, facilitando la comunicazione tra i membri del team e migliorando la produttività dello sviluppo software.",
  },
  {
    component: <FaNodeJs color="green" size={25} />,
    title: "Node.js",
    description:
      "Node.js è un runtime JavaScript basato su V8 che consente di eseguire JavaScript sul server. Permette di costruire applicazioni web veloci e scalabili utilizzando JavaScript, facilitando la condivisione del codice tra frontend e backend. Node.js è noto per il suo modello di I/O non bloccante, che lo rende ideale per applicazioni in tempo reale, come chat e giochi online.",
  },
  {
    component: <LiaNpm color="red" size={25} />,
    title: "npm",
    description:
      "npm (Node Package Manager) è il gestore di pacchetti predefinito per Node.js. Consente di installare, gestire e condividere pacchetti JavaScript. npm offre un vasto repository di moduli e librerie, facilitando il riutilizzo del codice e l'integrazione di nuove funzionalità nelle applicazioni. La sua vasta comunità supporta un ecosistema fiorente di strumenti e risorse per sviluppatori.",
  },
  {
    component: <SiVisualstudiocode color="blue" size={25} />,
    title: "VSCode",
    description:
      "Visual Studio Code (VSCode) è un editor di codice sorgente open-source sviluppato da Microsoft. È altamente personalizzabile e supporta una vasta gamma di linguaggi di programmazione. VSCode offre funzionalità come il debugging integrato, il controllo della versione, e l'auto completamento intelligente, rendendolo uno strumento popolare tra gli sviluppatori di tutti i livelli.",
  },
  {
    component: <SiPostman color="orange" size={25} />,
    title: "API/REST API",
    description:
      "Le API (Application Programming Interface) consentono la comunicazione tra diverse applicazioni e servizi. Le REST API (Representational State Transfer) sono uno stile architetturale per la costruzione di API che utilizzano le convenzioni HTTP. Le API sono fondamentali per l'integrazione di servizi e per permettere a diverse applicazioni di interagire in modo fluido, migliorando l'esperienza utente e l'efficienza dei sistemi software.",
  },
];

export default icons;
