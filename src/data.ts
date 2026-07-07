export const profile = {
  name: 'Luis Fernando Mateo Vargas',
  title: 'Ingeniero en Desarrollo de Software · Fullstack Developer',
  location: 'San Bartolo Teontepec, Puebla',
  phone: '238 223 6298',
  email: 'luisfernandomateovargas894@gmail.com',
  github: 'https://github.com/luisfernandoMV',
  cv: '/CV-Luis-Fernando-Mateo-Vargas.pdf',
  summary:
    'Técnico en Desarrollo de Software recién titulado, con experiencia práctica en desarrollo fullstack. Persona responsable, comprometida y con alta iniciativa para aprender y mejorar constantemente. Me adapto con facilidad a nuevos entornos y desafíos, manteniendo una actitud proactiva para trabajar en equipo y aportar soluciones eficaces.',
}

export type Experience = {
  role: string
  org: string
  period: string
  bullets: string[]
  stack: string[]
}

export const experience: Experience[] = [
  {
    role: 'Desarrollador Fullstack',
    org: 'Editando Ideas — ID-ONE Contact Center',
    period: 'Dic 2025 – Abr 2026',
    bullets: [
      'Diseño e implementación del backend de una plataforma de contact center empresarial.',
      'APIs REST con Node.js/Fastify; autenticación OAuth/JWT y gestión de webhooks.',
      'Integración con Facebook, Gmail, Outlook y WhatsApp; pagos con Stripe.',
      'Base de datos PostgreSQL (Supabase); CI/CD con Docker y Bitbucket Pipelines.',
      'Documentación Swagger y pruebas automatizadas con Vitest/Jest.',
    ],
    stack: ['Node.js', 'Fastify', 'Supabase', 'PostgreSQL', 'JWT', 'Stripe', 'Docker', 'Vite', 'Swagger'],
  },
  {
    role: 'Asistente de Gerencia / Desarrollador Web',
    org: 'backsidesiluet',
    period: 'May 2024 – Ago 2024',
    bullets: [
      'Planeación, desarrollo, gestión y lanzamiento de una página web desde cero.',
      'Aumento del alcance y presencia en línea de la empresa.',
    ],
    stack: ['React', 'Express', 'NoSQL'],
  },
]

export type Project = {
  name: string
  tagline: string
  period: string
  bullets: string[]
  stack: string[]
}

export const projects: Project[] = [
  {
    name: 'Reparapp',
    tagline: 'Plataforma de Servicios del Hogar · Proyecto Colaborativo Estudiantil',
    period: 'Ago 2025 – Jul 2025',
    bullets: [
      'App web tipo Uber para conectar usuarios con trabajadores de oficios y servicios de mantenimiento.',
      'Sistema de verificación de trabajadores para garantizar confiabilidad.',
    ],
    stack: ['Next.js', 'Firebase', 'TypeScript'],
  },
  {
    name: 'Nutrifut',
    tagline: 'App de Nutrición con IA · Proyecto Personal',
    period: '2025',
    bullets: ['App web con modelo de Aprendizaje Supervisado para recomendar platillos personalizados.'],
    stack: ['Python', 'PostgreSQL', 'Firebase'],
  },
]

export type Education = {
  degree: string
  school: string
  period: string
}

export const education: Education[] = [
  {
    degree: 'Ingeniería en Desarrollo de Software',
    school: 'Universidad Tecnológica de Tehuacán',
    period: '2024 – 2026',
  },
  {
    degree: 'TSU en Desarrollo y Gestión de Software',
    school: 'Universidad Tecnológica de Tehuacán',
    period: '2022 – 2024',
  },
  {
    degree: 'Bachillerato General',
    school: 'Instituto Ignacio Zaragoza',
    period: '2019 – 2022',
  },
]

export const skills: { category: string; items: string[] }[] = [
  { category: 'Backend', items: ['Node.js', 'Fastify', 'Express', 'Nest.js', 'REST APIs', 'JWT', 'OAuth'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Vite', 'TypeScript'] },
  { category: 'Bases de datos', items: ['PostgreSQL', 'Supabase', 'Firebase', 'SQL', 'NoSQL'] },
  { category: 'DevOps', items: ['Docker', 'docker-compose', 'Bitbucket Pipelines', 'CI/CD'] },
  { category: 'Integraciones', items: ['Stripe', 'Swagger', 'Webhooks', 'Facebook API', 'Gmail', 'WhatsApp'] },
  { category: 'Herramientas', items: ['GitHub', 'Figma', 'Canva'] },
  { category: 'Idiomas', items: ['Español (nativo)', 'Inglés (A2)'] },
]
