import { motion } from "framer-motion";

function Cta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
      className="bg-charcoal text-center"
      id="cta"
    >
      <h3 className="mb-4 text-2xl font-bold text-wine">
        Interested in working together?
      </h3>
      <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-wine"></div>
      <p className="mb-8 text-lg text-silver">
        Let's create something amazing together.
      </p>
      <a
        href="#contact"
        className="hover:shadow-glow inline-flex items-center gap-2 rounded-lg bg-wine px-8 py-4 text-lg font-semibold text-primary-foreground transition-all duration-200 hover:scale-105 hover:bg-forestgreen"
      >
        Get In Touch
      </a>
    </motion.div>
  );
}

export default Cta;
