import { motion } from "motion/react";
import { Code2, Palette, Smartphone, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Desenvolvimento Front-End",
    description: "React, TypeScript, Next.js, Vue.js",
    color: "var(--brand-cyan)",
  },
  {
    icon: Palette,
    title: "Design & UI/UX",
    description: "Figma, Tailwind CSS, Styled Components",
    color: "var(--brand-magenta)",
  },
  {
    icon: Smartphone,
    title: "Responsivo & Mobile",
    description: "Mobile-first, Progressive Web Apps",
    color: "#00ff88",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Otimização, SEO, Acessibilidade",
    color: "#ff8800",
  },
];

const technologies = [
  "React",
  "React Native",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Vue.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Git",
  "Figma",
  "Node.js",
  "REST API",
];

export function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta"
            style={{ fontSize: "3rem", fontWeight: 700 }}
          >
            Habilidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções inovadoras
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-brand-cyan/50 transition-all duration-300 group"
              style={{ boxShadow: "none" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 30px color-mix(in srgb, ${skill.color} 25%, transparent)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                style={{
                  background: `linear-gradient(135deg, color-mix(in srgb, ${skill.color} 12.5%, transparent), color-mix(in srgb, ${skill.color} 3%, transparent))`,
                }}
              >
                <skill.icon className="w-7 h-7" style={{ color: skill.color }} />
              </div>
              <h3 className="mb-2" style={{ fontWeight: 600 }}>
                {skill.title}
              </h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-xl p-8"
        >
          <h3 className="mb-6 text-center" style={{ fontSize: "1.5rem", fontWeight: 600 }}>
            Tecnologias
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-5 py-2 bg-brand-cyan/10 border border-brand-cyan/30 rounded-full text-brand-cyan hover:bg-brand-cyan/20 hover:shadow-[0_0_15px_color-mix(in_srgb,var(--brand-cyan)_30%,transparent)] transition-all duration-300 cursor-default"
                style={{ fontWeight: 500 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
