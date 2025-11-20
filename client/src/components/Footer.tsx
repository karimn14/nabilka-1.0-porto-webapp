import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/karimn14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/nabil-karim-abdurrahman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:nabil.kar04@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 Nabil Karim Abdurrahman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
