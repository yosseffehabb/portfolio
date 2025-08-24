import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const techStack = [
  { name: "HTML5", icon: "logos:html-5" },
  { name: "CSS3", icon: "logos:css-3" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "React", icon: "logos:react" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "GitHub", icon: "logos:github-icon" },
  { name: "VS Code", icon: "logos:visual-studio-code" },
  { name: "Figma", icon: "logos:figma" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

function Tech() {
  return (
    <section className="flex items-center justify-center bg-charcoal py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-wine">Tech Stack</h1>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-wine"></div>
          <p className="mx-auto max-w-2xl text-lg text-silver">
            The powerful technologies and tools that drive my development
            workflow
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <div className="flex flex-col items-center rounded-xl border border-wine bg-slategray p-6 backdrop-blur-sm transition-all duration-300 hover:border-forestgreen hover:shadow-2xl hover:shadow-forestgreen">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center rounded-full bg-wine/10 p-3 transition-all duration-300 group-hover:bg-forestgreen"
                >
                  <Icon
                    icon={tech.icon}
                    className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.div>
                <p className="mt-4 text-center text-sm font-medium text-silver">
                  {tech.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-silver/60">
            Always learning and exploring new technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Tech;
