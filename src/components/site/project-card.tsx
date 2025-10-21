import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  outcome: string;
  live: string | null;
  index: number;
}

export function ProjectCard({ slug, title, description, stack, outcome, live, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col hover:border-foreground/20 transition-colors">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 space-y-4">
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground italic">{outcome}</p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button variant="default" size="sm" asChild>
            <Link to={`/work/${slug}`}>Read case study</Link>
          </Button>
          {live && (
            <Button variant="ghost" size="sm" asChild>
              <a href={live} target="_blank" rel="noopener noreferrer">
                Live <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
