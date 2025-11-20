import { motion } from "framer-motion";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  techStack: string[];
  index: number;
}

const ExperienceCard = ({ company, role, period, description, techStack, index }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex items-start mb-12 md:mb-16"
    >
      {/* Timeline dot */}
      <div className="absolute left-8 top-6 w-4 h-4 rounded-full bg-accent border-4 border-background z-10 md:left-1/2 md:-ml-2" />
      
      {/* Content - alternating sides on desktop */}
      <div className={`w-full pl-20 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:pl-0 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
        <article className="rounded-xl bg-card border border-navy-border p-6 shadow-md hover:shadow-lg hover:glow-teal transition-all">
          <div className={`space-y-2 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
            <h3 className="text-xl font-semibold text-foreground">{role}</h3>
            <p className="text-accent font-medium">{company}</p>
            <p className="text-sm text-muted-foreground">{period}</p>
            <p className={`text-sm text-muted-foreground mt-4 leading-relaxed ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              {description}
            </p>
            <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
              {techStack.map((tech, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 rounded-full bg-muted text-accent text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
