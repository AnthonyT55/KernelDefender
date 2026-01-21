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
    <div className="pt-24 pb-20">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-family-display font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Specialized cybersecurity interventions designed to harden your infrastructure and provide peace of mind.
          </p>
        </motion.div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                  <service.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-family-display font-bold">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="bg-card border border-white/5 rounded-xl p-6">
                  <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary">Key Deliverables</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20" />
                <div className="relative bg-card border border-white/10 rounded-2xl p-8 h-full flex flex-col justify-center min-h-[300px]">
                  {/* Decorative Elements */}
                  <div className="space-y-4 opacity-50">
                    <div className="h-2 w-1/3 bg-white/20 rounded-full" />
                    <div className="h-2 w-2/3 bg-white/20 rounded-full" />
                    <div className="h-2 w-1/2 bg-white/20 rounded-full" />
                    <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                  </div>
                  <div className="mt-8 flex justify-end">
                    <div className="h-12 w-12 rounded-full border-2 border-primary/30 flex items-center justify-center">
                      <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                    </div>
                  </div>
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
