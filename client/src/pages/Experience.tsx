import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import ExperienceCard from "@/components/ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      company: "PT Syergie Autotek",
      role: "Embedded System Engineer Intern",
      period: "Jun 2025 – Nov 2025",
      description: "Developed embedded systems for automotive applications, focusing on real-time control systems and sensor integration. Implemented CAN bus communication protocols and worked with STM32 microcontrollers.",
      techStack: ["STM32", "C/C++", "ROS", "YOLO", "Python"]
    },
    {
      company: "PT Abimantrana Engineering",
      role: "Project Engineer",
      period: "Aug 2025 – Nov 2025",
      description: "Led engineering projects for industrial automation systems. Designed and implemented control systems for manufacturing processes, including PLC programming and SCADA integration.",
      techStack: ["Project Management", "Projetc Planning", "Notion"]
    },
    {
      company: "Institut Teknologi Bandung",
      role: "Lab Assistant Coordinator",
      period: "Feb 2025 – Jun 2025",
      description: "Coordinated laboratory activities for engineering physics courses. Mentored students in experimental procedures, data analysis, and technical report writing. Maintained laboratory equipment and safety protocols.",
      techStack: ["Python", "Data Analysis", "Lab Equipment"]
    },
    {
      company: "Rumah Amal Salman",
      role: "Full Stack Engineer",
      period: "Jan 2025 – Apr 2025",
      description: "Developed web applications for social impact initiatives. Built responsive front-end interfaces with React and implemented RESTful APIs using Node.js. Managed MongoDB databases and deployed applications on cloud platforms.",
      techStack: ["React", "Node.js", "MySQL", "REST API", "TailwindCSS"]
    },
    {
      company: "Kedaireka.id",
      role: "Engineer Intern",
      period: "Jun 2024 – Jan 2025",
      description: "Contributed to research and development projects in collaboration with industry partners. Worked on IoT solutions for smart manufacturing, including sensor network design and data analytics.",
      techStack: ["IIoT", "Python", "Sensor Networks", "Solidworks", "Nodered"]
    },
    {
      company: "Unit Robotika ITB (URO)",
      role: "Programming and Mechanical Crew",
      period: "2023 – 2025",
      description: "Designed and programmed autonomous robots for competitions. Developed motion control algorithms, computer vision systems, and mechanical structures. Participated in national and international robotics competitions.",
      techStack: ["Solidworks", "C++", "C#", "Motion Control"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="min-h-screen flex flex-col px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h1>
          <p className="text-lg text-muted-foreground">
            Journey through embedded systems, IoT, and engineering innovation
          </p>
        </motion.div>

        <section className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-ml-px origin-top"
          />
          
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              company={exp.company}
              role={exp.role}
              period={exp.period}
              description={exp.description}
              techStack={exp.techStack}
              index={index}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Experience;
