import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Waves } from "@/components/ui/waves-background";
import { content } from "@/content/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-8 md:p-16 min-h-[500px]">
      <div className="absolute inset-0">
        <Waves
          lineColor="rgba(255, 255, 255, 0.08)"
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>

      <div className="relative z-10 grid gap-12 md:grid-cols-2 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{content.owner_name}</h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">{content.role}</p>
          <p className="text-base md:text-lg max-w-[52ch] leading-relaxed">{content.tagline}</p>
          
          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild size="lg">
              <a href={content.links.calendly} target="_blank" rel="noopener noreferrer">
                Book intro call
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href={`mailto:${content.links.email}`}>Email me</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="justify-self-center md:justify-self-end"
        >
          <div className="relative size-48 md:size-64 rounded-full overflow-hidden ring-1 ring-border/40 bg-muted">
            <div className="w-full h-full flex items-center justify-center text-6xl md:text-8xl font-bold text-muted-foreground/20">
              {content.owner_name.split(" ").map(n => n[0]).join("")}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
