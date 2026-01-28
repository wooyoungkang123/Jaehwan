const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-8 md:px-16 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Jaehwan Kim</p>
          <p>New York / Seoul</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
