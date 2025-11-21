import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Episode {
  id: number;
  title: string;
  date: string;
  duration: string;
  status: "completed" | "in-progress" | "planned";
}

const LearningDetail = () => {
  const { topicId } = useParams();

  const topicData: Record<string, { title: string; description: string; episodes: Episode[] }> = {
    "microcontroller-pcb": {
      title: "Intermediate Microcontroller & PCB Design",
      description: "Exploring STM32 ecosystem from Blue Pill fundamentals to advanced custom board design. Episodes 1-2 completed with detailed implementation, episodes 3-6 planned for future development.",
      episodes: [
        { id: 1, title: "Uncovering STM32F103C8T6 Blue Pill: Core Features and Practical Exploration", date: "2024-09", duration: "2 weeks", status: "completed" },
        { id: 2, title: "STM32 Black Pill Deep Dive: Advanced Features and Performance", date: "2024-10", duration: "3 weeks", status: "completed" },
        { id: 3, title: "STM32 Ecosystem Expansion: Custom Board Design and Prototyping (Planned)", date: "2024-11", duration: "4 weeks", status: "planned" },
        { id: 4, title: "Nordic nRF52 Series Exploration: Bluetooth Low Energy Integration (Planned)", date: "2024-12", duration: "3 weeks", status: "planned" },
        { id: 5, title: "Advanced PCB Design: High-Speed Signals and EMI Mitigation (Planned)", date: "2025-01", duration: "4 weeks", status: "planned" },
        { id: 6, title: "IoT System Integration: Microcontroller, Sensors, and Cloud Connectivity (Planned)", date: "2025-02", duration: "4 weeks", status: "planned" }
      ]
    },
    "anfis-control": {
      title: "MATLAB Nonlinear ANFIS Control",
      description: "Exploring adaptive neuro-fuzzy inference systems for intelligent control",
      episodes: [
        { id: 1, title: "Derivation of Nonlinear Lyapunov Method with Neural Networks", date: "2024-09", duration: "3 weeks", status: "completed" },
        { id: 2, title: "ANFIS Architecture and Training Algorithms", date: "2024-10", duration: "2 weeks", status: "completed" },
        { id: 3, title: "Fuzzy Logic Controller Design", date: "2024-10", duration: "2 weeks", status: "completed" },
        { id: 4, title: "Embedding Algorithm Control to Microcontroller", date: "2024-11", duration: "3 weeks", status: "in-progress" },
        { id: 5, title: "Hardware-in-the-Loop Testing", date: "2024-11", duration: "2 weeks", status: "planned" }
      ]
    },
    "ros-digital-twin": {
      title: "ROS Navigation & Digital Twin",
      description: "Building autonomous navigation systems and virtual simulation environments",
      episodes: [
        { id: 1, title: "ROS 2 Migration and Architecture", date: "2024-08", duration: "3 weeks", status: "completed" },
        { id: 2, title: "SLAM Implementation with Cartographer", date: "2024-09", duration: "3 weeks", status: "completed" },
        { id: 3, title: "Sensor Fusion for Localization", date: "2024-09", duration: "2 weeks", status: "completed" },
        { id: 4, title: "Digital Twin in Gazebo", date: "2024-10", duration: "3 weeks", status: "in-progress" },
        { id: 5, title: "Path Planning with Obstacle Avoidance", date: "2024-11", duration: "2 weeks", status: "in-progress" },
        { id: 6, title: "Cloud-based Fleet Management", date: "2024-12", duration: "3 weeks", status: "planned" }
      ]
    }
  };

  const topic = topicData[topicId || ""];

  if (!topic) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="max-w-4xl mx-auto px-8 py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Topic Not Found</h1>
          <Link to="/learning" className="text-accent hover:underline">
            Return to Learning Journey
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "in-progress": return "bg-accent/10 text-accent border-accent/20";
      case "planned": return "bg-muted text-muted-foreground border-border";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-8 py-32">
        <Link 
          to="/learning" 
          className="inline-flex items-center gap-2 text-accent hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Learning Journey
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {topic.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {topic.description}
          </p>
        </motion.div>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Learning Episodes</h2>
          
          {topic.episodes.map((episode, index) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/learning/${topicId}/episode/${episode.id}`}>
                <Card className="border-navy-border hover:shadow-lg hover:glow-blue transition-all cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <span className="text-accent font-bold">{episode.id}</span>
                        </div>
                        <div>
                          <CardTitle className="text-lg">Episode {episode.id}: {episode.title}</CardTitle>
                          <CardDescription className="flex items-center gap-4 mt-2">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {episode.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {episode.duration}
                            </span>
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={getStatusColor(episode.status)}>
                        {episode.status.replace("-", " ")}
                      </Badge>
                    </div>
                  </CardHeader>
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

export default LearningDetail;
