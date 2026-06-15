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
          'Building scalable backend, web, and enterprise systems with PHP, Python, Java and React. REST APIs and real-time platforms serving 100,000+ users.',
        ctaContact: 'Get in touch',
        ctaResume: 'Download CV',
      },
      about: {
        kicker: 'About',
        title: "Engineer by title, problem-solver by practice",
        p1: 'Software Engineer building scalable backend, web, and enterprise applications with PHP, Python, Java, React and mobile languages.',
        p2: 'I design REST APIs, real-time communication systems and high-concurrency platforms supporting 100k+ users, using Clean Architecture, MVC/MVVM and Agile practices with international teams.',
        p3: "Maintainable code, less technical debt, reliable delivery — every iteration measurably better than the last.",
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
        years: 'Years of experience',
        stacks: 'Core stacks',
        teamLed: 'Devs led as Tech Lead',
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
          'Construyo sistemas backend, web y empresariales escalables con PHP, Python, Java y React. APIs REST y plataformas en tiempo real para más de 100,000 usuarios.',
        ctaContact: 'Contáctame',
        ctaResume: 'Descargar CV',
      },
      about: {
        kicker: 'Sobre mí',
        title: 'Ingeniero de título, solucionador en la práctica',
        p1: 'Ingeniero de Software construyendo aplicaciones backend, web y empresariales escalables con PHP, Python, Java, React y lenguajes móviles.',
        p2: 'Diseño APIs REST, sistemas de comunicación en tiempo real y plataformas de alta concurrencia para más de 100k usuarios, usando Clean Architecture, MVC/MVVM y prácticas ágiles en equipos internacionales.',
        p3: 'Código mantenible, menos deuda técnica, entregas confiables — cada iteración medible mejor que la anterior.',
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
        years: 'Años de experiencia',
        stacks: 'Stacks principales',
        teamLed: 'Devs liderados como Tech Lead',
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
