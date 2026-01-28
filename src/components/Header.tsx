import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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

        {/* Social Icons */}
        <div className="flex items-center gap-5">
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
      </div>
    </motion.header>
  );
};

export default Header;
