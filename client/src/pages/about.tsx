import { motion } from "framer-motion";
import { ShieldCheck, Fingerprint, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="pt-24 pb-20 relative overflow-hidden">
      <div className="container px-4 mx-auto max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 p-12 md:p-16 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] relative overflow-hidden group"
        >
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px]" />
          <h1 className="text-4xl md:text-6xl font-family-display font-bold mb-6 relative z-10">About KernelDefender</h1>
          <p className="text-xl text-muted-foreground leading-relaxed relative z-10">
            We are a dedicated cybersecurity firm based in Danville, Virginia, committed to protecting local businesses from the evolving landscape of digital threats.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 mb-20 p-8 md:p-12 rounded-3xl bg-white/[0.01] border border-white/10 backdrop-blur-xl"
        >
          <div className="prose prose-invert prose-lg text-muted-foreground">
            <p>
              Founded on the principle that <strong>security is a right, not a luxury</strong>, KernelDefender brings enterprise-grade IT protection to businesses of all sizes.
            </p>
            <p>
              Many small business owners believe they fly under the radar of cybercriminals. The reality is that automated attacks target vulnerable systems regardless of the company's size or revenue.
            </p>
            <p>
              Our mission is simple: To provide clear, actionable security services that harden your defenses without disrupting your operations. We don't sell fear; we sell resilience.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Local Focus</h3>
                <p className="text-sm text-muted-foreground">Based in Danville, we understand the local business environment and offer personalized service you can't get from national call centers.</p>
              </div>
            </div>
            
            <div className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Fingerprint className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Tailored Solutions</h3>
                <p className="text-sm text-muted-foreground">We don't believe in cookie-cutter security. We assess your specific risks and build defenses that match your operational needs.</p>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Proactive Stance</h3>
                <p className="text-sm text-muted-foreground">We fix problems before they become disasters. From backup verification to network documentation, we prepare you for the unexpected.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 text-center shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]">
          <h2 className="text-3xl font-family-display font-bold mb-4">Partner with KernelDefender</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your data is your most valuable asset. Let us help you protect it with professional rigor and technical expertise.
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-8">Get your free consultation</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
