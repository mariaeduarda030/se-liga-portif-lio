import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const ProjectCard = ({ title, description, tags, githubUrl, liveUrl, image }: ProjectCardProps) => {
  return (
    <article className="group card-glass card-glass-hover rounded-xl overflow-hidden">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-secondary">
        {image ? (
          <img 
            src={image} 
            alt={`Preview do projeto ${title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl font-mono text-primary/30">{`</>`}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {githubUrl && (
            <Button variant="ghost" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Código fonte de ${title} no GitHub`}>
                <Github className="w-4 h-4 mr-2" />
                Código
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button variant="ghost" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver projeto ${title} ao vivo`}>
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
