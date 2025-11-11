import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { motion } from "framer-motion";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest('POST', '/api/contact', formData);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen pt-24 pb-16 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground" data-testid="text-page-title">
            Get In Touch
          </h1>
          <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="lg:col-span-2">
            <Card className="border-card-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll respond as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="bg-input border-border text-foreground"
                      data-testid="input-name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="bg-input border-border text-foreground"
                      data-testid="input-email"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project or inquiry..."
                      rows={6}
                      className="bg-input border-border text-foreground resize-none"
                      data-testid="input-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full gap-2 bg-primary text-primary-foreground hover-elevate active-elevate-2"
                    data-testid="button-submit"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-card-border">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="https://linkedin.com/in/nabilkarim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-card/50 hover-elevate transition-all border border-card-border"
                  data-testid="link-linkedin-card"
                >
                  <Linkedin className="h-5 w-5 text-accent shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">LinkedIn</p>
                    <p className="text-xs text-muted-foreground">Professional Network</p>
                  </div>
                </a>

                <a
                  href="https://github.com/nabilkarim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-card/50 hover-elevate transition-all border border-card-border"
                  data-testid="link-github-card"
                >
                  <Github className="h-5 w-5 text-accent shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">GitHub</p>
                    <p className="text-xs text-muted-foreground">Code & Projects</p>
                  </div>
                </a>

                <a
                  href="mailto:nabil.karim@example.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-card/50 hover-elevate transition-all border border-card-border"
                  data-testid="link-email-card"
                >
                  <Mail className="h-5 w-5 text-accent shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-xs text-muted-foreground break-all">nabil.karim@example.com</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            © 2025 Nabil Karim Abdurrahman. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
