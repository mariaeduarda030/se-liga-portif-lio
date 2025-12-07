import { Github, Linkedin, Mail, Instagram, Twitter } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/seu-usuario",
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/seu-perfil",
    color: "hover:text-[hsl(201,100%,35%)]",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:seu@email.com",
    color: "hover:text-primary",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/seu-usuario",
    color: "hover:text-[hsl(326,84%,55%)]",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/seu-usuario",
    color: "hover:text-[hsl(203,89%,53%)]",
  },
];

const SocialLinks = () => {
  return (
    <section id="contato" className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl text-center">
        <span className="inline-block px-3 py-1 text-sm font-mono text-primary mb-4">
          {"// Conecte-se"}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Vamos <span className="text-gradient">Conversar</span>?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12">
          Estou sempre aberto a novas oportunidades, colaborações e conversas interessantes. Entre em contato através das minhas redes sociais.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 px-6 py-4 card-glass card-glass-hover rounded-xl text-muted-foreground transition-colors ${social.color}`}
              aria-label={`Visite meu perfil no ${social.name}`}
            >
              <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span className="font-medium">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
