import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce Moderno",
    description:
      "Plataforma de vendas online com carrinho, pagamentos e painel administrativo",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind"],
    github: "#",
    live: "#",
    gradient: "from-[#00ffff] to-[#0088ff]",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Sistema de análise de dados com gráficos interativos e relatórios em tempo real",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Next.js", "Chart.js", "API"],
    github: "#",
    live: "#",
    gradient: "from-[#ff00ff] to-[#ff0088]",
  },
  {
    title: "App de Tarefas",
    description:
      "Gerenciador de tarefas com drag & drop, categorias e notificações",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    tags: ["React", "Firebase", "PWA"],
    github: "#",
    live: "#",
    gradient: "from-[#00ff88] to-[#00ffaa]",
  },
  {
    title: "Portfolio Criativo",
    description:
      "Site portfolio com animações avançadas e design minimalista",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    tags: ["Vue.js", "GSAP", "CSS"],
    github: "#",
    live: "#",
    gradient: "from-[#ff8800] to-[#ffaa00]",
  },
  {
    title: "Rede Social",
    description:
      "Plataforma social com feed, perfis, mensagens e interações em tempo real",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tags: ["React", "Socket.io", "Node"],
    github: "#",
    live: "#",
    gradient: "from-[#8800ff] to-[#aa00ff]",
  },
  {
    title: "Landing Page SaaS",
    description:
      "Página de vendas otimizada para conversão com design responsivo",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Next.js", "Framer", "SEO"],
    github: "#",
    live: "#",
    gradient: "from-[#00ffff] to-[#ff00ff]",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-24 px-6 bg-[#0a0a0f]">
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
            Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alguns dos meus trabalhos recentes e projetos pessoais
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-[#00ffff]/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-2" style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-[#00ffff]/10 border border-[#00ffff]/20 rounded-full text-[#00ffff]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 border border-[#00ffff]/30 rounded-lg hover:bg-[#00ffff]/10 hover:border-[#00ffff] transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Código</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 bg-[#00ffff] text-[#0a0a0f] rounded-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm" style={{ fontWeight: 600 }}>
                      Demo
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
