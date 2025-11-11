import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-1 flex items-center justify-center px-8 py-32 pt-40">
        <motion.div 
          className="max-w-4xl w-full text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight" data-testid="text-hero-headline">
              Engineering Physics | Embedded Systems | IIoT | Control Systems
            </h1>
            <div className="h-1 w-32 bg-accent mx-auto rounded-full"></div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-bio">
            Detail-oriented Engineering Physics student at <span className="text-accent font-medium">Institut Teknologi Bandung</span>, passionate about embedded systems and intelligent control innovation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/portfolio">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover-elevate active-elevate-2"
                data-testid="button-view-portfolio"
              >
                View Portfolio
              </Button>
            </Link>
            <a href="/docs/CV_Nabil_Karim.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-accent text-accent hover-elevate active-elevate-2"
                data-testid="button-download-cv"
              >
                Download CV
              </Button>
            </a>
          </div>

          <div className="pt-8">
            <div className="inline-flex items-center gap-6 p-4 rounded-lg bg-card/50 border border-card-border">
              <a
                href="https://linkedin.com/in/nabilkarim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                data-testid="link-linkedin"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/nabilkarim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                data-testid="link-github"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:nabil.karim@example.com"
                className="text-muted-foreground hover:text-accent transition-colors"
                data-testid="link-email"
                aria-label="Email Contact"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border">
        <p data-testid="text-footer-copyright">© 2025 Nabil Karim Abdurrahman</p>
      </footer>
    </main>
  );
}
