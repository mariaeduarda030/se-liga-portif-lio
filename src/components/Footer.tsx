const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} <span className="text-foreground font-medium">Seu Nome</span>. Todos os direitos reservados.
          </p>
          <p className="font-mono text-xs">
            Feito com <span className="text-primary">♥</span> usando React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
