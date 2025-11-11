import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/experience", label: "Experience" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/learning", label: "Learning" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" data-testid="link-home-logo">
            <span className="text-xl font-bold text-foreground hover-elevate transition-all cursor-pointer px-3 py-2 rounded-md">
              Nabil<span className="text-accent">.</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                <span
                  className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all hover-elevate active-elevate-2 cursor-pointer ${
                    isActive(link.href)
                      ? "text-accent"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-mobile-${link.label.toLowerCase()}`}>
                <span
                  className={`flex w-full items-center justify-start rounded-md px-4 py-2 text-sm font-medium transition-all hover-elevate active-elevate-2 cursor-pointer ${
                    isActive(link.href)
                      ? "text-accent bg-accent/10"
                      : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
