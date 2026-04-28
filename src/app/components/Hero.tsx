import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import portrait from "../../assets/portrait.webp";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <style>{`
        @keyframes typewriter-name {
          0% {
            width: 0ch;
          }

          37.5%,
          100% {
            width: 17ch;
          }
        }

        @keyframes typewriter-cursor {
          0%,
          45% {
            opacity: 1;
          }

          46%,
          100% {
            opacity: 0;
          }
        }

        .typewriter-name {
          animation: typewriter-name 5.2s steps(17, end) 0.4s infinite both;
        }

        .typewriter-cursor {
          animation: typewriter-cursor 0.8s step-end infinite;
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 via-transparent to-brand-magenta/5"></div>

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-cyan to-brand-magenta p-1">
              <div className="w-full h-full rounded-full bg-[#0a0a0f] overflow-hidden">
                <img
                  src={portrait}
                  alt="Retrato de Matheus"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-4 flex flex-col items-center"
            style={{ fontSize: "4rem", fontWeight: 700 }}
          >
            <span className="inline-flex items-center font-mono">
              <span className="typewriter-name inline-block overflow-hidden whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta">
                Matheus Rodrigues
              </span>
              <span className="typewriter-cursor ml-1 text-brand-cyan">
                |
              </span>
            </span>
            <span>
              Desenvolvedor{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta">
                Web & Mobile
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Criando experiências digitais inovadoras com design moderno e código limpo
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center mb-12"
          >
            <a
              href="#contato"
              className="px-8 py-4 bg-brand-cyan text-primary-foreground rounded-lg hover:shadow-[0_0_30px_color-mix(in_srgb,var(--brand-cyan)_50%,transparent)] transition-all duration-300"
              style={{ fontWeight: 600 }}
            >
              Entre em Contato
            </a>
            <a
              href="#projetos"
              className="px-8 py-4 border-2 border-brand-cyan text-brand-cyan rounded-lg hover:bg-brand-cyan/10 transition-all duration-300"
              style={{ fontWeight: 600 }}
            >
              Ver Projetos
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-brand-cyan/30 rounded-lg hover:border-brand-cyan hover:shadow-[0_0_20px_color-mix(in_srgb,var(--brand-cyan)_30%,transparent)] transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-brand-cyan/30 rounded-lg hover:border-brand-cyan hover:shadow-[0_0_20px_color-mix(in_srgb,var(--brand-cyan)_30%,transparent)] transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:seu@email.com"
              className="w-12 h-12 flex items-center justify-center border border-brand-cyan/30 rounded-lg hover:border-brand-cyan hover:shadow-[0_0_20px_color-mix(in_srgb,var(--brand-cyan)_30%,transparent)] transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-8 h-8 text-brand-cyan" />
      </motion.div>
    </section>
  );
}
