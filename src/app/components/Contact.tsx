import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
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
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vamos criar algo incrível juntos? Entre em contato!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6" style={{ fontSize: "1.5rem", fontWeight: 600 }}>
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-brand-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-brand-cyan/10 border border-brand-cyan/30 rounded-lg">
                  <Mail className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="mb-1" style={{ fontWeight: 600 }}>
                    Email
                  </h4>
                  <a
                    href="mailto:seu@email.com"
                    className="text-muted-foreground hover:text-brand-cyan transition-colors"
                  >
                    seu@email.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-brand-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-brand-magenta/10 border border-brand-magenta/30 rounded-lg">
                  <Phone className="w-6 h-6 text-brand-magenta" />
                </div>
                <div>
                  <h4 className="mb-1" style={{ fontWeight: 600 }}>
                    Telefone
                  </h4>
                  <a
                    href="tel:+5511999999999"
                    className="text-muted-foreground hover:text-brand-magenta transition-colors"
                  >
                    +55 (11) 99999-9999
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-brand-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#00ff88]" />
                </div>
                <div>
                  <h4 className="mb-1" style={{ fontWeight: 600 }}>
                    Localização
                  </h4>
                  <p className="text-muted-foreground">São Paulo, Brasil</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-brand-cyan/10 to-brand-magenta/10 border border-brand-cyan/20 rounded-xl">
              <p className="text-center text-muted-foreground">
                Disponível para projetos freelance e oportunidades de emprego
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Assunto da mensagem"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Sua mensagem..."
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-brand-cyan text-primary-foreground rounded-lg hover:shadow-[0_0_30px_color-mix(in_srgb,var(--brand-cyan)_50%,transparent)] transition-all duration-300 flex items-center justify-center gap-2"
                style={{ fontWeight: 600 }}
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
