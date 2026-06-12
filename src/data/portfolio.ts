export const personal = {
  name: 'Deivy Jampool Sánchez Coronado',
  shortName: 'Deivy Sánchez',
  role: 'Desarrollador Fullstack',
  tagline: 'Transformo sistemas complejos en experiencias claras, medibles y confiables.',
  hook:
    '¿Necesitas un desarrollador que entienda negocio, diseño y código con la misma profundidad?',
  location: 'San Luis, Cañete — Lima, Perú',
  email: 'sanchezcoronadodeivy5@gmail.com',
  phone: '(+51) 951 108 576',
  cvUrl: '/cv.pdf',
  available: true,
  summary:
    'Profesional con experiencia en diversas empresas del sector tecnológico, especializado en desarrollo Fullstack con enfoque en soluciones escalables, interfaces de alto impacto y arquitecturas robustas. Motivado por el aprendizaje continuo y la entrega iterativa bajo metodologías ágiles.',
}

export const stats = [
  { value: 4, suffix: '+', label: 'Años de experiencia', tone: 'trust' as const },
  { value: 6, suffix: '', label: 'Empresas de referencia', tone: 'authority' as const },
  { value: 15, suffix: '+', label: 'Tecnologías dominadas', tone: 'energy' as const },
  { value: 100, suffix: '%', label: 'Compromiso con calidad', tone: 'growth' as const },
]

export const bentoCards = [
  {
    title: 'Fullstack real',
    description: 'Backend Java/Python + Frontend React/Angular en producción.',
    span: 'col-span-12 md:col-span-7',
    tone: 'trust',
    metric: '4+ años',
  },
  {
    title: 'Sectores críticos',
    description: 'Banca, telecom y consultoría — donde fallar no es opción.',
    span: 'col-span-12 md:col-span-5',
    tone: 'authority',
    metric: '3 industrias',
  },
  {
    title: 'Entrega ágil',
    description: 'Scrum, Jira, CI/CD. Iteraciones que generan valor medible.',
    span: 'col-span-12 md:col-span-4',
    tone: 'energy',
    metric: 'Scrum',
  },
  {
    title: 'Calidad analítica',
    description: 'TDD, QA estructurado y decisiones basadas en datos.',
    span: 'col-span-12 md:col-span-4',
    tone: 'growth',
    metric: 'TDD',
  },
  {
    title: 'Disponible',
    description: 'Abierto a proyectos desafiantes con equipos que valoran excelencia.',
    span: 'col-span-12 md:col-span-4',
    tone: 'warmth',
    metric: '2026',
  },
]

export const narrativeJourney = [
  {
    step: '01',
    phase: 'Captura',
    title: 'Generar curiosidad en 3 segundos',
    description:
      'El cerebro decide en milisegundos si algo merece atención. Un hook directo + diseño premium activan el sistema de recompensa.',
    color: 'trust',
  },
  {
    step: '02',
    phase: 'Validación',
    title: 'Reducir la incertidumbre',
    description:
      'Prueba social (empresas reconocidas) y métricas concretas bajan la barrera de desconfianza antes de profundizar.',
    color: 'authority',
  },
  {
    step: '03',
    phase: 'Comprensión',
    title: 'Información en capas digestibles',
    description:
      'Revelación progresiva: primero el valor, luego la evidencia, al final el detalle. Sin saturar la memoria de trabajo.',
    color: 'energy',
  },
  {
    step: '04',
    phase: 'Acción',
    title: 'Conversión con mínima fricción',
    description:
      'Un CTA dominante, contacto directo y reciprocidad (CV gratis) maximizan la probabilidad de respuesta.',
    color: 'warmth',
  },
]


export const companies = [
  { name: 'Indra Perú', sector: 'Consultoría' },
  { name: 'TCS — Interbank', sector: 'Banca' },
  { name: 'Telefónica Perú', sector: 'Telecom' },
  { name: 'Manpower', sector: 'Outsourcing' },
  { name: 'Wigilabs', sector: 'Tech' },
  { name: 'NTT Data', sector: 'Consultoría' },
]

export const experience = [
  {
    company: 'Indra Perú S.A.',
    role: 'FullStack Pleno',
    period: 'Nov 2024 — Ene 2025',
    sector: 'Consultoría',
    client: 'Proyectos internos',
    highlights: [
      'Desarrollo FullStack end-to-end con arquitectura de microservicios en Java Spring Boot y APIs REST.',
      'Implementación de interfaces dinámicas con ReactJS, Redux y Material UI para dashboards internos.',
      'Automatización de procesos ETL con Python (Pandas, FastAPI) reduciendo tiempos de procesamiento.',
      'Ciclo completo de desarrollo bajo Scrum con sprints de 2 semanas y entregas iterativas.',
      'Gestión de tareas en Jira, revisiones de código en Bitbucket y CI/CD básico.',
    ],
    techStack: ['Java', 'Spring Boot', 'ReactJS', 'Redux', 'Python', 'FastAPI', 'PostgreSQL', 'Bitbucket', 'Jira'],
    skills: ['Microservicios', 'APIs REST', 'Scrum', 'CI/CD', 'ETL'],
    impact: 'Desarrollo completo de 3 módulos internos en solo 3 meses.',
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Front-End Pleno',
    period: 'Oct 2022 — Ene 2024',
    sector: 'Banca',
    client: 'Banco Interbank',
    highlights: [
      'Desarrollo de interfaces críticas para sistemas core bancarios con Angular 14+ y TypeScript estricto.',
      'Integración de APIs REST y WebSockets para visualización de datos financieros en tiempo real.',
      'Implementación de formularios complejos con validación reactiva (RxJS) y gestión de estado con NgRx.',
      'Optimización de rendimiento: lazy loading, change detection OnPush y tree-shaking para bundles ligeros.',
      'Trabajo en equipos ágiles de 8-12 personas con dailies, retrospectivas y planificación de sprints.',
      'Integridad de código con Git Flow, Bitbucket y revisiones de PR obligatorias.',
    ],
    techStack: ['Angular 14+', 'TypeScript', 'RxJS', 'NgRx', 'SCSS', 'Jasmine', 'Karma', 'Git', 'Bitbucket', 'Jenkins'],
    skills: ['Programación reactiva', 'State management', 'Testing unitario', 'Git Flow', 'Scrum'],
    impact: 'Reducción de 35% en tiempos de carga de módulos bancarios críticos.',
  },
  {
    company: 'Indra Perú S.A.',
    role: 'FullStack Pleno',
    period: 'Abr 2022 — Dic 2023',
    sector: 'Telecom',
    client: 'Telefónica del Perú',
    highlights: [
      'Desarrollo de sistemas internos de gestión para Telefónica con Spring Boot (backend) y Angular (frontend).',
      'Diseño e implementación de APIs REST documentadas con Swagger/OpenAPI.',
      'Administración de bases de datos Oracle y PostgreSQL con procedimientos almacenados y consultas optimizadas.',
      'Implementación de autenticación y autorización con Spring Security y JWT.',
      'Metodología Cascada con entregas por fases y documentación técnica completa.',
      'Control de versiones con Git y GitHub, incluyendo branching strategies.',
    ],
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'Angular', 'Oracle', 'PostgreSQL', 'Swagger', 'JWT', 'GitHub'],
    skills: ['Arquitectura REST', 'Seguridad backend', 'SQL avanzado', 'Documentación técnica', 'Waterfall'],
    impact: 'Entrega de 5 módulos de gestión interna en plazos establecidos sin incidencias.',
  },
  {
    company: 'Manpower Professional Services',
    role: 'Backend Pleno',
    period: 'Feb 2022 — Abr 2022',
    sector: 'Outsourcing',
    client: 'Clientes corporativos',
    highlights: [
      'Mantenimiento y evolución de microservicios con Java Spring Boot en arquitectura distribuida.',
      'Resolución proactiva de incidencias en producción con monitoreo y análisis de logs.',
      'Implementación de endpoints RESTful con validaciones y manejo de excepciones centralizado.',
      'Colaboración en equipo ágil con Kanban y entregas continuas.',
    ],
    techStack: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'Postman', 'Git'],
    skills: ['Microservicios', 'Resolución de incidencias', 'Kanban', 'Debugging'],
    impact: 'Resolución del 95% de incidencias dentro del SLA establecido.',
  },
  {
    company: 'Wigilabs Perú S.A.C.',
    role: 'Backend Pleno',
    period: 'Feb 2022 — Abr 2022',
    sector: 'Tech',
    client: 'Proyectos propios',
    highlights: [
      'Implementaciones backend en Java con enfoque en rendimiento y escalabilidad.',
      'Apoyo en desarrollo frontend con JavaScript y React para MVPs internos.',
      'Participación en definición de arquitectura de nuevos proyectos desde cero.',
      'Prototipado rápido con APIs REST y bases de datos NoSQL (MongoDB).',
    ],
    techStack: ['Java', 'Spring Boot', 'React', 'JavaScript', 'MongoDB', 'Git'],
    skills: ['Arquitectura de software', 'Prototipado', 'NoSQL', 'Fullstack'],
    impact: 'Definición de arquitectura base para 2 proyectos nuevos.',
  },
  {
    company: 'NTT Data Perú S.A.C.',
    role: 'Backend Jr',
    period: 'Ago 2021 — Oct 2021',
    sector: 'Consultoría',
    client: 'Formación profesional',
    highlights: [
      'Desarrollo y optimización de servicios backend con Java Spring Boot.',
      'Aprendizaje de mejores prácticas: principios SOLID, patrones de diseño y clean code.',
      'Integración con bases de datos MySQL y escritura de queries optimizados.',
      'Familiarización con flujos de trabajo profesional: Git, code reviews y documentación.',
    ],
    techStack: ['Java', 'Spring Boot', 'MySQL', 'Git', 'Postman'],
    skills: ['SOLID', 'Clean Code', 'Patrones de diseño', 'SQL básico'],
    impact: 'Primer rol profesional — fundamentos técnicos sólidos adquiridos.',
  },
]

export const skillGroups = [
  {
    category: 'Frontend',
    color: 'trust',
    proficiency: 92,
    skills: ['React', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Backend',
    color: 'authority',
    proficiency: 90,
    skills: ['Java', 'Spring Boot', 'Python', 'Django', 'Flask', 'Node.js', 'Go'],
  },
  {
    category: 'Datos & Cloud',
    color: 'growth',
    proficiency: 85,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'AWS', 'Azure', 'GCP'],
  },
  {
    category: 'DevOps & QA',
    color: 'energy',
    proficiency: 82,
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'Jira', 'TDD'],
  },
]

export const softSkills = [
  'Resolución de Problemas',
  'Trabajo en Equipo',
  'Comunicación Efectiva',
  'Adaptabilidad',
  'Proactividad',
  'Aprendizaje Continuo',
]

export const education = {
  institution: 'IESTP Valle Grande',
  degree: 'Técnico en Análisis de Sistemas',
  period: 'Mar 2018 — Feb 2021',
  location: 'Cañete',
  highlights: [
    'Desarrollo de sistemas web con servicios REST y SOAP.',
    'Análisis, diseño e implementación de soluciones tecnológicas.',
  ],
}


export const sectionRail = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'valor', label: 'Valor' },
  { id: 'casos', label: 'Casos' },
  { id: 'testimonios', label: 'Testimonios' },
  { id: 'sobre-mi', label: 'Perfil' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'habilidades', label: 'Stack' },
  { id: 'guia', label: 'Guía' },
  { id: 'blog', label: 'Blog' },
  { id: 'contacto', label: 'Contacto' },
]

export const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#valor', label: 'Valor' },
  { href: '#casos', label: 'Casos' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#sobre-mi', label: 'Perfil' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#habilidades', label: 'Stack' },
  { href: '#blog', label: 'Blog' },
  { href: '#contacto', label: 'Contacto' },
]

export type Testimonial = {
  name: string
  role: string
  text: string
  context: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Carlos Mendoza',
    role: 'Tech Lead · TCS',
    text: 'Trabajar con Deivy en el core bancario de Interbank fue una experiencia fluida. Su capacidad para entender tanto el backend como el frontend aceleró nuestras entregas. Siempre con calidad y sin necesidad de supervisión constante.',
    context: 'Compañero en TCS — Interbank',
  },
  {
    name: 'María Fernanda López',
    role: 'Scrum Master · Indra',
    text: 'Deivy destaca por su comunicación clara y su enfoque en resultados. En los sprints más exigentes de Telefónica, supo priorizar y entregar sin comprometer la calidad. Un perfil que cualquier equipo querría tener.',
    context: 'Scrum Master en Indra — Telefónica',
  },
  {
    name: 'Raúl Gutiérrez',
    role: 'Senior QA · NTT Data',
    text: 'Pocos desarrolladores piensan en testing desde el primer commit. Deivy es uno de ellos. Su código siempre llegaba con menos bugs y eso hacía mi trabajo mucho más fácil. TDD no es un eslogan para él, es práctica diaria.',
    context: 'Colega en NTT Data',
  },
]

export type CaseStudy = {
  title: string
  company: string
  role: string
  period: string
  description: string
  metrics: { value: string; label: string; type: 'positive' | 'neutral' }[]
  techStack: string[]
  icon: string
}

export const caseStudies: CaseStudy[] = [
  {
    title: 'Optimización de módulos bancarios — Interbank',
    company: 'Tata Consultancy Services',
    role: 'Front-End Pleno',
    period: 'Oct 2022 — Ene 2024',
    description:
      'Rediseño y optimización de módulos críticos del core bancario de Interbank. Implementación de lazy loading, change detection OnPush y virtual scrolling para mejorar la experiencia de los oficiales de banca en sus operaciones diarias.',
    metrics: [
      { value: '35%', label: 'Reducción carga inicial', type: 'positive' },
      { value: '2.5s', label: 'Tiempo de interacción', type: 'positive' },
      { value: '0', label: 'Incidencias post-deploy', type: 'neutral' },
    ],
    techStack: ['Angular 14+', 'TypeScript', 'RxJS', 'NgRx', 'Jasmine', 'Karma'],
    icon: 'target',
  },
  {
    title: 'Sistema de gestión interna — Telefónica',
    company: 'Indra Perú S.A.',
    role: 'FullStack Pleno',
    period: 'Abr 2022 — Dic 2023',
    description:
      'Desarrollo completo de 5 módulos de gestión para operaciones internas de Telefónica. Arquitectura de microservicios con Spring Boot y frontend en Angular. Documentación completa con Swagger y autenticación JWT.',
    metrics: [
      { value: '5', label: 'Módulos entregados', type: 'neutral' },
      { value: '100%', label: 'En plazo', type: 'positive' },
      { value: '0', label: 'Incidencias críticas', type: 'neutral' },
    ],
    techStack: ['Java', 'Spring Boot', 'Angular', 'Oracle', 'PostgreSQL', 'Swagger'],
    icon: 'clock',
  },
  {
    title: 'Dashboard interno con ETL automatizado',
    company: 'Indra Perú S.A.',
    role: 'FullStack Pleno',
    period: 'Nov 2024 — Ene 2025',
    description:
      'Implementación de dashboards internos con React y Redux, respaldados por procesos ETL automatizados con Python y FastAPI. Automatización de reportes que antes tomaban horas de trabajo manual.',
    metrics: [
      { value: '3', label: 'Dashboards entregados', type: 'neutral' },
      { value: '80%', label: 'Menos tiempo manual', type: 'positive' },
      { value: '2', label: 'Sprints por módulo', type: 'neutral' },
    ],
    techStack: ['React', 'Redux', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    icon: 'bar-chart',
  },
]

export type BlogPost = {
  title: string
  date: string
  excerpt: string
  category: string
  readTime: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Cómo migrar un monolito a microservicios sin morir en el intento',
    date: 'Jun 2026',
    excerpt: 'Lecciones aprendidas migrando sistemas legacy en una entidad bancaria. Estrategias de estrangulamiento, manejo de datos distribuidos y comunicación entre servicios.',
    category: 'Arquitectura',
    readTime: '8 min',
    tags: ['Microservicios', 'Java', 'Spring Boot', 'Banca'],
  },
  {
    title: 'Testing en frontend: de 0 a cobertura del 85% en un trimestre',
    date: 'Mar 2026',
    excerpt: 'Cómo implementamos una cultura de testing en un equipo Angular sin experiencia previa. Estrategias, herramientas y métricas que funcionaron.',
    category: 'QA',
    readTime: '6 min',
    tags: ['Testing', 'Angular', 'Karma', 'Jasmine', 'TDD'],
  },
  {
    title: 'El portafolio técnico que todo reclutador senior quiere ver',
    date: 'Feb 2026',
    excerpt: 'Diseño UX aplicado a portafolios de desarrolladores: psicología del color, patrones bento jerarquía visual y storytelling técnico para destacar en procesos de selección.',
    category: 'Carrera',
    readTime: '5 min',
    tags: ['UX', 'Carrera', 'Portfolio', 'Diseño'],
  },
]
