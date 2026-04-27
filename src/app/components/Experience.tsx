import React from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Moneycloud Tecnologia",
    position: "Desenvolvedor Front-end Pleno",
    period: "2022 - Atualmente",
    description:
      "Atuação no desenvolvimento e evolução de uma plataforma financeira whitelabel, utilizada por múltiplos clientes e com alto volume de usuários.",
    achievements: [
      "Desenvolvimento de interfaces escaláveis e performáticas utilizando React, Vue e TypeScript",
      "Participação ativa na definição de soluções técnicas e melhorias contínuas na arquitetura front-end",
      "Implementação e manutenção de features críticas com foco em usabilidade, segurança e experiência do usuário",
      "Integração com APIs e serviços backend, garantindo consistência e confiabilidade dos dados",
      "Colaboração com times multidisciplinares (produto, design e backend) para entrega de soluções alinhadas ao negócio",
      "Otimização de performance e correção de gargalos em fluxos importantes da aplicação",
    ],
    color: "#00ffff",
  },
  {
    company: "Moneycloud",
    position: "Estágio Front-end",
    period: "2021 - 2022",
    description:
      "Atuação no desenvolvimento e manutenção de interfaces web, com foco em evolução contínua das aplicações.",
    achievements: [
      "Atuação no desenvolvimento de interfaces web utilizando Vue.js e React",
      "Criação de telas responsivas e componentes reutilizáveis",
      "Suporte na manutenção e evolução de aplicações existentes",
      "Participação no desenvolvimento de funcionalidades para aplicações mobile com React Native e Cordova",
      "Colaboração com o time na implementação de boas práticas de desenvolvimento front-end",
    ],
    color: "#ff00ff",
  },
  {
    company: "Freelance",
    position: "Desenvolvedor Front-end (Vue.js)",
    period: "2024 - 2025",
    description:
      "Atuação em projetos freelance com foco em interfaces modernas, alinhadas a requisitos de negócio e qualidade técnica.",
    achievements: [
      "Desenvolvimento de interfaces modernas e responsivas utilizando Vue.js e TypeScript",
      "Criação de telas dinâmicas com foco em experiência do usuário e usabilidade",
      "Implementação de soluções utilizando Vite para otimização de build e performance",
      "Alinhamento direto com stakeholders para entendimento de requisitos e entregas",
      "Participação na evolução contínua do projeto com melhorias técnicas e funcionais",
    ],
    color: "#00ff88",
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#ff00ff]"
            style={{ fontSize: "3rem", fontWeight: 700 }}
          >
            Experiência
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Minha trajetória profissional no desenvolvimento front-end
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00ffff] via-[#ff00ff] to-[#00ff88]"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.position}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              <motion.div
                className="absolute left-5 w-7 h-7 rounded-full border-4 border-background"
                style={{ backgroundColor: exp.color }}
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 400 }}
              />

              <div className="bg-card border border-border rounded-xl p-6 hover:border-[#00ffff]/50 transition-all duration-300 group">
                <div className="flex flex-wrap gap-4 justify-between items-start mb-4">
                  <div>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 600 }} className="mb-1">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-[#00ffff]">
                      <Briefcase className="w-4 h-4" />
                      <span style={{ fontWeight: 500 }}>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#00ffff]/10 border border-[#00ffff]/20 rounded-lg">
                    <Calendar className="w-4 h-4 text-[#00ffff]" />
                    <span className="text-[#00ffff]" style={{ fontWeight: 500 }}>
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <div className="space-y-2">
                  {exp.achievements.map((achievement) => (
                    <div key={achievement} className="flex items-start gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2"
                        style={{ backgroundColor: exp.color }}
                      ></div>
                      <span className="text-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
