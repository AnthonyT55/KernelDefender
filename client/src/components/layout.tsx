import { Link, useLocation } from "wouter";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (location !== "/") {
      window.location.href = `/#${targetId}`;
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20">
      <header className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 group cursor-pointer">
              <Shield className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
              <span className="font-family-display font-bold text-xl tracking-tight text-foreground">
                Kernel<span className="text-primary">Defender</span>
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 md:gap-8">
            <nav className="hidden md:flex items-center gap-8">
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, 'services')}
                className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground cursor-pointer"
              >
                Services
              </a>
            </nav>
            <a href="https://calendly.com/contact-kerneldefender/30min" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="font-medium text-xs sm:text-sm px-3 py-1.5 sm:px-4 h-auto sm:h-9">
                <span className="hidden sm:inline">Book Your Strategy Call</span>
                <span className="sm:hidden">Book Call</span>
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {children}
      </main>

      <footer className="border-t border-border bg-muted/30 backdrop-blur-lg py-12 mt-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-family-display font-bold text-lg text-foreground">KernelDefender</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
            Professional IT, Infrastructure, and Networking services. 
          </p>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} KernelDefender. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}