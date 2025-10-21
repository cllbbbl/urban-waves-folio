import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ServiceCard } from "@/components/site/service-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { content } from "@/content/site";

export default function Services() {
  return (
    <div className="container py-12 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Services</h1>
        <p className="text-lg text-muted-foreground max-w-[65ch]">
          Specialized in AI integration and automation. Building systems that work reliably and scale efficiently.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {content.services.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-2xl">How I work</CardTitle>
            <CardDescription className="text-base">
              Clear process. Regular updates. Focus on outcomes.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Discovery
                </h3>
                <p className="text-sm text-muted-foreground">
                  Understand your workflow, identify bottlenecks, define clear success metrics.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Build
                </h3>
                <p className="text-sm text-muted-foreground">
                  Start with minimum viable solution. Test early. Iterate based on real usage.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Deploy
                </h3>
                <p className="text-sm text-muted-foreground">
                  Gradual rollout. Monitor performance. Address issues quickly.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Support
                </h3>
                <p className="text-sm text-muted-foreground">
                  Documentation provided. Available for questions. Optional ongoing maintenance.
                </p>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <p className="text-sm text-muted-foreground">
                Timeline varies by scope. Most projects: 2-8 weeks from start to deployment.
                Fixed-price available for well-defined projects.
              </p>
              <Button size="lg" asChild>
                <a href={content.links.calendly} target="_blank" rel="noopener noreferrer">
                  Book intro call
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
