import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Shield, Search, FileText } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "risk-assessment",
      icon: Search,
      title: "IT Risk Assessment & Health Audit",
      description: "A deep-dive inspection of your current technology environment to identify vulnerabilities, outdated systems, and security gaps.",
      features: [
        "Vulnerability scanning",
        "Hardware & software inventory",
        "Security policy review",
        "Risk prioritization report",
        "Remediation roadmap"
      ]
    },
    {
      id: "backup-validation",
      icon: Shield,
      title: "Backup Validation & Restore Testing",
      description: "Backups are useless if they fail when you need them. We rigorously test your recovery process to ensure business continuity.",
      features: [
        "Backup integrity verification",
        "Full system restore simulation",
        "Recovery Time Objective (RTO) analysis",
        "Off-site storage verification",
        "Ransomware resilience check"
      ]
    },
    {
      id: "network-cleanup",
      icon: FileText,
      title: "Network Cleanup & Documentation",
      description: "Chaos breeds insecurity. We organize your digital infrastructure and create professional documentation for easy management.",
      features: [
        "Network topology mapping",
        "Cable management & organization",
        "Device labeling & tracking",
        "Access control audit",
        "Comprehensive system documentation"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 relative">
      <div className="container px-4 mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20 p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] relative overflow-hidden group"
        >
          {/* Blue Halo Light Effect */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-colors" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-colors" />
          
          <h1 className="text-4xl md:text-6xl font-family-display font-bold mb-6 relative z-10">Our Services</h1>
          <p className="text-xl text-muted-foreground relative z-10">
            Specialized cybersecurity interventions designed to harden your infrastructure and provide peace of mind.
          </p>
        </motion.div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(59,130,246,0.2)] relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
            >
              {/* Subtle Blue Halo for each service card */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[100px] group-hover:bg-primary/15 transition-colors" />
              
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-family-display font-bold">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 backdrop-blur-md">
                  <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary">Key Deliverables</h3>
                  <ul className="grid sm:grid-cols-1 gap-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-12">
            <h3 className="text-2xl font-bold mb-4">Not sure where to start?</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Most businesses start with our Risk Assessment to get a clear picture of their security posture.
            </p>
            <Link href="/contact">
              <Button size="lg">Contact Us Today</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
