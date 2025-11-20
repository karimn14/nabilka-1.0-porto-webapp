import { motion } from "framer-motion";
import { useParams } from "wouter";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const LearningDetail = () => {
  const { topicId } = useParams();

  const topicData: Record<string, { title: string; description: string; lastUpdateDate: string; episodes: { id: number; title: string; date: string; duration: string; status: string; lastUpdateDate: string; }[] }> = {
    "microcontroller-pcb": {
      title: "Intermediate Microcontroller & PCB Design",
      description: "Advancing skills in embedded hardware design and microcontroller programming",
      lastUpdateDate: "2024-12-15",
      episodes: [
        { id: 1, title: "Advanced STM32 Peripheral Programming", date: "2024-09", duration: "2 weeks", status: "completed", lastUpdateDate: "2024-09-15", referenceType: "Datasheet & Manual" },
        { id: 2, title: "DMA and Timer Configuration", date: "2024-09", duration: "2 weeks", status: "completed", lastUpdateDate: "2024-09-30", referenceType: "Technical Documentation" },
        { id: 3, title: "4-Layer PCB Design Fundamentals", date: "2024-10", duration: "3 weeks", status: "completed", lastUpdateDate: "2024-10-20", referenceType: "Online Course & Articles" },
        { id: 4, title: "Signal Integrity & Impedance Control", date: "2024-10", duration: "2 weeks", status: "in-progress", lastUpdateDate: "2024-11-05", referenceType: "Research Papers" },
        { id: 5, title: "RTOS Implementation Patterns", date: "2024-11", duration: "3 weeks", status: "in-progress", lastUpdateDate: "2024-11-25", referenceType: "Book & Documentation" },
        { id: 6, title: "Bootloader Development", date: "2024-12", duration: "2 weeks", status: "planned", lastUpdateDate: "2024-12-15", referenceType: "Technical Articles" }
      ]
    },
    "anfis-control": {
      title: "MATLAB Nonlinear ANFIS Control",
      description: "Exploring adaptive neuro-fuzzy inference systems for intelligent control",
      lastUpdateDate: "2024-11-20",
      episodes: [
        { id: 1, title: "Derivation of Nonlinear Lyapunov Method with Neural Networks", date: "2024-09", duration: "3 weeks", status: "completed", lastUpdateDate: "2024-09-25", referenceType: "Research Paper" },
        { id: 2, title: "ANFIS Architecture and Training Algorithms", date: "2024-10", duration: "2 weeks", status: "completed", lastUpdateDate: "2024-10-10", referenceType: "Academic Journal" },
        { id: 3, title: "Fuzzy Logic Controller Design", date: "2024-10", duration: "2 weeks", status: "completed", lastUpdateDate: "2024-10-25", referenceType: "Book & MATLAB Documentation" },
        { id: 4, title: "Embedding Algorithm Control to Microcontroller", date: "2024-11", duration: "3 weeks", status: "in-progress", lastUpdateDate: "2024-11-20", referenceType: "Technical Documentation" },
        { id: 5, title: "Hardware-in-the-Loop Testing", date: "2024-11", duration: "2 weeks", status: "planned", lastUpdateDate: "2024-11-20", referenceType: "Research Articles" }
      ]
    },
    "ros-digital-twin": {
      title: "ROS Navigation & Digital Twin",
      description: "Building autonomous navigation systems and virtual simulation environments",
      lastUpdateDate: "2024-12-10",
      episodes: [
        { id: 1, title: "ROS 2 Migration and Architecture", date: "2024-08", duration: "3 weeks", status: "completed", lastUpdateDate: "2024-08-25", referenceType: "ROS Documentation" },
        { id: 2, title: "SLAM Implementation with Cartographer", date: "2024-09", duration: "3 weeks", status: "completed", lastUpdateDate: "2024-09-20", referenceType: "Research Papers & Tutorials" },
        { id: 3, title: "Sensor Fusion for Localization", date: "2024-09", duration: "2 weeks", status: "completed", lastUpdateDate: "2024-10-05", referenceType: "Academic Articles" },
        { id: 4, title: "Digital Twin in Gazebo", date: "2024-10", duration: "3 weeks", status: "in-progress", lastUpdateDate: "2024-11-15", referenceType: "Gazebo Documentation" },
        { id: 5, title: "Path Planning with Obstacle Avoidance", date: "2024-11", duration: "2 weeks", status: "in-progress", lastUpdateDate: "2024-12-01", referenceType: "Research Papers" },
        { id: 6, title: "Cloud-based Fleet Management", date: "2024-12", duration: "3 weeks", status: "planned", lastUpdateDate: "2024-12-10", referenceType: "Technical Articles" }
      ]
    },
    "design-mccs": {
      title: "Design MCCS (Mobile Carbon Capture System) for Motorcycle",
      description: "Developing a mobile carbon capture system integrated with motorcycle design for environmental sustainability",
      lastUpdateDate: "2024-11-25",
      episodes: [
        { id: 1, title: "MCCS System Architecture and Requirements Analysis", date: "2024-10", duration: "1 week", status: "completed", lastUpdateDate: "2024-10-08", referenceType: "Research Papers" },
        { id: 2, title: "Carbon Capture Chemistry and Sorbent Selection", date: "2024-10", duration: "2 weeks", status: "completed", lastUpdateDate: "2024-10-22", referenceType: "Academic Articles" },
        { id: 3, title: "Mechanical Integration and Thermal Management", date: "2024-11", duration: "2 weeks", status: "completed", lastUpdateDate: "2024-11-10", referenceType: "Technical Documentation" },
        { id: 4, title: "Control System and Performance Validation", date: "2024-11", duration: "1 week", status: "completed", lastUpdateDate: "2024-11-25", referenceType: "Research Articles" }
      ]
    },
    "simple-30a-esc": {
      title: "Simple 30A ESC Brushless Motor PCB Design",
      description: "Designing a compact and efficient 30A Electronic Speed Controller for brushless motors",
      lastUpdateDate: "2024-11-15",
      episodes: [
        { id: 1, title: "30A ESC Architecture and Component Selection", date: "2024-10", duration: "1 week", status: "completed", lastUpdateDate: "2024-10-08", referenceType: "Technical Documentation" },
        { id: 2, title: "Sensorless BLDC Motor Control Algorithm", date: "2024-10", duration: "2 weeks", status: "completed", lastUpdateDate: "2024-10-22", referenceType: "Research Papers" },
        { id: 3, title: "Protection Circuits and System Integration", date: "2024-11", duration: "1 week", status: "completed", lastUpdateDate: "2024-11-15", referenceType: "Datasheet & Articles" }
      ]
    }
  };

  const topic = topicData[topicId || ""];

  if (!topic) {
    return (
      <div className="min-h-screen bg-background">

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
                            <span className="flex items-center gap-1">
                              Last Update: {episode.lastUpdateDate}
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
