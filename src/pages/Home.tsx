import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/site/hero";
import { StatCard } from "@/components/site/stat-card";
import { ServiceCard } from "@/components/site/service-card";
import { ProjectCard } from "@/components/site/project-card";
import { Button } from "@/components/ui/button";
import { content } from "@/content/site";

export default function Home() {
  const featuredProjects = content.projects.slice(0, 3);

  return (
    <div className="container py-12 space-y-24">
      <Hero />

      {/* Stats */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {content.stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} index={index} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Services</h2>
          <p className="text-lg text-muted-foreground max-w-[65ch]">
            Focused expertise in AI integration and automation. Building practical solutions that deliver measurable results.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </section>

      {/* Selected Work */}
      <section className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Work</h2>
            <p className="text-lg text-muted-foreground max-w-[65ch]">
              Recent projects demonstrating practical AI integration and automation.
            </p>
          </div>
          <Button variant="ghost" asChild className="hidden md:flex">
            <Link to="/work">
              View all <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} {...project} index={index} />
          ))}
        </div>

        <div className="flex justify-center md:hidden">
          <Button variant="ghost" asChild>
            <Link to="/work">
              View all work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
