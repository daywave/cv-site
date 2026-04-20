export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      nav: {
        about: 'About',
        experience: 'Experience',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
      },
      hero: {
        greeting: 'Hi, I am',
        role: 'Full-Stack Developer',
        tagline:
          'Building scalable backends and mobile apps that serve 100,000+ users. Clean architecture, pragmatic delivery.',
        ctaContact: 'Get in touch',
        ctaResume: 'Download CV',
      },
      about: {
        kicker: 'About',
        title: "Engineer by title, problem-solver by practice",
        p1: 'Software Engineer with experience building scalable backend and mobile applications using PHP, Flutter, Vue.js and Node.js.',
        p2: 'I design REST APIs and high-concurrency systems supporting 100k+ users, working with Clean Architecture and agile practices inside international teams.',
        p3: "Maintainable code, less technical debt, on-time releases — every iteration measurably better than the last.",
      },
      experience: { kicker: 'Experience', title: "Where I've built things" },
      skills: { kicker: 'Skills', title: 'Tools of the trade' },
      projects: {
        kicker: 'Projects',
        title: 'Selected work',
        placeholder: 'Private project — reach out for a walkthrough.',
      },
      stats: {
        users: 'Users served',
        onTime: 'On-time deliveries',
        faster: 'Faster feature delivery',
        stability: 'System stability gain',
      },
      contact: {
        kicker: 'Contact',
        title: "Let's build something",
        copy: 'Open to full-time roles, collaborations and interesting problems. I reply within a day.',
        emailLabel: 'Email me',
      },
      footer: {
        built: 'Built with Nuxt & Tailwind',
        rights: 'All rights reserved.',
      },
    },
    es: {
      nav: {
        about: 'Sobre mí',
        experience: 'Experiencia',
        skills: 'Habilidades',
        projects: 'Proyectos',
        contact: 'Contacto',
      },
      hero: {
        greeting: 'Hola, soy',
        role: 'Desarrollador Full-Stack',
        tagline:
          'Construyo backends escalables y apps móviles para más de 100,000 usuarios. Arquitectura limpia y entrega pragmática.',
        ctaContact: 'Contáctame',
        ctaResume: 'Descargar CV',
      },
      about: {
        kicker: 'Sobre mí',
        title: 'Ingeniero de título, solucionador en la práctica',
        p1: 'Ingeniero de Software con experiencia construyendo aplicaciones backend y móviles escalables usando PHP, Flutter, Vue.js y Node.js.',
        p2: 'Diseño APIs REST y sistemas de alta concurrencia que soportan más de 100k usuarios, con Clean Architecture y prácticas ágiles en equipos internacionales.',
        p3: 'Código mantenible, menos deuda técnica, entregas a tiempo — cada iteración medible mejor que la anterior.',
      },
      experience: { kicker: 'Experiencia', title: 'Dónde he construido' },
      skills: { kicker: 'Habilidades', title: 'Mis herramientas' },
      projects: {
        kicker: 'Proyectos',
        title: 'Trabajo seleccionado',
        placeholder: 'Proyecto privado — contáctame para un recorrido.',
      },
      stats: {
        users: 'Usuarios atendidos',
        onTime: 'Entregas a tiempo',
        faster: 'Más rápido entregando',
        stability: 'Estabilidad ganada',
      },
      contact: {
        kicker: 'Contacto',
        title: 'Construyamos algo',
        copy: 'Abierto a roles full-time, colaboraciones y problemas interesantes. Respondo en menos de un día.',
        emailLabel: 'Envíame un correo',
      },
      footer: {
        built: 'Hecho con Nuxt y Tailwind',
        rights: 'Todos los derechos reservados.',
      },
    },
  },
}))
