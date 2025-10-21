import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { content } from "@/content/site";

export default function WorkDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = content.projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (!project) {
      navigate("/work");
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  return (
    <div className="container py-12 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/work">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to work
          </Link>
        </Button>

        <div className="space-y-6 max-w-3xl">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{project.title}</h1>

          <p className="text-xl text-muted-foreground">{project.description}</p>

          {project.live && (
            <Button asChild>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                View live project <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="prose prose-neutral dark:prose-invert max-w-3xl"
      >
        <h2>Challenge</h2>
        <p>
          The client needed to process hundreds of documents daily, extracting structured data and routing them
          to appropriate teams. Manual processing was slow, error-prone, and didn't scale.
        </p>

        <h2>Solution</h2>
        <p>
          Built an automated pipeline using GPT-4 for document understanding and classification. System extracts key
          information, validates against business rules, and routes documents automatically. Fallback to human review
          when confidence is low.
        </p>

        <h2>Implementation</h2>
        <p>
          Python backend with FastAPI. PostgreSQL for storage. Document preprocessing with PDFPlumber and OCR for
          scanned documents. GPT-4 for extraction and classification. React dashboard for monitoring and review queue.
        </p>

        <h2>Results</h2>
        <ul>
          <li>Processing time reduced from 15 minutes to under 2 minutes per document</li>
          <li>94% accuracy rate with automatic validation</li>
          <li>Human review needed for only 8% of documents</li>
          <li>System handles 500+ documents daily without issues</li>
        </ul>

        <h2>Key learnings</h2>
        <p>
          Prompt engineering was critical. Started with generic prompts, refined based on actual documents and
          failure cases. Added explicit validation rules to catch edge cases. Human-in-the-loop for continuous
          improvement proved valuable.
        </p>

        <div className="not-prose pt-8">
          <p className="text-lg font-semibold text-foreground italic">"{project.outcome}"</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="pt-8 border-t"
      >
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Interested in similar work?
          </p>
          <Button asChild>
            <a href={content.links.calendly} target="_blank" rel="noopener noreferrer">
              Book intro call
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
