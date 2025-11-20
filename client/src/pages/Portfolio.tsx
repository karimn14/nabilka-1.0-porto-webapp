import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import Footer from '../components/Footer';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  category: string;
  image: string; // Added image property
}

const projects: Project[] = [
  {
    title: "Autonomous Palm Pollination Drone",
    description: "Developed an autonomous drone system for palm tree pollination using computer vision and embedded systems. Integrated Jetson Nano for AI processing, Pixhawk for flight control, STM32 for sensor management, ROS for system orchestration, and YOLO for real-time object detection.",
    techStack: ["Jetson Nano", "Pixhawk", "STM32", "ROS", "YOLO", "Python", "C++"],
    category: "Robotics & AI",
    image: "images/autonomous_drone.png", // Image placeholder
  },
  {
    title: "Custom STM32 PCB Design",
    description: "Designed and fabricated a 2-layer PCB featuring STM32 microcontroller with integrated power management (AMS1117 LDO), USB communication interface, and SWD programming connector. Included protection circuits and optimized layout for EMI reduction.",
    techStack: ["STM32", "Kicad", "AMS1117", "USB", "SWD", "Power Design"],
    category: "Hardware Design",
    image: "images/stm32_pcb.png", // Image placeholder
  },
  {
    title: "IIoT Capstone Project",
    description: "Built an Industrial Internet of Things platform for real-time monitoring and control. Implemented MQTT protocol for device communication, Node-RED for workflow automation, Next.js frontend for data visualization, and MongoDB for time-series data storage.",
    techStack: ["Node-RED", "MQTT", "Next.js", "MongoDB", "IoT", "Real-time"],
    category: "Industrial IoT",
    image: "images/iiot_capstone.png", // Image placeholder
  },
  {
    title: "Intelligent EV Charging Station",
    description: "Designed a smart electric vehicle charging station with predictive load management. Built with React frontend, FastAPI backend, and XGBoost machine learning model for demand forecasting and optimal charging schedule recommendations.",
    techStack: ["React", "FastAPI", "XGBoost", "Python", "ML", "Energy"],
    category: "Smart Systems",
    image: "images/ev_charging_station.png", // Image placeholder
  },
  {
    title: "PID Temperature Control Box",
    description: "Implemented a dual-core PID temperature controller using ESP32 RTOS. One core handles real-time PID calculations while the other manages UI and data logging. Features auto-tuning, safety limits, and wireless monitoring capabilities.",
    techStack: ["ESP32", "PID Control", "C/C++", "FreeRTOS", "Embedded"],
    category: "Control Systems",
    image: "images/pid_temperature_control.png", // Image placeholder
  }
];

export default function Portfolio() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="max-w-6xl mx-auto px-8 py-32">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground" data-testid="text-page-title">
            Engineering Portfolio
          </h1>
          <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing embedded systems, robotics, and intelligent control projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
              className="hover-elevate transition-all duration-300 border-card-border flex flex-col h-full"
              data-testid={`card-project-${index}`}
            >
              <CardHeader>
                <div className="h-48 rounded-md bg-muted flex items-center justify-center mb-4 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} image`}
                    className="absolute inset-0 w-full h-full object-cover rounded-md"
                  />
                </div>
                <Badge variant="secondary" className="w-fit mb-2 bg-accent/20 text-accent border-accent/30">
                  {project.category}
                </Badge>
                <CardTitle className="text-lg text-foreground leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech, idx) => (
                    <Badge
                      key={idx}
                      className="text-xs bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="docs/Engineering_Portolio_Nabil.pdf" download>
            <Button
              size="lg"
              className="gap-2 bg-primary text-primary-foreground hover-elevate active-elevate-2"
              data-testid="button-download-portfolio"
            >
              <Download className="h-5 w-5" />
              Download Full Portfolio (PDF)
            </Button>
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
