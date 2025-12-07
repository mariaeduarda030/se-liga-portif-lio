import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Projeto 1",
    description: "Descrição do primeiro projeto desenvolvido durante o ano. Adicione detalhes sobre as tecnologias e funcionalidades.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/seu-usuario/projeto1",
    liveUrl: "https://seu-usuario.github.io/projeto1",
  },
  {
    title: "Projeto 2",
    description: "Descrição do segundo projeto. Explique o objetivo e os aprendizados obtidos durante o desenvolvimento.",
    tags: ["React", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/seu-usuario/projeto2",
    liveUrl: "https://seu-usuario.github.io/projeto2",
  },
  {
    title: "Projeto 3",
    description: "Terceiro projeto do portfólio. Destaque as principais features e desafios superados.",
    tags: ["Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/seu-usuario/projeto3",
  },
  {
    title: "Projeto 4",
    description: "Quarto projeto desenvolvido. Mostre sua evolução e novas habilidades adquiridas.",
    tags: ["Python", "Flask", "PostgreSQL"],
    githubUrl: "https://github.com/seu-usuario/projeto4",
    liveUrl: "https://seu-usuario.github.io/projeto4",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-mono text-primary mb-4">
            {"// Meus Projetos"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trabalhos <span className="text-gradient">Recentes</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Uma seleção dos projetos desenvolvidos ao longo do ano, demonstrando diferentes habilidades e tecnologias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
