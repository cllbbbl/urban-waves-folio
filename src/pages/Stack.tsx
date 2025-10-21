import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { content } from "@/content/site";

export default function Stack() {
  return (
    <div className="container py-12 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tech Stack</h1>
        <p className="text-lg text-muted-foreground max-w-[65ch]">
          Tools and technologies I use to build reliable systems. Focus on proven, maintainable solutions.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(content.stack).map(([category, technologies], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="prose prose-neutral dark:prose-invert max-w-none"
      >
        <h2 className="text-2xl font-bold">How I choose tools</h2>
        <p className="text-muted-foreground">
          Technology choices depend on project requirements. Priority is always maintainability and reliability.
          Use proven tools with good documentation. Avoid unnecessary complexity.
        </p>
        <p className="text-muted-foreground">
          For AI work, I primarily use OpenAI and Anthropic APIs. LangChain for orchestration.
          Vector databases when semantic search is needed. Python and TypeScript for implementation.
        </p>
      </motion.div>
    </div>
  );
}
