const Footer = () => (
  <footer className="border-t border-border/30 py-12">
    <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
      <span className="font-bold font-display text-lg">
        <span className="text-gradient-primary">Gym</span>ify
      </span>
      <p className="text-muted-foreground text-sm text-center max-w-md">
        The first AI-powered fitness system that transforms workouts into a competitive, 
        game-like experience.
      </p>
      <p className="text-muted-foreground text-xs font-mono">© 2026 Gymify</p>
    </div>
  </footer>
);

export default Footer;
