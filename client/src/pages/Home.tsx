import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code, Cpu, Zap, Target, ChevronDown, Award, Trophy, ExternalLink, Calendar, CheckCircle, BookOpen } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Footer from '../components/Footer';

const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const honorsRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);
  const volunteeringRef = useRef<HTMLDivElement>(null);
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const isHonorsInView = useInView(honorsRef, { once: true, margin: "-100px" });
  const isCertsInView = useInView(certsRef, { once: true, margin: "-100px" });
  const isVolunteeringInView = useInView(volunteeringRef, { once: true, margin: "-100px" });

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-8 py-32 pt-40 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-accent rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-accent rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-accent rounded-full"></div>
        </div>

        <motion.div
          className="max-w-4xl w-full text-center space-y-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight" data-testid="text-hero-headline">
                Engineering Physics | Embedded Systems | IIoT | Control Systems
              </h1>
            </motion.div>
            <motion.div
              className="h-1 w-32 bg-accent mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>
          </div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            data-testid="text-bio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Engineering Physics Student at <span className="text-accent font-medium">Bandung Institute of Technology</span> | Embedded System and Mechatronics Enthusiast
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link href="/portfolio">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover-elevate active-elevate-2"
                data-testid="button-view-portfolio"
              >
                View Portfolio
              </Button>
            </Link>
            <a href="docs/CV_Nabil_Karim.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-accent text-accent hover-elevate active-elevate-2"
                data-testid="button-download-cv"
              >
                Download CV
              </Button>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute pt-6 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={scrollToAbout}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <span className="text-sm">Learn More</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section ref={aboutRef} className="py-20 px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
            initial={{ opacity: 0, y: 40 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Image */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isAboutInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent/20 shadow-lg">
                  <img
                    src="/images/profile-placeholder.jpg"
                    alt="Nabil Karim Abdurrahman"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>

            {/* About Text */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  About Me
                </h2>
                <div className="h-1 w-16 bg-accent rounded-full"></div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Driven by a passion for creating useful and impactful solutions. I'm a Physics Engineering undergrad exploring embedded systems and mechatronics. I thrive in R&D environments and enjoy taking on freelance projects that challenge me to learn and invent.
                </p>
              </div>

              {/* Skills Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Code className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Embedded C/C++</div>
                    <div className="text-sm text-muted-foreground">STM32, AVR, ESP32</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Control Systems</div>
                    <div className="text-sm text-muted-foreground">PID, ANFIS, MATLAB</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">IoT & Robotics</div>
                    <div className="text-sm text-muted-foreground">ROS, MQTT, Sensors</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">PCB Design</div>
                    <div className="text-sm text-muted-foreground">KiCad, Altium</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Honors & Awards Section */}
      <section ref={honorsRef} className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHonorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Honors & Awards
            </h2>
            <div className="h-1 w-16 bg-accent rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Award 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHonorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="p-6 rounded-lg border border-navy-border bg-card hover:shadow-lg hover:border-accent/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Sociopreneurship Innovation Grant Program PFMuda</h3>
                    <p className="text-sm text-muted-foreground mb-2">Pertamina Foundation</p>
                    <div className="flex items-center gap-1 text-xs text-accent">
                      <Calendar className="w-3 h-3" />
                      March 2025
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Award 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHonorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="p-6 rounded-lg border border-navy-border bg-card hover:shadow-lg hover:border-accent/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">1st Place Winner – Scientific Writing Competition (LKTI)</h3>
                    <p className="text-sm text-muted-foreground mb-2">UPN Veteran Jawa Timur</p>
                    <div className="flex items-center gap-1 text-xs text-accent">
                      <Calendar className="w-3 h-3" />
                      September 2024
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Award 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHonorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="p-6 rounded-lg border border-navy-border bg-card hover:shadow-lg hover:border-accent/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Institut Teknologi Bandung</h3>
                    <p className="text-sm text-muted-foreground mb-2">Engineering Excellence Recognition</p>
                    <div className="flex items-center gap-1 text-xs text-accent">
                      <Calendar className="w-3 h-3" />
                      Ongoing
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* News Mentions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHonorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-6 rounded-lg border border-navy-border bg-card"
          >
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-accent" />
              Featured in News
            </h3>
            <div className="space-y-3">
              <a
                href="https://itb.ac.id/berita/dari-mata-kuliah-ke-inovasi-tim-bioet-pamerkan-bioetilen-generator-dan-raih-juara-1-gsic-2025/62239"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-md border border-accent/20 hover:border-accent/50 hover:bg-accent/5 transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium text-foreground group-hover:text-accent transition-colors">
                      Dari Mata Kuliah ke Inovasi: Tim BIOET Pamerkan Bioetilen Generator dan Raih Juara 1 GSIC 2025
                    </div>
                    <div className="text-sm text-muted-foreground">Institut Teknologi Bandung</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 ml-2" />
                </div>
              </a>
              <a
                href="https://rumahamal.org/news/pengmas_itb_ajak_rumah_amal_untuk_berdayakan_komunitas_disabilitas"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-md border border-accent/20 hover:border-accent/50 hover:bg-accent/5 transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium text-foreground group-hover:text-accent transition-colors">
                      Pengmas ITB Ajak Rumah Amal untuk Berdayakan Komunitas Disabilitas
                    </div>
                    <div className="text-sm text-muted-foreground">Rumah Amal Foundation</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 ml-2" />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section ref={certsRef} className="py-20 px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isCertsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certifications
            </h2>
            <div className="h-1 w-16 bg-accent rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Intermediate Deep Learning with PyTorch", issuer: "DataCamp", date: "Nov 2025", skills: ["PyTorch", "Neural Networks", "Deep Learning"] },
              { title: "Object Recognition Web App with FastAPI & React", issuer: "Skillshare", date: "Mar 2025", skills: ["FastAPI", "React", "Computer Vision"] },
              { title: "Certified SOLIDWORKS Associate", issuer: "Dassault Systèmes", date: "Nov 2023", skills: ["CAD", "SOLIDWORKS", "3D Modeling"] },
              { title: "Google Data Analytics Certificate", issuer: "Coursera", date: "Jun 2023", skills: ["Data Analysis", "SQL", "Tableau"] },
              { title: "Foundation of Project Management", issuer: "Google", date: "Sep 2023", skills: ["Project Management", "Agile", "Planning"] },
              { title: "MATLAB Onramp", issuer: "MATLAB Coding", date: "Dec 2023", skills: ["MATLAB", "Programming", "Data Analysis"] },
              { title: "Build a Full Website Using WordPress", issuer: "Coursera", date: "Jun 2024", skills: ["WordPress", "Web Development", "CMS"] },
              { title: "Belajar Dasar-Dasar DevOps", issuer: "Dicoding", date: "May 2023", skills: ["DevOps", "CI/CD", "Cloud"] },
              { title: "Belajar Dasar Pemrograman JavaScript", issuer: "Dicoding", date: "Mar 2023", skills: ["JavaScript", "Programming", "Web Development"] },
              { title: "Cloud Practitioner Essentials / AWS", issuer: "Dicoding", date: "Feb 2023", skills: ["AWS", "Cloud Computing", "Infrastructure"] },
              { title: "Django Web Framework", issuer: "Coursera", date: "Feb 2023", skills: ["Django", "Python", "Web Development"] },
              { title: "Programming in Python", issuer: "Coursera", date: "Jan 2023", skills: ["Python", "Programming", "Data Structures"] }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isCertsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-lg border border-navy-border bg-card hover:shadow-lg hover:border-accent/50 transition-all h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1 leading-tight">{cert.title}</h3>
                      <p className="text-sm text-accent font-medium">{cert.issuer}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <Calendar className="w-3 h-3" />
                        {cert.date}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering Interests Section */}
      <section ref={volunteeringRef} className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVolunteeringInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Volunteering Interests
            </h2>
            <div className="h-1 w-16 bg-accent rounded-full mx-auto mb-8"></div>

            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Beyond engineering, I'm passionate about using technology and innovation to create positive social impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Target className="w-8 h-8 text-accent" />, title: "Environmental Sustainability", desc: "Clean energy and eco-friendly technologies" },
                { icon: <BookOpen className="w-8 h-8 text-accent" />, title: "Education", desc: "STEM education and skill development" },
                { icon: <Code className="w-8 h-8 text-accent" />, title: "Science & Technology", desc: "Innovation and research initiatives" },
                { icon: <CheckCircle className="w-8 h-8 text-accent" />, title: "Community Empowerment", desc: "Supporting underserved communities" }
              ].map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVolunteeringInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group h-full"
                >
                  <div className="p-6 rounded-lg border border-navy-border bg-card hover:shadow-lg hover:border-accent/50 transition-all text-center h-full flex flex-col">
                    <div className="flex justify-center mb-4">
                      {interest.icon}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 flex-grow">{interest.title}</h3>
                    <p className="text-sm text-muted-foreground">{interest.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
