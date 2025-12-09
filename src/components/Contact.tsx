import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - in production, integrate with EmailJS or backend
    // For now, we'll open the default email client
    const mailtoLink = `mailto:rivera.cristian0504@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    )}`;
    
    window.open(mailtoLink, '_blank');
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

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
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
          >
            ¿Trabajemos <span className="text-primary-light dark:text-primary-dark">Juntos?</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12"
          >
            Estoy disponible para nuevos proyectos y colaboraciones. ¡Contactémonos!
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-all"
                    placeholder="Asunto del mensaje"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-all resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-primary-light dark:bg-primary-dark text-white rounded-lg font-semibold hover:bg-primary-light/90 dark:hover:bg-primary-dark/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensaje
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-center"
                  >
                    ¡Mensaje enviado exitosamente!
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-gradient-to-br from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark p-8 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>

                <div className="space-y-4">
                  <motion.a
                    href="mailto:rivera.cristian0504@gmail.com"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm opacity-90">Email</p>
                      <p className="font-semibold">rivera.cristian0504@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+56967331258"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm opacity-90">Teléfono</p>
                      <p className="font-semibold">+56 9 6733 1258</p>
                    </div>
                  </motion.a>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm opacity-90">Ubicación</p>
                      <p className="font-semibold">Talca, Chile</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Availability */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg text-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full font-semibold mb-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  Disponible para proyectos
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Actualmente aceptando nuevas oportunidades de colaboración y proyectos freelance
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
