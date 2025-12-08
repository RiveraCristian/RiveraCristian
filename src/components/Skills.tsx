import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';

const Skills = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const skillColors = [
    'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
    'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          >
            Habilidades <span className="text-primary-light dark:text-primary-dark">Técnicas</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">
                    {categoryIndex === 0 && '📊'}
                    {categoryIndex === 1 && '💻'}
                    {categoryIndex === 2 && '🤖'}
                    {categoryIndex === 3 && '🧠'}
                    {categoryIndex === 4 && '🌍'}
                  </span>
                  {category.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                        skillColors[categoryIndex % skillColors.length]
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Highlights */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-primary-light to-blue-600 dark:from-primary-dark dark:to-blue-400 p-6 rounded-lg shadow-lg text-white text-center"
            >
              <div className="text-4xl font-bold mb-2">4+</div>
              <div className="text-lg font-semibold">Años de Experiencia</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-accent-light to-green-600 dark:from-accent-dark dark:to-green-400 p-6 rounded-lg shadow-lg text-white text-center"
            >
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg font-semibold">Proyectos Completados</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 p-6 rounded-lg shadow-lg text-white text-center"
            >
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg font-semibold">Tecnologías Dominadas</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
