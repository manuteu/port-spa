import { motion } from "motion/react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span className="text-muted-foreground">
              Desenvolvido com
            </span>
            <Heart className="w-4 h-4 text-[#ff00ff] fill-[#ff00ff]" />
            <span className="text-muted-foreground">
              por <span className="text-[#00ffff]" style={{ fontWeight: 600 }}>Você</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-[#00ffff]/30 rounded-lg hover:border-[#00ffff] hover:bg-[#00ffff]/10 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-[#00ffff]/30 rounded-lg hover:border-[#00ffff] hover:bg-[#00ffff]/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:seu@email.com"
              className="w-10 h-10 flex items-center justify-center border border-[#00ffff]/30 rounded-lg hover:border-[#00ffff] hover:bg-[#00ffff]/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm"
          >
            © 2026 Todos os direitos reservados
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
