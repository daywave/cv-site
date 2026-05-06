import { computed } from 'vue'

type Bi<T> = { en: T; es: T }

export const useCv = () => {
  const { locale } = useI18n()
  const pick = <T>(obj: Bi<T>): T => (locale.value === 'es' ? obj.es : obj.en)

  const experiences = computed(() => [
    {
      company: 'OPPO',
      role: pick({ en: 'Full-Stack Developer', es: 'Desarrollador Full-Stack' }),
      period: pick({ en: 'Nov 2025 — Present', es: 'Nov 2025 — Presente' }),
      location: pick({ en: 'Mexico City, Mexico', es: 'Ciudad de México, México' }),
      highlights: pick({
        en: [
          'Designed and developed backend functionalities in PHP (Laravel and Zend) for high-concurrency systems supporting 100,000+ users.',
          'Built scalable REST APIs and large-scale reporting systems, optimizing queries and processes to improve performance.',
          'Performed code analysis, refactoring and code reviews, reducing technical debt while collaborating with international teams.',
        ],
        es: [
          'Diseñé y desarrollé funcionalidades backend en PHP (Laravel y Zend) para sistemas de alta concurrencia con más de 100,000 usuarios.',
          'Construí APIs REST escalables y sistemas de reportería a gran escala, optimizando consultas y procesos para mejorar el rendimiento.',
          'Realicé análisis de código, refactoring y code reviews, reduciendo deuda técnica mientras colaboraba con equipos internacionales.',
        ],
      }),
      tech: ['PHP', 'Laravel', 'Zend', 'REST APIs', 'MySQL'],
    },
    {
      company: 'Posibilidades',
      role: pick({ en: 'Full-Stack Developer', es: 'Desarrollador Full-Stack' }),
      period: pick({ en: 'Apr 2025 — Nov 2025', es: 'Abr 2025 — Nov 2025' }),
      location: pick({ en: 'Remote', es: 'Remoto' }),
      highlights: pick({
        en: [
          'Led full software development lifecycle, achieving 100% on-time deliveries and reducing defects by 20%.',
          'Modernized legacy codebases and Google services integrations, increasing system stability by 30%.',
          'Reduced technical debt on an application in development since 2023, improving maintainability and performance.',
          'Developed Flutter applications using MVC, MVVM and Clean Architecture — 40% faster feature delivery.',
        ],
        es: [
          'Lideré el ciclo completo de desarrollo, logrando 100% entregas a tiempo y reduciendo defectos un 20%.',
          'Modernicé código legacy e integraciones con Google services, aumentando la estabilidad del sistema un 30%.',
          'Reduje deuda técnica en una app en desarrollo desde 2023, mejorando mantenibilidad y rendimiento.',
          'Desarrollé apps Flutter con MVC, MVVM y Clean Architecture — 40% más rápido entregando features.',
        ],
      }),
      tech: ['Flutter', 'Dart', 'Clean Architecture', 'MVVM', 'Google APIs'],
    },
    {
      company: 'TecnoDom',
      role: pick({
        en: 'Software Developer / Tech Assistant',
        es: 'Desarrollador / Asistente Técnico',
      }),
      period: '2024 — Nov 2025',
      location: pick({ en: 'Aguascalientes, Mexico', es: 'Aguascalientes, México' }),
      highlights: pick({
        en: [
          'Led development of automation solutions for smart home (domotics) systems, optimizing key processes.',
        ],
        es: [
          'Lideré el desarrollo de soluciones de automatización para sistemas de domótica, optimizando procesos clave.',
        ],
      }),
      tech: ['IoT', 'Automation', 'Domotics'],
    },
    {
      company: 'Depfly',
      role: pick({ en: 'Flutter Mobile Developer', es: 'Desarrollador Móvil Flutter' }),
      period: pick({ en: 'Jul 2024 — Feb 2025', es: 'Jul 2024 — Feb 2025' }),
      location: pick({ en: 'Remote', es: 'Remoto' }),
      highlights: pick({
        en: [
          'Contributed to a large-scale mobile app using Clean Architecture and MVC.',
          'Actively participated in Scrum ceremonies, defining technical and product objectives.',
        ],
        es: [
          'Contribuí a una app móvil a gran escala con Clean Architecture y MVC.',
          'Participé activamente en ceremonias Scrum, definiendo objetivos técnicos y de producto.',
        ],
      }),
      tech: ['Flutter', 'Dart', 'Clean Architecture', 'Scrum'],
    },
    {
      company: 'IEA — Instituto de Educación de Aguascalientes',
      role: pick({ en: 'Front-End Developer', es: 'Desarrollador Front-End' }),
      period: pick({ en: 'Feb 2024 — Aug 2024', es: 'Feb 2024 — Ago 2024' }),
      location: pick({ en: 'Aguascalientes, Mexico', es: 'Aguascalientes, México' }),
      highlights: pick({
        en: [
          'Developed the "Prepa Abierta de Aguascalientes" web portal with Vue.js.',
          'Integrated Government of Aguascalientes (GEA) resources and services into the platform.',
          'Managed the project using Scrum and agile project management tools.',
        ],
        es: [
          'Desarrollé el portal web "Prepa Abierta de Aguascalientes" con Vue.js.',
          'Integré recursos y servicios del Gobierno de Aguascalientes (GEA) a la plataforma.',
          'Gestioné el proyecto con Scrum y herramientas ágiles.',
        ],
      }),
      tech: ['Vue.js', 'JavaScript', 'Tailwind', 'Scrum'],
    },
    {
      company: pick({ en: 'Freelance / Projects', es: 'Freelance / Proyectos' }),
      role: pick({
        en: 'Software Developer (Full-Stack & Mobile)',
        es: 'Desarrollador de Software (Full-Stack & Móvil)',
      }),
      period: pick({ en: 'Jan 2023 — Jan 2025', es: 'Ene 2023 — Ene 2025' }),
      location: pick({ en: 'Remote', es: 'Remoto' }),
      highlights: pick({
        en: [
          'Developed and maintained applications using Flutter, Vue.js and Node.js.',
          'Built scalable solutions and reduced development time for new features by 40%.',
          'Collaborated with teams using Scrum methodologies across multiple projects.',
        ],
        es: [
          'Desarrollé y mantuve aplicaciones con Flutter, Vue.js y Node.js.',
          'Construí soluciones escalables y reduje el tiempo de desarrollo de nuevas features un 40%.',
          'Colaboré con equipos usando metodologías Scrum en múltiples proyectos.',
        ],
      }),
      tech: ['Flutter', 'Vue.js', 'Node.js', 'Scrum'],
    },
  ])

  const skills = [
    { group: { en: 'Backend', es: 'Backend' }, items: ['PHP', 'Laravel', 'Zend', 'Node.js', 'REST APIs'] },
    { group: { en: 'Frontend', es: 'Frontend' }, items: ['Vue.js', 'JavaScript', 'HTML/CSS', 'Tailwind'] },
    { group: { en: 'Mobile', es: 'Móvil' }, items: ['Flutter', 'Dart', 'Kotlin'] },
    { group: { en: 'Architecture', es: 'Arquitectura' }, items: ['Clean Architecture', 'MVC', 'MVVM'] },
    { group: { en: 'Tools', es: 'Herramientas' }, items: ['Git', 'Docker', 'Trello', 'Scrum', 'Asana'] },
    { group: { en: 'Languages', es: 'Idiomas' }, items: ['Spanish (Native)', 'English (Professional)'] },
  ]

  const stats = [
    { value: 100000, suffix: '+', labelKey: 'stats.users' },
    { value: 100, suffix: '%', labelKey: 'stats.onTime' },
    { value: 40, suffix: '%', labelKey: 'stats.faster' },
    { value: 30, suffix: '%', labelKey: 'stats.stability' },
  ]

  const education = computed(() => [
    {
      degree: pick({
        en: 'B.E. Computer Systems Engineering',
        es: 'Ing. Sistemas Computacionales',
      }),
      school: 'Universidad Autónoma de Aguascalientes',
      period: pick({ en: 'Graduated Dec 2024', es: 'Graduado Dic 2024' }),
    },
  ])

  return { experiences, skills, stats, education, pick }
}
