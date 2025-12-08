export interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Colabi Spa",
    position: "Desarrollador e Investigador",
    location: "Talca, Chile",
    startDate: "Diciembre 2024",
    endDate: "Actualidad",
    current: true,
    responsibilities: [
      "Investigación de proyectos",
      "Implementación de Modelos de Inteligencia Artificial",
      "Consultoría a corredora de seguros",
      "Observatorio de Datos del Maule",
      "Desarrollo de Plataforma de Mensajería Masiva",
      "Sistema de Gestión de Seguros de Garantía",
      "Plataforma de formulario a concursos inteligente",
      "Software de generación de plantillas ortopédicas"
    ]
  },
  {
    id: 2,
    company: "Gobierno Regional del Maule",
    position: "Consultor en Desarrollo de TI",
    location: "Talca, Chile",
    startDate: "Julio 2024",
    endDate: "Diciembre 2024",
    current: false,
    responsibilities: [
      "Consultoría especializada sobre brechas tecnológicas del Gobierno Regional del Maule",
      "Análisis y proyección de desafíos en transformación digital",
      "Propuesta de desarrollo de software para gestión del ciclo de vida de proyectos"
    ]
  },
  {
    id: 3,
    company: "MCL Data Strategies",
    position: "Fundador",
    location: "Chile",
    startDate: "Marzo 2024",
    endDate: "Actualidad",
    current: true,
    responsibilities: [
      "Consultoría estratégica para emprendimientos donde los datos se conviertan en indicadores en la toma de decisiones",
      "Estudio de Mercado para la Universidad Católica del Maule",
      "Desarrollo de Software de Gestión Clínica Kinesiológica",
      "Apoyo en postulaciones estatales a emprendedores (Gratis)"
    ]
  },
  {
    id: 4,
    company: "Universidad Católica del Maule",
    position: "Práctica Profesional",
    location: "Talca, Chile",
    startDate: "Junio 2023",
    endDate: "Diciembre 2023",
    current: false,
    responsibilities: [
      "Seguimiento y análisis de Encuestas Institucionales",
      "Análisis en el Marco de la Construcción del Plan de Desarrollo Estratégico 2024-2028",
      "Automatización de análisis del Entorno educacional",
      "Análisis de Datos Institucionales"
    ]
  }
];
