import { computed } from 'vue'

type Bi<T> = { en: T; es: T }

export const useCv = () => {
  const { locale } = useI18n()
  const pick = <T>(obj: Bi<T>): T => (locale.value === 'es' ? obj.es : obj.en)

  // source of truth: public/dev_en_djjc.pdf (Oct 2026)
  const experiences = computed(() => [
    {
      company: 'OPPO',
      role: pick({ en: 'Full-Stack Developer', es: 'Desarrollador Full-Stack' }),
      period: pick({ en: 'Nov 2025 — Present', es: 'Nov 2025 — Presente' }),
      location: pick({ en: 'Mexico City', es: 'Ciudad de México' }),
      highlights: pick({
        en: [
          'Automated a dynamic commission calculation system featuring 16 configurable KPI templates, processing approximately MXN $8 million in monthly payouts nationwide.',
          'Led the complete migration of digital assets from AWS S3 to Alibaba Cloud OSS, rearchitecting the application to fetch image assets through an internal backend flow instead of external requests.',
          'Reduced egress traffic and external server dependencies, optimizing report generation speed and accelerating system validation workflows.',
          'Developed and maintained REST APIs and backend services using PHP, Python, Node.js, Express.js, MySQL, and Redis.',
        ],
        es: [
          'Automaticé un sistema dinámico de cálculo de comisiones con 16 plantillas de KPI configurables, que procesa aproximadamente MXN $8 millones en pagos mensuales a nivel nacional.',
          'Lideré la migración completa de activos digitales de AWS S3 a Alibaba Cloud OSS, rediseñando la aplicación para obtener las imágenes mediante un flujo interno del backend en lugar de peticiones externas.',
          'Reduje el tráfico de salida y la dependencia de servidores externos, optimizando la generación de reportes y acelerando los flujos de validación del sistema.',
          'Desarrollé y mantuve APIs REST y servicios backend con PHP, Python, Node.js, Express.js, MySQL y Redis.',
        ],
      }),
      tech: ['PHP', 'Python', 'Node.js', 'Express.js', 'MySQL', 'Redis', 'AWS S3', 'Alibaba Cloud OSS'],
    },
    {
      company: 'Posibilidades',
      role: pick({ en: 'Full-Stack Developer', es: 'Desarrollador Full-Stack' }),
      period: pick({ en: 'Mar 2025 — Nov 2025', es: 'Mar 2025 — Nov 2025' }),
      location: pick({ en: 'Remote', es: 'Remoto' }),
      highlights: pick({
        en: [
          'Led a team of 4 developers across the entire SDLC: planning, code reviews, and delivery.',
          'Built the real-time event infrastructure coordinating requests between ~300 mobile apps and local controllers. Developed WebSocket services in Python to orchestrate communication between the PHP central server and device firmware, ensuring low latency and high reliability.',
          'Modernized legacy integrations, improving system stability and reliability.',
        ],
        es: [
          'Lideré un equipo de 4 desarrolladores en todo el ciclo de desarrollo: planeación, code reviews y entrega.',
          'Construí la infraestructura de eventos en tiempo real que coordina peticiones entre ~300 apps móviles y controladores locales. Desarrollé servicios WebSocket en Python para orquestar la comunicación entre el servidor central en PHP y el firmware de los dispositivos, con baja latencia y alta confiabilidad.',
          'Modernicé integraciones legacy, mejorando la estabilidad y confiabilidad del sistema.',
        ],
      }),
      tech: ['Python', 'PHP', 'WebSockets', 'Firmware integration', 'Tech Lead'],
    },
    {
      company: 'Freelance',
      role: pick({ en: 'Software Engineer', es: 'Ingeniero de Software' }),
      period: pick({ en: 'Jun 2023 — Mar 2025', es: 'Jun 2023 — Mar 2025' }),
      location: pick({ en: 'Remote', es: 'Remoto' }),
      highlights: pick({
        en: [
          'Government of Aguascalientes — Web Developer: designed and developed the official website and platform for Prepa Abierta de Aguascalientes, using Vue.js and institutional tools under Agile methodologies (Scrum/Trello) to ensure accessibility, high performance, and responsive design.',
          'Depfly (startup) — Mobile Developer: developed and optimized mobile applications for production environments, implementing efficient user flows, REST API integrations, and robust mobile architecture best practices.',
        ],
        es: [
          'Gobierno de Aguascalientes — Desarrollador Web: diseñé y desarrollé el sitio y la plataforma oficial de Prepa Abierta de Aguascalientes con Vue.js y herramientas institucionales bajo metodologías ágiles (Scrum/Trello), cuidando accesibilidad, alto rendimiento y diseño responsivo.',
          'Depfly (startup) — Desarrollador Móvil: desarrollé y optimicé aplicaciones móviles para producción, implementando flujos de usuario eficientes, integraciones con APIs REST y buenas prácticas de arquitectura móvil.',
        ],
      }),
      tech: ['Vue.js', 'Scrum', 'Mobile', 'REST APIs'],
    },
  ])

  const skills = [
    { group: { en: 'Languages', es: 'Lenguajes' }, items: ['PHP', 'Python', 'Java', 'JavaScript', 'Flutter', 'Vue.js', 'Nuxt.js', 'React', 'React Native'] },
    { group: { en: 'Backend & APIs', es: 'Backend y APIs' }, items: ['REST API Design', 'Laravel', 'WebSockets', 'Node.js', 'Express.js'] },
    { group: { en: 'Architecture', es: 'Arquitectura' }, items: ['Clean Architecture', 'MVC', 'MVVM', 'Distributed Systems'] },
    { group: { en: 'Databases & Storage', es: 'Bases de datos y almacenamiento' }, items: ['MySQL', 'Microsoft SQL Server', 'Redis', 'Hadoop', 'Elasticsearch', 'Alibaba Cloud OSS'] },
    { group: { en: 'DevOps & Tools', es: 'DevOps y herramientas' }, items: ['Git', 'Docker', 'CI/CD', 'Linux', 'Alibaba Cloud'] },
    // from the music-rec-engine project (not on the PDF)
    { group: { en: 'AI & Retrieval', es: 'IA y recuperación' }, items: ['RAG', 'Vector Search (Pinecone)', 'LLM Integration', 'Prompt Engineering'] },
    { group: { en: 'Practices', es: 'Prácticas' }, items: ['Code Review', 'Refactoring', 'Software Testing', 'SDLC'] },
    { group: { en: 'Methodologies', es: 'Metodologías' }, items: ['Agile (Scrum)', 'Trello', 'Asana'] },
    { group: { en: 'Spoken languages', es: 'Idiomas' }, items: ['Spanish (Native)', 'English (Professional Working Proficiency)'] },
  ]

  const stats = [
    { value: 300, prefix: '~', suffix: '', labelKey: 'stats.apps' },
    { value: 3, suffix: '+', labelKey: 'stats.years' },
    { value: 5, suffix: '+', labelKey: 'stats.stacks' },
    { value: 4, suffix: '', labelKey: 'stats.teamLed' },
  ]

  const education = computed(() => [
    {
      degree: pick({
        en: "Bachelor's in Computer Systems Engineering",
        es: 'Ing. Sistemas Computacionales',
      }),
      school: 'Universidad Autónoma de Aguascalientes',
      period: '2020 — 2024',
    },
  ])

  return { experiences, skills, stats, education, pick }
}
