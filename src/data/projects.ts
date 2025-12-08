export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Ciento01 - Programación de Microcontroladores Educativos",
    description: "Proyecto colaborativo enfocado en la enseñanza de robótica y programación en edades tempranas",
    longDescription: "Sistema educativo innovador que combina hardware ESP32 con programación visual y reconocimiento de voz mediante IA para enseñar programación a niños.",
    technologies: ["ESP32", "C++", "React", "IA", "ArUco", "Reconocimiento de Voz"],
    features: [
      "Sistema de programación sin computador usando núcleo ESP32",
      "Programación visual mediante bloques de código y aplicación móvil",
      "Sistema de escaneo de ArUcos en papel",
      "Integración de programación por voz mediante agentes de IA"
    ],
    githubUrl: "#",
    image: "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Ciento01"
  },
  {
    id: 2,
    title: "Sistema de Gestión Clínica Kinesiológica",
    description: "Software completo para gestión de clínicas kinesiológicas con seguimiento de pacientes y análisis de datos",
    longDescription: "Plataforma web integral para gestión administrativa y clínica de centros de kinesiología, con análisis estadístico de tratamientos.",
    technologies: ["React", "FastAPI", "Python", "PostgreSQL", "TypeScript"],
    features: [
      "Gestión de pacientes y citas",
      "Seguimiento de tratamientos",
      "Generación de informes estadísticos",
      "Panel de administración completo"
    ],
    githubUrl: "#",
    image: "https://via.placeholder.com/600x400/10B981/FFFFFF?text=Gestion+Clinica"
  },
  {
    id: 3,
    title: "Observatorio de Datos del Maule",
    description: "Plataforma de análisis y visualización de datos estadísticos de la Región del Maule",
    longDescription: "Sistema de visualización interactiva de datos económicos, sociales y demográficos de la Región del Maule para apoyo en toma de decisiones.",
    technologies: ["Python", "React", "D3.js", "FastAPI", "Machine Learning"],
    features: [
      "Visualizaciones interactivas de datos regionales",
      "Análisis predictivo de tendencias",
      "Dashboard personalizable",
      "Exportación de informes"
    ],
    githubUrl: "#",
    image: "https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Observatorio+Maule"
  }
];
