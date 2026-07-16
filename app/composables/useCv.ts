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
          'Built and maintained REST APIs and backend services using PHP, Python, Node.js, MySQL, and Redis.',
          'Automated a dynamic commission system with 16 configurable KPI templates, processing ~US$8M in monthly payouts across Mexico.',
          'Developed a rule-based payroll system for salary, overtime, attendance, and deductions.',
          'Integrated AI agents into the development workflow to speed up code reviews and test generation.',
          'Performed code reviews and refactoring to reduce technical debt.',
          'Developed Flutter features integrated with backend services.',
        ],
        es: [
          'Construí y mantuve APIs REST y servicios backend usando PHP, Python, Node.js, MySQL y Redis.',
          'Automaticé un sistema de comisiones dinámico con 16 plantillas de KPI configurables, procesando ~$8M USD en pagos mensuales en México.',
          'Desarrollé un sistema de nómina basado en reglas para salario, horas extra, asistencia y deducciones.',
          'Integré agentes de IA en el flujo de desarrollo para acelerar code reviews y generación de pruebas.',
          'Realicé code reviews y refactoring para reducir deuda técnica.',
          'Desarrollé funcionalidades Flutter integradas con servicios backend.',
        ],
      }),
      tech: ['PHP', 'Python', 'Node.js', 'MySQL', 'Redis', 'Flutter', 'AI Agents'],
    },
    {
      company: 'Posibilidades',
      role: pick({ en: 'Full-Stack Developer', es: 'Desarrollador Full-Stack' }),
      period: pick({ en: 'Mar 2025 — Nov 2025', es: 'Mar 2025 — Nov 2025' }),
      location: pick({ en: 'Remote', es: 'Remoto' }),
      highlights: pick({
        en: [
          'Developed backend integrations between firmware applications and server-side systems.',
          'Implemented Python-based WebSocket services connecting embedded software with PHP backend infrastructure in real time.',
          'Designed and developed a digital wallet platform using React and Laravel, implementing secure transactions and account management.',
          'Reduced technical debt in a long-running application, improving maintainability and scalability.',
          'Modernized legacy systems and integrations, increasing stability and reliability.',
          'Served as Technical Lead for a team of four developers — coordinating requirements, planning, technical decisions, code reviews and delivery.',
        ],
        es: [
          'Desarrollé integraciones backend entre aplicaciones de firmware y sistemas del lado del servidor.',
          'Implementé servicios WebSocket en Python conectando software embebido con infraestructura backend en PHP en tiempo real.',
          'Diseñé y desarrollé una plataforma de billetera digital con React y Laravel, implementando transacciones seguras y gestión de cuentas.',
          'Reduje la deuda técnica en una aplicación de larga vida, mejorando mantenibilidad y escalabilidad.',
          'Modernicé sistemas legacy e integraciones, aumentando estabilidad y confiabilidad.',
          'Lideré técnicamente un equipo de cuatro desarrolladores — coordinando requerimientos, planeación, decisiones técnicas, code reviews y entrega.',
        ],
      }),
      tech: ['Python', 'PHP', 'Laravel', 'React', 'WebSockets', 'Tech Lead'],
    },
    {
      company: pick({ en: 'Freelance / Projects', es: 'Freelance / Proyectos' }),
      role: pick({ en: 'Software Engineer', es: 'Ingeniero de Software' }),
      period: pick({ en: 'Jan 2023 — Mar 2025', es: 'Ene 2023 — Mar 2025' }),
      location: pick({ en: 'Remote', es: 'Remoto' }),
      highlights: pick({
        en: [
          'Developed web, backend, desktop and mobile applications across multiple projects and organizations.',
          'Designed and implemented business applications, scalable APIs and internal management systems using modern engineering practices.',
          'Built Java desktop GUI applications including inventory management and business process automation.',
          'Implemented Java database integrations with MySQL and Microsoft SQL Server, designing data access layers and optimizing workflows.',
          'Developed desktop GUI applications and automation tools in Python.',
          'Designed and implemented a compiler in Python — lexical analysis, syntax analysis, semantic validation and symbol table management.',
          'Applied Clean Architecture, MVC/MVVM patterns and testing to improve maintainability, scalability and performance.',
        ],
        es: [
          'Desarrollé aplicaciones web, backend, escritorio y móviles en múltiples proyectos y organizaciones.',
          'Diseñé e implementé aplicaciones de negocio, APIs escalables y sistemas de gestión interna con prácticas modernas de ingeniería.',
          'Construí aplicaciones GUI de escritorio en Java incluyendo gestión de inventario y automatización de procesos.',
          'Implementé integraciones de base de datos en Java con MySQL y Microsoft SQL Server, diseñando capas de acceso a datos y optimizando flujos.',
          'Desarrollé aplicaciones GUI de escritorio y herramientas de automatización en Python.',
          'Diseñé e implementé un compilador en Python — análisis léxico, sintáctico, validación semántica y gestión de tabla de símbolos.',
          'Apliqué Clean Architecture, patrones MVC/MVVM y testing para mejorar mantenibilidad, escalabilidad y rendimiento.',
        ],
      }),
      tech: ['Java', 'Python', 'MySQL', 'SQL Server', 'Clean Architecture', 'Compilers'],
    },
  ])

  const skills = [
    { group: { en: 'AI & Automation', es: 'IA y Automatización' }, items: ['AI Agents', 'LLM Integration', 'Prompt Engineering', 'Workflow Automation'] },
    { group: { en: 'Core Technologies', es: 'Tecnologías Principales' }, items: ['Python', 'Java', 'React', 'JavaScript', 'Mobile Development'] },
    { group: { en: 'Backend & Architecture', es: 'Backend y Arquitectura' }, items: ['REST API Design', 'Backend Development', 'Scalable Systems', 'Clean Architecture', 'MVC', 'MVVM', 'WebSockets'] },
    { group: { en: 'Tools & DevOps', es: 'Herramientas y DevOps' }, items: ['Git', 'Docker', 'CI/CD'] },
    { group: { en: 'Engineering Practices', es: 'Prácticas de Ingeniería' }, items: ['Code Refactoring', 'Software Testing', 'SDLC'] },
    { group: { en: 'Methodologies', es: 'Metodologías' }, items: ['Agile (Scrum)', 'Trello', 'Asana'] },
    { group: { en: 'Languages', es: 'Idiomas' }, items: ['Spanish (Native)', 'English (Professional)'] },
  ]

  const stats = [
    { value: 100000, suffix: '+', labelKey: 'stats.users' },
    { value: 3, suffix: '+', labelKey: 'stats.years' },
    { value: 5, suffix: '+', labelKey: 'stats.stacks' },
    { value: 4, suffix: '', labelKey: 'stats.teamLed' },
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
