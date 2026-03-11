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
              <div className="h-8 w-auto relative flex items-center justify-center overflow-hidden">
                 <img src="/logo.png" alt="KernelDefender Logo" className="h-8 w-auto object-contain brightness-0 invert mix-blend-plus-lighter opacity-90" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.style.display = 'block'; }} />
                 <Shield className="h-6 w-6 text-primary hidden transition-transform group-hover:scale-110" />
              </div>
              <span className="font-family-display font-bold text-xl tracking-tight text-foreground">
                Kernel<span className="text-primary">Defender</span>
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground cursor-pointer"
            >
              Services
            </a>
            <Link href="/contact">
              <Button size="sm" className="font-medium">
                Book Your Strategy Call
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {children}
      </main>

      <footer className="border-t border-border bg-muted/30 backdrop-blur-lg py-12 mt-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="h-6 w-auto relative flex items-center justify-center overflow-hidden">
               <img src="/logo.png" alt="KernelDefender Logo" className="h-6 w-auto object-contain brightness-0 invert mix-blend-plus-lighter opacity-90" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.style.display = 'block'; }} />
               <Shield className="h-5 w-5 text-primary hidden" />
            </div>
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