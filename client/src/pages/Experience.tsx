import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ExperienceRole {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  type: string;
}

const experiences: ExperienceRole[] = [
  {
    company: "PT Syergie Autotek",
    position: "Embedded System Engineer Intern",
    period: "Jun 2025 – Nov 2025",
    type: "Internship",
    responsibilities: [
      "Developed embedded systems for automotive applications",
      "Implemented real-time control algorithms on microcontrollers",
      "Collaborated with cross-functional teams on system integration"
    ]
  },
  {
    company: "PT Abimantrana Engineering",
    position: "Project Engineer",
    period: "Aug 2025 – Nov 2025",
    type: "Contract",
    responsibilities: [
      "Led engineering projects from conception to delivery",
      "Designed and tested industrial automation systems",
      "Coordinated with clients and stakeholders"
    ]
  },
  {
    company: "Institut Teknologi Bandung",
    position: "Lab Assistant Coordinator",
    period: "Feb 2025 – Jun 2025",
    type: "Academic",
    responsibilities: [
      "Coordinated laboratory activities for Engineering Physics department",
      "Mentored students in experimental procedures and data analysis",
      "Maintained and calibrated laboratory equipment"
    ]
  },
  {
    company: "Rumah Amal Salman",
    position: "Full Stack Engineer",
    period: "Jan 2025 – Apr 2025",
    type: "Contract",
    responsibilities: [
      "Developed full-stack web applications for non-profit organization",
      "Implemented database design and API architecture",
      "Ensured responsive design and accessibility standards"
    ]
  },
  {
    company: "Kedaireka.id",
    position: "Engineer Intern",
    period: "Jun 2024 – Jan 2025",
    type: "Internship",
    responsibilities: [
      "Participated in R&D projects for industrial applications",
      "Developed prototypes and conducted feasibility studies",
      "Documented technical specifications and project progress"
    ]
  },
  {
    company: "Unit Robotika ITB (URO)",
    position: "Programming and Mechanical Crew",
    period: "2023 – 2025",
    type: "Organization",
    responsibilities: [
      "Programmed autonomous robot systems for competitions",
      "Designed mechanical components using CAD software",
      "Collaborated on interdisciplinary robotics projects"
    ]
  }
];

export default function Experience() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground" data-testid="text-page-title">
            Professional Experience
          </h1>
          <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through embedded systems, IoT, and engineering innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
              className="hover-elevate transition-all duration-300 border-card-border h-full"
              data-testid={`card-experience-${index}`}
            >
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-xl text-foreground leading-tight">
                    {exp.company}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="shrink-0 bg-accent/20 text-accent border-accent/30"
                  >
                    {exp.type}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-accent font-medium">{exp.position}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-1 shrink-0">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
