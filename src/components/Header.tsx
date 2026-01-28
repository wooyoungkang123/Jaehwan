import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Mail, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/menu", label: "Menu" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm" : "bg-background"
      }`}
    >
      <div className="container-narrow flex items-center justify-between py-6 px-8 md:px-16">
        {/* Logo */}
        <Link to="/" className="font-display text-lg tracking-wide text-navy uppercase">
          Jaehwan Kim
        </Link>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`nav-link ${location.pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-5">
          <a href="#" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="Instagram">
            <Instagram size={16} strokeWidth={1.5} />
          </a>
          <a href="#" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="Facebook">
            <Facebook size={16} strokeWidth={1.5} />
          </a>
          <a href="#" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin size={16} strokeWidth={1.5} />
          </a>
          <a href="#" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="Email">
            <Mail size={16} strokeWidth={1.5} />
          </a>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden text-foreground p-2" aria-label="Menu">
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[340px]">
            <div className="flex flex-col gap-8 mt-8">
              {/* Navigation Links */}
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-display tracking-wide transition-colors ${
                      location.pathname === link.href 
                        ? "text-navy" 
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Social Icons in Mobile Menu */}
              <div className="flex items-center gap-6 pt-6 border-t border-border">
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="Instagram">
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="Facebook">
                  <Facebook size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="Email">
                  <Mail size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Header;
