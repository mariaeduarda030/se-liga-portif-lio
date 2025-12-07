import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Photo */}
          <div className="animate-fade-in order-1 lg:order-2 flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-primary/50 blur-md opacity-60" />
              <img 
                src={profilePhoto} 
                alt="Foto de Maria Eduarda"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-2 border-primary/30"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 flex-1">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/5">
                Desenvolvedora de Software
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Olá, eu sou{" "}
              <span className="text-gradient">Maria Eduarda</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Criando experiências digitais excepcionais através de código limpo e design inovador. Confira meus projetos abaixo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button 
                variant="default" 
                size="lg"
                className="glow"
                onClick={() => document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Projetos
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              >
                Entrar em Contato
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
