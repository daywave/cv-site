export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      nav: {
        about: 'About',
        experience: 'Experience',
        challenges: 'Challenges',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
      },
      gate: { enter: 'Enter' },
      rails: { role: 'Cloud & full-stack developer' },
      letter: { close: 'Thanks for reading,', ps: 'P.S. — the fastest way to reach me is' },
      hero: {
        greeting: 'Hi, I am',
        role: 'Cloud & Full-Stack Developer',
        tagline:
          'Over 3 years designing and maintaining backend architectures, real-time services and cloud migrations (AWS to Alibaba Cloud OSS). Focused on data-flow optimization, IoT and hardware integration over WebSockets, and automating critical business processes.',
        ctaContact: 'Get in touch',
        ctaResume: 'Download CV',
      },
      about: {
        kicker: 'About',
        title: "Engineer by title, problem-solver by practice",
        p1: 'Full-Stack & Cloud Engineer with over 3 years of experience designing and maintaining backend architectures, real-time services, and cloud infrastructure migrations (AWS to Alibaba Cloud OSS). Specialized in data flow optimization, IoT/hardware integration via WebSockets, and automating critical business processes.',
        p2: 'I design REST APIs, real-time communication systems and high-concurrency platforms, using Clean Architecture, MVC/MVVM and Agile practices with international teams.',
        p3: "Maintainable code, less technical debt, reliable delivery — every iteration measurably better than the last.",
      },
      experience: { kicker: 'Experience', title: "Where I've built things", location: 'Location', period: 'Period' },
      skills: { kicker: 'Skills', title: 'Tools of the trade' },
      projects: {
        kicker: 'Projects',
        title: 'Selected work',
        placeholder: 'Private project — reach out for a walkthrough.',
      },
      stats: {
        apps: 'Mobile apps coordinated in real time',
        years: 'Years of experience',
        stacks: 'Core stacks',
        teamLed: 'Devs led as Tech Lead',
      },
      challenges: {
        kicker: 'Challenges',
        title: 'How I approach hard problems',
        deepDive: 'Technical deep dive',
        intro: "Throughout my career I've worked on projects where an error isn't just a technical problem — it can directly affect a company's operations or the experience of thousands of users. These are some of the most significant challenges I've tackled.",
        access: {
          title: 'Residential access control modernization',
          p1: 'One of my most challenging projects was modernizing the infrastructure of an access control system for residential communities.',
          p2: 'The challenge was migrating the main server from CentOS 8 to a simpler infrastructure for the team to manage, without compromising service availability. Beyond the migration, it was necessary to redesign the communication layer between the access controllers and the central server.',
          p3: 'I implemented bidirectional communication via WebSockets, modifying both the backend and the controller firmware to maintain real-time synchronization. This enabled immediate access-event validation, improved data consistency, and reduced issues caused by asynchronous communication.',
          p4: 'System reliability was critical — residents, visitors, and authorized personnel depended on it working every single day.',
        },
        payroll: {
          title: 'Payroll calculation automation',
          p1: 'At OPPO I led the automation of salary calculations based on company-wide attendance records.',
          p2: "The core challenge wasn't just generating a report — it was ensuring data accuracy, since any inconsistency could directly impact the payroll process.",
          p3: 'I designed the logic to consolidate attendance, tardiness, overtime, absences, and other attendance events into a reliable report that serves as the basis for salary calculations across the entire workforce.',
          p4: 'This project required exhaustive business rule validation, edge-case handling, and close collaboration with HR to ensure results were consistent with company policies.',
        },
        commissions: {
          title: 'Sales commission engine',
          p1: 'Another high-impact project at OPPO was automating commission calculations for the commercial team.',
          p2: 'The biggest challenge was the constantly evolving business rules. Commission schemes changed regularly due to new campaigns, promotions, and commercial strategy shifts — so the solution had to be flexible and easily adaptable.',
          p3: 'I built a system that processes sales data and applies complex calculation rules automatically, significantly reducing manual effort and the risk of human error.',
          p4: 'Beyond improving operational efficiency, the project delivered faster, more reliable results for a process that directly affects sales team compensation.',
          d1: {
            q: 'What does it calculate?',
            a: 'Periodic variable compensation for multiple commercial roles across several sales channels. Each cycle reconciles a high volume of transaction-level records against the organizational, location and hierarchy data that was valid at the moment of each transaction.',
          },
          d2: {
            q: 'How are compensation schemes modeled?',
            a: 'Each scheme is scoped to a role, a product category and a validity window, and uses one of several calculation strategies: fixed amount per unit, volume-based tiers, or target-achievement ladders. An overlap guard enforces a single active scheme per scope, so a transaction can never be paid twice.',
          },
          d3: {
            q: 'How do the rules interact?',
            a: 'Rules follow an explicit precedence chain: exclusions first, then time-boxed special rules, then the base scheme. Each layer can also decide whether its records still count toward tier thresholds. Encoding that order explicitly lets the business add campaign rules without side effects on the rest of the calculation.',
          },
          d4: {
            q: 'When does a transaction qualify?',
            a: 'Every record goes through eligibility validation against external confirmation data before it is paid. Records that fail are still reported, flagged as not eligible, so the result stays transparent. Which data sources feed each tier threshold is driven by a per-role configuration matrix maintained by the business, and the code mirrors it one-to-one.',
          },
          d5: {
            q: 'How are results frozen for payroll?',
            a: 'At each cutoff a scheduled job regenerates every role and freezes the output: generated reports plus snapshot tables at record, person and achievement level. Writes are idempotent per period, and downstream reports read the snapshot instead of recalculating, so an audit at any later point returns exactly what was paid, even after master data changes.',
          },
          d6: {
            q: 'How does it scale?',
            a: 'Period-wide set-based scans instead of per-person queries, batched lookups against external databases to stay within engine memory limits, request handling that responds immediately while generation continues in the background, pre-generated exports, and query profiling to remove bottlenecks in a legacy codebase.',
          },
          d7: {
            q: 'What if the rules change within a cycle?',
            a: 'When more than one scheme is active inside the same cycle, the period is split into segments at each scheme boundary. Each segment is calculated independently with its own rules and tiers, and stored results are tagged with their segment, so the amount owed per segment is auditable on its own.',
          },
          d8: {
            q: 'How are disputes resolved?',
            a: 'Every payout is traceable from person to individual record to the rule that was applied. Most disputes come from comparing raw operational exports with the compensation result, where eligibility and tier rules explain the gap. Self-service detail reports let the business answer these questions without engineering involvement.',
          },
        },
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
        challenges: 'Retos',
        skills: 'Habilidades',
        projects: 'Proyectos',
        contact: 'Contacto',
      },
      gate: { enter: 'Ingresar' },
      rails: { role: 'Desarrollador cloud y full-stack' },
      letter: { close: 'Gracias por leer,', ps: 'P.D. — la forma más rápida de contactarme es' },
      hero: {
        greeting: 'Hola, soy',
        role: 'Desarrollador Cloud y Full-Stack',
        tagline:
          'Más de 3 años diseñando y manteniendo arquitecturas backend, servicios en tiempo real y migraciones a la nube (de AWS a Alibaba Cloud OSS). Enfocado en optimizar flujos de datos, integrar IoT y hardware vía WebSockets y automatizar procesos críticos de negocio.',
        ctaContact: 'Contáctame',
        ctaResume: 'Descargar CV',
      },
      about: {
        kicker: 'Sobre mí',
        title: 'Ingeniero de título, solucionador en la práctica',
        p1: 'Ingeniero Full-Stack y Cloud con más de 3 años de experiencia diseñando y manteniendo arquitecturas backend, servicios en tiempo real y migraciones de infraestructura en la nube (de AWS a Alibaba Cloud OSS). Especializado en optimización de flujos de datos, integración de IoT y hardware vía WebSockets y automatización de procesos críticos de negocio.',
        p2: 'Diseño APIs REST, sistemas de comunicación en tiempo real y plataformas de alta concurrencia, usando Clean Architecture, MVC/MVVM y prácticas ágiles en equipos internacionales.',
        p3: 'Código mantenible, menos deuda técnica, entregas confiables — cada iteración medible mejor que la anterior.',
      },
      experience: { kicker: 'Experiencia', title: 'Dónde he construido', location: 'Ubicación', period: 'Periodo' },
      skills: { kicker: 'Habilidades', title: 'Mis herramientas' },
      projects: {
        kicker: 'Proyectos',
        title: 'Trabajo seleccionado',
        placeholder: 'Proyecto privado — contáctame para un recorrido.',
      },
      stats: {
        apps: 'Apps móviles coordinadas en tiempo real',
        years: 'Años de experiencia',
        stacks: 'Stacks principales',
        teamLed: 'Devs liderados como Tech Lead',
      },
      challenges: {
        kicker: 'Retos',
        title: 'Retos profesionales',
        deepDive: 'Detalle técnico',
        intro: 'A lo largo de mi carrera he trabajado en proyectos donde un error no solo representa un problema técnico, sino que puede afectar directamente la operación de una empresa o la experiencia de miles de usuarios. Estos son algunos de los desafíos más importantes que he enfrentado.',
        access: {
          title: 'Sistema de acceso para residenciales',
          p1: 'Uno de los proyectos más desafiantes fue la modernización de la infraestructura de un sistema de control de acceso para fraccionamientos residenciales.',
          p2: 'El reto consistía en migrar el servidor principal desde CentOS 8 hacia una nueva infraestructura más sencilla de administrar para el personal de la empresa, sin comprometer la disponibilidad del servicio. Además de la migración, fue necesario rediseñar el mecanismo de comunicación entre las controladoras instaladas en los accesos y el servidor central.',
          p3: 'Implementé comunicación bidireccional mediante WebSockets, realizando modificaciones tanto en el backend como en el firmware de las controladoras para mantener una sincronización en tiempo real. Esto permitió validar eventos de acceso inmediatamente, mejorar la consistencia de los datos y reducir problemas derivados de la comunicación asíncrona.',
          p4: 'La confiabilidad del sistema era un aspecto crítico, ya que de su correcto funcionamiento dependía el acceso diario de residentes, visitantes y personal autorizado.',
        },
        payroll: {
          title: 'Automatización del cálculo de nómina',
          p1: 'En OPPO participé en la automatización del cálculo de salarios basado en los registros de asistencia de toda la empresa.',
          p2: 'El principal desafío no era únicamente generar un reporte, sino garantizar la exactitud de los datos, ya que cualquier inconsistencia podía impactar directamente el proceso de nómina.',
          p3: 'Diseñé la lógica necesaria para consolidar información relacionada con asistencias, retardos, horas extra, incidencias y demás eventos de attendance, generando un reporte confiable que sirve como base para el cálculo salarial de toda la plantilla.',
          p4: 'Este proyecto requirió una validación exhaustiva de reglas de negocio, manejo de casos excepcionales y una estrecha colaboración con el área de Recursos Humanos para asegurar que los resultados fueran consistentes con las políticas internas de la empresa.',
        },
        commissions: {
          title: 'Automatización del cálculo de comisiones',
          p1: 'Otro proyecto de alto impacto en OPPO fue la automatización del cálculo de comisiones para el equipo comercial.',
          p2: 'El mayor reto fue la naturaleza cambiante de las reglas de negocio. Los esquemas de comisiones evolucionaban constantemente debido a nuevas campañas, promociones y cambios en la estrategia comercial, por lo que la solución debía ser flexible y fácilmente adaptable.',
          p3: 'Desarrollé un sistema capaz de procesar la información de ventas y aplicar reglas de cálculo complejas de manera automatizada, reduciendo significativamente el trabajo manual y disminuyendo el riesgo de errores humanos.',
          p4: 'Además de mejorar la eficiencia operativa, este proyecto permitió entregar resultados más rápidos y confiables para un proceso que influye directamente en la remuneración del equipo de ventas.',
          d1: {
            q: '¿Qué calcula?',
            a: 'Compensación variable periódica para múltiples roles comerciales en varios canales de venta. Cada ciclo concilia un alto volumen de registros a nivel transacción contra los datos organizacionales, de ubicación y jerarquía vigentes en el momento de cada transacción.',
          },
          d2: {
            q: '¿Cómo se modelan los esquemas?',
            a: 'Cada esquema se define por rol, categoría de producto y ventana de vigencia, y usa una de varias estrategias de cálculo: monto fijo por unidad, niveles por volumen o escalas por cumplimiento de meta. Una validación de traslape garantiza un solo esquema activo por alcance, para que una transacción nunca se pague dos veces.',
          },
          d3: {
            q: '¿Cómo interactúan las reglas?',
            a: 'Las reglas siguen una cadena de precedencia explícita: primero exclusiones, luego reglas especiales acotadas en el tiempo y al final el esquema base. Cada capa decide además si sus registros siguen contando para los umbrales de nivel. Codificar ese orden de forma explícita permite al negocio agregar reglas de campaña sin efectos secundarios en el resto del cálculo.',
          },
          d4: {
            q: '¿Cuándo califica una transacción?',
            a: 'Cada registro pasa por una validación de elegibilidad contra datos de confirmación externos antes de pagarse. Los que no califican se siguen reportando, marcados como no elegibles, para que el resultado sea transparente. Qué fuentes de datos alimentan cada umbral se define en una matriz de configuración por rol mantenida por el negocio, y el código la refleja uno a uno.',
          },
          d5: {
            q: '¿Cómo se congelan los resultados para nómina?',
            a: 'En cada corte un proceso programado regenera todos los roles y congela el resultado: reportes generados más tablas snapshot a nivel registro, persona y cumplimiento. Las escrituras son idempotentes por periodo y los reportes posteriores leen el snapshot en lugar de recalcular, así una auditoría posterior devuelve exactamente lo que se pagó aunque cambien los datos maestros.',
          },
          d6: {
            q: '¿Cómo escala?',
            a: 'Escaneos por periodo basados en conjuntos en lugar de consultas por persona, búsquedas en lotes contra bases de datos externas para respetar los límites de memoria del motor, peticiones que responden de inmediato mientras la generación continúa en segundo plano, exportaciones pregeneradas y perfilado de consultas para eliminar cuellos de botella en un código heredado.',
          },
          d7: {
            q: '¿Qué pasa si las reglas cambian dentro de un ciclo?',
            a: 'Cuando hay más de un esquema activo dentro del mismo ciclo, el periodo se divide en segmentos en cada cambio de esquema. Cada segmento se calcula de forma independiente con sus propias reglas y niveles, y los resultados se etiquetan con su segmento, de modo que el monto por segmento es auditable por separado.',
          },
          d8: {
            q: '¿Cómo se resuelven las aclaraciones?',
            a: 'Cada pago es rastreable de la persona al registro individual y a la regla aplicada. La mayoría de las aclaraciones surgen al comparar exportaciones operativas crudas con el resultado de compensación, donde las reglas de elegibilidad y de niveles explican la diferencia. Reportes de detalle de autoservicio permiten al negocio responder estas preguntas sin intervención de ingeniería.',
          },
        },
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
