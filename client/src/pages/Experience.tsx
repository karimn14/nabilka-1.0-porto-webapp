import { motion } from "framer-motion";
import Footer from '../components/Footer';
import { Badge } from "@/components/ui/badge";

interface ExperienceRole {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  type: string;
  techStack: string[];
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
      "Collaborated with cross-functional teams on system integration",
    ],
    techStack: ["C++", "Python", "ROS", "Pixhawk"],
  },
  {
    company: "PT Abimantrana Engineering",
    position: "Project Engineer",
    period: "Aug 2025 – Nov 2025",
    type: "Contract",
    responsibilities: [
      "Led engineering projects from conception to delivery",
      "Designed and tested industrial automation systems",
      "Coordinated with clients and stakeholders",
    ],
    techStack: ["Project Management", "Project Planning", "Notion"],
  },
  {
    company: "Institut Teknologi Bandung",
    position: "Lab Assistant Coordinator",
    period: "Feb 2025 – Jun 2025",
    type: "Academic",
    responsibilities: [
      "Coordinated laboratory activities for Engineering Physics department",
      "Mentored students in experimental procedures and data analysis",
      "Maintained and calibrated laboratory equipment",
    ],
    techStack: ["ESP32", "Excel", "Python", "Data Analysis"],
  },
  {
    company: "Rumah Amal Salman",
    position: "Full Stack Engineer",
    period: "Jan 2025 – Apr 2025",
    type: "Contract",
    responsibilities: [
      "Developed full-stack web applications for non-profit organization",
      "Implemented database design and API architecture",
      "Ensured responsive design and accessibility standards",
    ],
    techStack: ["Python", "Node.js", "MySQL", "TailwindCSS"],
  },
  {
    company: "Kedaireka.id",
    position: "Engineer Intern",
    period: "Jun 2024 – Jan 2025",
    type: "Internship",
    responsibilities: [
      "Participated in R&D projects for industrial applications",
      "Developed prototypes and conducted feasibility studies",
      "Documented technical specifications and project progress",
    ],
    techStack: ["SolidWorks", "Python", "Nodered", "IIoT"],
  },
  {
    company: "Unit Robotika ITB (URO)",
    position: "Programming and Mechanical Crew",
    period: "2023 – 2025",
    type: "Organization",
    responsibilities: [
      "Programmed autonomous robot systems for competitions",
      "Designed mechanical components using CAD software",
      "Collaborated on interdisciplinary robotics projects",
    ],
    techStack: ["C#", "C++", "Solidworks", "Python"],
  },
];

export default function ExperienceTimeline() {
  return (
    <main className="min-h-screen flex flex-col">
    <section
      id="experience"
      className="relative bg-[#0A192F] text-[#E6F1FF] pt-20 pb-2 px-4"
    >
      <h2 className="text-4xl font-bold text-center mb-4">
      Professional Experience
      </h2>
      <p className="text-center text-gray-400 mb-12">
      Journey through embedded systems, IoT, and engineering innovation
      </p>
      <div className="relative max-w-6xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 w-1 h-full bg-[#1E3A8A] transform -translate-x-1/2"></div>

      {/* Timeline items */}
      <div className="space-y-16">
        {experiences.map((exp, index) => (
        <div
          key={index}
          className={`relative flex items-center w-full ${
          index % 2 === 0
            ? "justify-start md:justify-between"
            : "justify-end md:justify-between"
          }`}
        >
          {index % 2 !== 0 && <div className="hidden md:block w-5/12"></div>}
          <div
          className={`z-10 w-8 h-8 bg-[#64FFDA] rounded-full border-4 border-[#0A192F] absolute left-1/2 transform -translate-x-1/2 ${
            "opacity-0 sm:opacity-100"
          }`}
          ></div>
          <div className="w-full md:w-5/12 bg-[#112240] border border-[#1E3A8A] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">{exp.position}</h3>
          <p className="text-[#64FFDA] font-medium">{exp.company}</p>
          <p className="text-sm text-gray-400">{exp.period}</p>
          <ul className="mt-3 text-gray-300 leading-relaxed space-y-2">
            {exp.responsibilities.map((resp, idx) => (
            <li key={idx}>{resp}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-auto pt-3">
                    {exp.techStack.map((tech, idx) => (
                      <Badge
                        key={idx}
                        className="text-xs bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
          </div>
          {index % 2 === 0 && <div className="hidden md:block w-5/12"></div>}
        </div>
        ))}
      </div>
      </div>
    </section>
    <Footer />
    </main>
  );
}
