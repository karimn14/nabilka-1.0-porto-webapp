import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChevronDown, ChevronUp, BookOpen, Code, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Footer from '../components/Footer';

interface LearningTopic {
  title: string;
  subtitle: string;
  icon: typeof BookOpen;
  description: string;
  topics: string[];
  resources: { title: string; type: string }[];
}

const learningTopics: LearningTopic[] = [
  {
    title: "Intermediate Microcontroller & PCB Design",
    subtitle: "Hardware Development Mastery",
    icon: Code,
    description: "Advanced techniques in embedded hardware design, from schematic capture to manufacturing-ready PCB layouts with focus on signal integrity and power management.",
    topics: [
      "STM32/ESP32 advanced peripheral configuration",
      "Multi-layer PCB design with impedance control",
      "EMI/EMC considerations and mitigation strategies",
      "Power supply design and regulation circuits",
      "High-speed digital signal routing techniques",
      "Component selection and BOM optimization"
    ],
    resources: [
      { title: "Altium Designer PCB Workshop", type: "Course" },
      { title: "STM32 HAL Programming Guide", type: "Documentation" },
      { title: "Signal Integrity Simplified", type: "Book" }
    ]
  },
  {
    title: "MATLAB Nonlinear ANFIS Control",
    subtitle: "Adaptive Neuro-Fuzzy Systems",
    icon: Cog,
    description: "Exploring adaptive neuro-fuzzy inference systems for intelligent control of complex nonlinear systems with applications in robotics and industrial automation.",
    topics: [
      "ANFIS architecture and learning algorithms",
      "Fuzzy logic controller design and tuning",
      "Nonlinear system identification",
      "Real-time control implementation",
      "Hybrid intelligent control strategies",
      "Performance analysis and optimization"
    ],
    resources: [
      { title: "MATLAB Fuzzy Logic Toolbox", type: "Software" },
      { title: "Neuro-Fuzzy Systems Course", type: "Course" },
      { title: "Advanced Control Systems Lab", type: "Practical" }
    ]
  },
  {
    title: "ROS Navigation & Digital Twin",
    subtitle: "Autonomous Systems & Simulation",
    icon: BookOpen,
    description: "Mastering Robot Operating System for autonomous navigation and creating digital twin environments for testing and validation of robotic systems.",
    topics: [
      "ROS2 navigation stack configuration",
      "SLAM algorithms and sensor fusion",
      "Path planning and obstacle avoidance",
      "Gazebo simulation environment setup",
      "Digital twin development workflow",
      "Hardware-in-the-loop testing strategies"
    ],
    resources: [
      { title: "ROS2 Navigation Tutorial", type: "Tutorial" },
      { title: "Gazebo Robotics Simulation", type: "Software" },
      { title: "Digital Twin Implementation", type: "Project" }
    ]
  }
];

export default function Learning() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <div className="max-w-6xl mx-auto pt-20">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground" data-testid="text-page-title">
            Learning Journey
          </h1>
          <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous growth in embedded systems, control theory, and robotics
          </p>
        </motion.div>

        <div className="space-y-6">
          {learningTopics.map((topic, index) => {
            const Icon = topic.icon;
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="hover-elevate transition-all duration-300 border-card-border"
                  data-testid={`card-learning-${index}`}
                >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-3 rounded-lg bg-accent/20 border border-accent/30 shrink-0">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-foreground mb-1">
                          {topic.title}
                        </CardTitle>
                        <CardDescription className="text-accent font-medium">
                          {topic.subtitle}
                        </CardDescription>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleExpand(index)}
                      className="shrink-0"
                      data-testid={`button-expand-${index}`}
                    >
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {topic.description}
                  </p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6 pt-4 border-t border-border"
                      >
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">
                          Key Topics
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {topic.topics.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-accent mt-1 shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">
                          Learning Resources
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {topic.resources.map((resource, idx) => (
                            <div
                              key={idx}
                              className="px-3 py-2 rounded-md bg-primary/10 border border-primary/30 text-sm"
                            >
                              <span className="text-foreground font-medium">{resource.title}</span>
                              <span className="text-muted-foreground"> • {resource.type}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    <Footer />
    </main>
  );
}
