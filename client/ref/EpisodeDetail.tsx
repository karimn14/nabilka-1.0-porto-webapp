import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Target, Lightbulb, Wrench, Code, CheckCircle, BookOpen } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const EpisodeDetail = () => {
  const { topicId, episodeId } = useParams();

  // Sample data structure - this would come from a data source
  const episodeData: Record<string, any> = {
    "anfis-control-1": {
      title: "Derivation of Nonlinear Lyapunov Method with Neural Networks",
      date: "September 2024",
      duration: "3 weeks",
      objective: "Understand and derive the mathematical foundations of Lyapunov stability theory applied to nonlinear systems, and explore its integration with neural network-based adaptive control.",
      planning: [
        "Review Lyapunov stability theory fundamentals and direct/indirect methods",
        "Study nonlinear system dynamics and equilibrium point analysis",
        "Research neural network architectures for adaptive control",
        "Plan MATLAB simulation environment setup"
      ],
      design: {
        description: "The control system design combines classical Lyapunov theory with modern neural network adaptation mechanisms.",
        equations: [
          "Lyapunov function: V(x) = xᵀPx where P > 0",
          "Stability criterion: V̇(x) = ∂V/∂x · f(x) < 0",
          "Neural network adaptation: θ̇ = -Γ · ∂V/∂θ where Γ > 0"
        ]
      },
      calculation: [
        "Derived stability conditions for second-order nonlinear system",
        "Calculated adaptation gain bounds: 0.1 < Γ < 10",
        "Computed convergence rate: exponential with λ = 0.85",
        "Verified Barbalat's lemma for asymptotic stability"
      ],
      method: [
        "Implemented 3-layer feedforward neural network in MATLAB",
        "Used backpropagation with Lyapunov-based weight adaptation",
        "Applied gradient descent with adaptive learning rate",
        "Validated against Van der Pol oscillator benchmark"
      ],
      implementation: {
        tools: ["MATLAB/Simulink", "Control System Toolbox", "Deep Learning Toolbox"],
        code: `% Lyapunov Neural Network Controller
function dtheta = lyapunov_adapt(x, theta, gamma)
    % State error
    e = x - x_ref;
    
    % Neural network output
    u = nn_forward(theta, x);
    
    % Lyapunov function derivative
    V_dot = e' * P * e;
    
    % Adaptation law
    dtheta = -gamma * gradient(V_dot, theta);
end`,
        results: "Successfully stabilized nonlinear system with 95% tracking accuracy"
      },
      lessonsLearned: [
        "Lyapunov-based adaptation provides provable stability guarantees unlike standard backpropagation",
        "Choosing appropriate Lyapunov function is critical - quadratic forms work well for smooth nonlinearities",
        "Neural network hidden layer size affects both convergence speed and computational cost - optimal was 10 neurons",
        "Real-time implementation requires careful discretization to maintain stability properties",
        "Simulation validation must include disturbance rejection and parameter variation tests"
      ],
      nextSteps: [
        "Implement in real-time on STM32 microcontroller",
        "Test with physical nonlinear plant (inverted pendulum)",
        "Compare performance with traditional PID and MPC controllers"
      ]
    },
    "anfis-control-4": {
      title: "Embedding Algorithm Control to Microcontroller",
      date: "November 2024",
      duration: "3 weeks",
      objective: "Implement the ANFIS control algorithm on STM32 microcontroller for real-time embedded control applications with resource constraints.",
      planning: [
        "Profile MATLAB algorithm for computational complexity",
        "Select appropriate STM32 variant (STM32F4 vs F7)",
        "Design fixed-point arithmetic conversion strategy",
        "Plan memory optimization and code structure"
      ],
      design: {
        description: "Embedded implementation using fixed-point arithmetic and optimized fuzzy inference engine.",
        equations: [
          "Fuzzy membership: μ(x) = exp(-((x-c)/σ)²) approximated using LUT",
          "Defuzzification: y = Σ(wi·yi) / Σ(wi) using integer arithmetic",
          "Control update rate: 1kHz with 10-bit ADC resolution"
        ]
      },
      calculation: [
        "Estimated RAM usage: 12KB for ANFIS parameters",
        "Flash memory for lookup tables: 8KB",
        "Worst-case execution time: 850μs on STM32F407",
        "Required clock frequency: minimum 84MHz"
      ],
      method: [
        "Converted floating-point to Q15.16 fixed-point format",
        "Generated optimized C code from MATLAB using Embedded Coder",
        "Implemented lookup tables for transcendental functions",
        "Used DMA for ADC/DAC operations to reduce CPU load"
      ],
      implementation: {
        tools: ["STM32CubeIDE", "MATLAB Embedded Coder", "STM32F407 Discovery Board", "Logic Analyzer"],
        code: `// ANFIS Fixed-Point Implementation
typedef int32_t fixed_t; // Q15.16 format

fixed_t anfis_inference(fixed_t input[], uint8_t n_inputs) {
    fixed_t output = 0;
    fixed_t total_weight = 0;
    
    // Fuzzification using LUT
    for (uint8_t i = 0; i < N_RULES; i++) {
        fixed_t weight = FIXED_ONE;
        for (uint8_t j = 0; j < n_inputs; j++) {
            weight = fixed_mul(weight, 
                membership_lut[i][j][input[j] >> 8]);
        }
        
        output = fixed_add(output, 
            fixed_mul(weight, consequent[i]));
        total_weight = fixed_add(total_weight, weight);
    }
    
    return fixed_div(output, total_weight);
}`,
        results: "Achieved 1.2kHz control loop with <5% performance degradation vs MATLAB"
      },
      lessonsLearned: [
        "Fixed-point arithmetic requires careful scaling to prevent overflow/underflow",
        "Lookup tables provide 10x speedup for exponential and division operations",
        "DMA-based ADC sampling allows true real-time control without blocking",
        "Code profiling revealed 60% time in membership function calculation - optimization focus area",
        "Stack overflow issues resolved by moving large arrays to static allocation"
      ],
      nextSteps: [
        "Integrate with hardware-in-the-loop testing setup",
        "Implement adaptive ANFIS with online parameter tuning",
        "Port to STM32F7 for higher performance applications"
      ]
    }
  };

  const episodeKey = `${topicId}-${episodeId}`;
  const episode = episodeData[episodeKey];

  if (!episode) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="max-w-4xl mx-auto px-8 py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Episode Not Found</h1>
          <Link to={`/learning/${topicId}`} className="text-accent hover:underline">
            Return to Learning Topic
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-8 py-32">
        <Link 
          to={`/learning/${topicId}`}
          className="inline-flex items-center gap-2 text-accent hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Episodes
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-accent font-bold text-lg">{episodeId}</span>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {episode.title}
              </h1>
              <p className="text-muted-foreground mt-1">
                {episode.date} · {episode.duration}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          {/* Objective */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-navy-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent" />
                  Objective
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{episode.objective}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Planning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-navy-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-accent" />
                  Planning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {episode.planning.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-navy-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-accent" />
                  Design
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{episode.design.description}</p>
                <Separator />
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Key Equations:</h4>
                  {episode.design.equations.map((eq: string, idx: number) => (
                    <div key={idx} className="bg-muted p-3 rounded-md font-mono text-sm text-foreground">
                      {eq}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Calculation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="border-navy-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-accent" />
                  Calculation & Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {episode.calculation.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Method */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="border-navy-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-accent" />
                  Method & Approach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {episode.method.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Implementation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="border-navy-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-accent" />
                  Implementation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Tools Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {episode.implementation.tools.map((tool: string) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-full bg-muted text-accent text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium text-foreground mb-2">Code Implementation:</h4>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
                    <code className="text-foreground">{episode.implementation.code}</code>
                  </pre>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium text-foreground mb-2">Results:</h4>
                  <p className="text-muted-foreground">{episode.implementation.results}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Lessons Learned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Card className="border-navy-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  Lessons Learned
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {episode.lessonsLearned.map((lesson: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Next Steps */}
          {episode.nextSteps && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Card className="border-navy-border bg-accent/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent" />
                    Next Steps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {episode.nextSteps.map((step: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-accent mt-1">→</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EpisodeDetail;
