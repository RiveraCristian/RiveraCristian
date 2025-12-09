export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Ciencia de Datos",
    skills: [
      "Python (Pandas, NumPy, Scikit-learn)",
      "TensorFlow",
      "PyTorch",
      "R",
      "SQL",
      "Análisis Estadístico",
      "Machine Learning"
    ]
  },
  {
    category: "Desarrollo Full Stack",
    skills: [
      "Python (FastAPI)",
      "APIs RESTful",
      "TypeScript",
      "JavaScript",
      "React",
      "Vite",
      "Angular"
    ]
  },
  {
    category: "Programación de Microcontroladores",
    skills: [
      "C++",
      "ESP32",
      "Sistemas Embebidos"
    ]
  },
  {
    category: "Inteligencia Artificial",
    skills: [
      "Desarrollo de agentes IA",
      "Procesamiento de lenguaje natural",
      "Reconocimiento de voz"
    ]
  },
  {
    category: "Idiomas",
    skills: [
      "Español (Nativo)",
      "Inglés (Lectura científica)"
    ]
  }
];
