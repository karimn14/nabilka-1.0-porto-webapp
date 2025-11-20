import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Footer from '../components/Footer';

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
            <a href="docs/CV_Nabil_Karim.pdf" download>
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

        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
