import { motion } from "framer-motion";
import { ProjectCard } from "@/components/site/project-card";
import { content } from "@/content/site";

export default function Work() {
  return (
    <div className="container py-12 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Work</h1>
        <p className="text-lg text-muted-foreground max-w-[65ch]">
          Case studies from recent projects. Focus on AI integration, automation, and building tools that reduce operational overhead.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {content.projects.map((project, index) => (
          <ProjectCard key={project.slug} {...project} index={index} />
        ))}
      </div>
    </div>
  );
}
