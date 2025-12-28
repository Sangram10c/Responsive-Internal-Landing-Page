import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Benefits", href: "#benefits" },
  { name: "Top Reviews", href: "#reviews" },
  { name: "Meet Update", href: "#update" },
  { name: "Contact", href: "#contact" },
];

export function Header({ onStartOrganizing }: { onStartOrganizing: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto flex items-center justify-between py-4" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-2" aria-label="do list home">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">✓</span>
          </div>
          <span className="text-xl font-bold text-foreground">do list</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8" role="menubar">
          {navLinks.map((link) => (
            <li key={link.name} role="none">
              <a
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
                role="menuitem"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button variant="hero" size="lg" onClick={onStartOrganizing}>
            Start Organizing
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border animate-fade-in">
          <ul className="container mx-auto py-4 space-y-4" role="menu">
            {navLinks.map((link) => (
              <li key={link.name} role="none">
                <a
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors font-medium"
                  role="menuitem"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li role="none">
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onStartOrganizing();
                }}
              >
                Start Organizing
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
