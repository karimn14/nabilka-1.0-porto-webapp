import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const Learning = () => {
  const learningTopics = [
    {
      id: "microcontroller-pcb",
      title: "Intermediate Microcontroller & PCB Design",
      summary: "Advancing skills in embedded hardware design and microcontroller programming",
      episodeCount: 6,
      duration: "3 months",
      status: "In Progress"
    },
    {
      id: "anfis-control",
      title: "MATLAB Nonlinear ANFIS Control",
      summary: "Exploring adaptive neuro-fuzzy inference systems for intelligent control",
      episodeCount: 5,
      duration: "2 months",
      status: "In Progress"
    },
    {
      id: "ros-digital-twin",
      title: "ROS Navigation & Digital Twin",
      summary: "Building autonomous navigation systems and virtual simulation environments",
      episodeCount: 6,
      duration: "4 months",
      status: "Active"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Learning Journey
          </h1>
          <p className="text-lg text-muted-foreground">
            Continuous growth in embedded systems, control theory, and robotics
          </p>
        </motion.div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningTopics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/learning/${topic.id}`}>
                <Card className="h-full border-navy-border hover:shadow-lg hover:glow-teal transition-all cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <BookOpen className="w-8 h-8 text-accent" />
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        {topic.status}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{topic.title}</CardTitle>
                    <CardDescription>{topic.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Episodes:</span>
                        <span className="font-medium text-foreground">{topic.episodeCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium text-foreground">{topic.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Learning;
