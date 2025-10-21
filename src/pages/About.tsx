import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { content } from "@/content/site";

export default function About() {
  return (
    <div className="container py-12 space-y-16">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr] items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="sticky top-24"
        >
          <div className="relative w-full aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden ring-1 ring-border/40 bg-muted">
            <div className="w-full h-full flex items-center justify-center text-8xl font-bold text-muted-foreground/20">
              {content.owner_name.split(" ").map(n => n[0]).join("")}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{content.owner_name}</h1>
            <p className="text-xl text-muted-foreground">{content.alias}</p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
            <p className="text-lg leading-relaxed">{content.summary}</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold tracking-tight">Values</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {content.values.map((value, index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-3 p-4 rounded-lg border border-border/40"
            >
              <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
              <p className="text-base">{value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold tracking-tight">Approach</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {content.approach.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-3">
                    <span className="text-2xl font-mono text-muted-foreground">{index + 1}</span>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
        <div className="flex flex-wrap gap-3">
          {content.certificates.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Badge variant="outline" className="py-2 px-4 text-sm">
                {cert.name}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
