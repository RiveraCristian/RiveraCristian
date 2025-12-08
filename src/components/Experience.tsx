import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experiences } from '../data/experience';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          >
            Experiencia <span className="text-primary-light dark:text-primary-dark">Profesional</span>
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-light dark:bg-primary-dark transform md:-translate-x-1/2" />

            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-light dark:bg-primary-dark rounded-full border-4 border-white dark:border-slate-800 transform -translate-x-1/2 z-10">
                    {exp.current && (
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="absolute inset-0 bg-accent-light dark:bg-accent-dark rounded-full"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ml-16 md:ml-0"
                    >
                      {/* Company and Position */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 bg-primary-light/10 dark:bg-primary-dark/10 rounded-lg">
                          <Briefcase className="w-6 h-6 text-primary-light dark:text-primary-dark" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {exp.company}
                          </h3>
                          <p className="text-lg text-primary-light dark:text-primary-dark font-semibold">
                            {exp.position}
                          </p>
                        </div>
                        {exp.current && (
                          <span className="px-3 py-1 bg-accent-light/20 dark:bg-accent-dark/20 text-accent-light dark:text-accent-dark text-sm font-semibold rounded-full">
                            Actualidad
                          </span>
                        )}
                      </div>

                      {/* Location and Date */}
                      <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {exp.startDate} - {exp.endDate}
                          </span>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                          >
                            <span className="text-primary-light dark:text-primary-dark mt-1.5">•</span>
                            <span className="flex-1">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
