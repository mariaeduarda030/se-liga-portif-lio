import { Briefcase, GraduationCap, Calendar } from "lucide-react";

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "work" | "education";
}

const TimelineItem = ({ title, organization, period, description, type }: TimelineItemProps) => {
  const Icon = type === "work" ? Briefcase : GraduationCap;
  
  return (
    <div className="relative pl-8 pb-8 last:pb-0 group">
      {/* Timeline line */}
      <div className="absolute left-[11px] top-8 bottom-0 w-px bg-border group-last:hidden" />
      
      {/* Icon */}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
        <Icon className="w-3 h-3 text-primary" />
      </div>
      
      {/* Content */}
      <div className="card-glass card-glass-hover rounded-xl p-5">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h3 className="font-semibold text-foreground">{title}</h3>
          <span className="text-primary">•</span>
          <span className="text-muted-foreground">{organization}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Calendar className="w-4 h-4" />
          <span>{period}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const experiences = [
  {
    title: "Desenvolvedora Full Stack",
    organization: "Tech Company",
    period: "2023 - Presente",
    description: "Desenvolvimento de aplicações web utilizando React, Node.js e PostgreSQL. Participação em projetos ágeis e colaboração com equipes multidisciplinares.",
    type: "work" as const,
  },
  {
    title: "Estagiária de Desenvolvimento",
    organization: "Startup XYZ",
    period: "2022 - 2023",
    description: "Auxílio no desenvolvimento de interfaces de usuário e manutenção de sistemas legados. Aprendizado de metodologias ágeis e boas práticas de código.",
    type: "work" as const,
  },
  {
    title: "Freelancer",
    organization: "Autônoma",
    period: "2021 - 2022",
    description: "Criação de websites e landing pages para pequenos negócios. Desenvolvimento de soluções personalizadas para clientes diversos.",
    type: "work" as const,
  },
];

const education = [
  {
    title: "Bacharelado em Ciência da Computação",
    organization: "Universidade Federal",
    period: "2020 - 2024",
    description: "Formação completa em fundamentos de computação, algoritmos, estruturas de dados, engenharia de software e desenvolvimento de sistemas.",
    type: "education" as const,
  },
  {
    title: "Técnico em Informática",
    organization: "ETEC",
    period: "2017 - 2019",
    description: "Curso técnico com foco em programação, redes de computadores, banco de dados e desenvolvimento web básico.",
    type: "education" as const,
  },
  {
    title: "Certificação AWS Cloud Practitioner",
    organization: "Amazon Web Services",
    period: "2023",
    description: "Certificação em fundamentos de computação em nuvem, serviços AWS e boas práticas de arquitetura cloud.",
    type: "education" as const,
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-mono text-primary mb-4">
            {"// Trajetória"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiência & <span className="text-gradient">Formação</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Minha jornada profissional e acadêmica na área de tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Experiências */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Experiência Profissional</h3>
            </div>
            <div>
              {experiences.map((exp, index) => (
                <TimelineItem key={index} {...exp} />
              ))}
            </div>
          </div>

          {/* Formação */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Formação Acadêmica</h3>
            </div>
            <div>
              {education.map((edu, index) => (
                <TimelineItem key={index} {...edu} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
