import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Sobre <span className="text-primary-light dark:text-primary-dark">Mí</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center md:justify-start"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary-light dark:border-primary-dark shadow-xl"
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark flex items-center justify-center">
                    <span className="text-6xl md:text-8xl font-bold text-white">CR</span>
                  </div>
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -bottom-2 -right-2 w-16 h-16 bg-accent-light dark:bg-accent-dark rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div variants={itemVariants} className="md:col-span-2 space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Soy <strong className="text-primary-light dark:text-primary-dark">Ingeniero en Estadística</strong> con 
                una sólida experiencia en ciencia de datos y desarrollo full stack. Mi enfoque combina expertise 
                analítico con habilidades técnicas avanzadas para crear soluciones innovadoras y escalables.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Con experiencia en <strong>consultoría tecnológica</strong> tanto en el sector público como privado, 
                he trabajado en proyectos que abarcan desde el análisis de datos institucionales hasta el desarrollo 
                de sistemas completos de gestión y plataformas de inteligencia artificial.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Mi pasión por el <strong>aprendizaje continuo</strong> y la adopción de nuevas tecnologías me ha 
                llevado a integrar IA en proyectos educativos, desarrollar sistemas embebidos con ESP32, y crear 
                soluciones que transforman datos en decisiones estratégicas.
              </p>

              {/* Contact Info */}
              <div className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Información de Contacto</h3>
                
                <motion.a
                  href="mailto:rivera.cristian0504@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>rivera.cristian0504@gmail.com</span>
                </motion.a>

                <motion.a
                  href="tel:+56967331258"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+56 9 6733 1258</span>
                </motion.a>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Talca, Chile</span>
                </motion.div>

                {/* Social Links */}
                <div className="flex gap-4 pt-4">
                  <motion.a
                    href="https://github.com/RiveraCristian"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com/in/cristian-rivera"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Research Section */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              📚 Investigación
            </h3>
            <h4 className="text-xl font-semibold text-primary-light dark:text-primary-dark mb-2">
              Tesis de Grado
            </h4>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              "Explorando las Características Determinantes del Espíritu de Servicio en Estudiantes Universitarios"
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Universidad Católica del Maule
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
