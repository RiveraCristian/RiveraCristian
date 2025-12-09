import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/RiveraCristian', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/cristian-rivera-8a6252298/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:rivera.cristian0504@gmail.com', label: 'Email' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-4"
            >
              Cristian Rivera
            </motion.h3>
            <p className="text-gray-400 mb-4">
              Ingeniero en Estadística | Data Scientist | Full Stack Developer
            </p>
            <p className="text-sm text-gray-500">
              Transformando datos en soluciones innovadoras
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <motion.a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Conéctate</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-primary-light dark:hover:bg-primary-dark transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Contacto:</p>
              <a
                href="mailto:rivera.cristian0504@gmail.com"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                rivera.cristian0504@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Cristian Rivera. Todos los derechos reservados.
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-gray-400 flex items-center gap-2"
            >
              Hecho con
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>
              por Cristian Rivera
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
