import { motion } from "framer-motion";
import { Mail, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { content } from "@/content/site";

export default function Contact() {
  return (
    <div className="container py-12 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get in touch</h1>
        <p className="text-lg text-muted-foreground">
          Interested in working together? Choose the option that works best for you.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <CardTitle>Book a call</CardTitle>
              <CardDescription>Schedule a 30-minute intro call</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <a href={content.links.calendly} target="_blank" rel="noopener noreferrer">
                  View calendar
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <CardTitle>Email</CardTitle>
              <CardDescription>Send a direct message</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="secondary" className="w-full">
                <a href={`mailto:${content.links.email}`}>
                  Send email
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <CardTitle>WhatsApp</CardTitle>
              <CardDescription>Quick chat or questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="secondary" className="w-full">
                <a href={content.links.whatsapp} target="_blank" rel="noopener noreferrer">
                  Open chat
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl space-y-6"
      >
        <h2 className="text-2xl font-bold">Before reaching out</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex gap-3">
            <span className="text-foreground">•</span>
            <span>Brief description of your project or challenge</span>
          </li>
          <li className="flex gap-3">
            <span className="text-foreground">•</span>
            <span>Timeline expectations if you have them</span>
          </li>
          <li className="flex gap-3">
            <span className="text-foreground">•</span>
            <span>Budget range helps understand scope</span>
          </li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Response time: Usually within 24 hours on weekdays.
        </p>
      </motion.div>
    </div>
  );
}
