import { motion } from "framer-motion";
import { useParams } from "wouter";
import { Link } from "wouter";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Target, Lightbulb, Wrench, Code, CheckCircle, BookOpen, ImageIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const EpisodeDetail = () => {
  const { topicId, episodeId } = useParams();

  const episodeData: Record<string, any> = {
    "microcontroller-pcb-1": {
      title: "Advanced STM32 Peripheral Programming",
      date: "September 2024",
      duration: "2 weeks",
      objective: "Master complex, low-level programming of essential STM32 microcontroller peripherals (like DMA, advanced timers, and communication protocols) to enable high-performance, efficient, and reliable embedded system designs.",
      planning: [
        "Review the Architecture Reference Manual for selected advanced peripherals (e.g., DMA, TIM, and USART/SPI in Master mode).",
        "Study the ST HAL/LL library structure to understand register-level access versus abstraction layers.",
        "Identify resource-intensive tasks (e.g., high-speed data acquisition, motor control) that require advanced peripheral techniques.",
        "Plan out three practical examples for implementation: high-speed ADC sampling via DMA, motor PWM generation, and robust communication using interrupts."
      ],
      design: {
        description: "The programming design focuses on efficiency by offloading CPU tasks to peripherals and achieving precise timing control.",
        equations: [
          "Key Concept (DMA): Direct Memory Access is configured to transfer data between peripherals and RAM without CPU intervention, significantly reducing CPU overhead.",
          "Key Concept (Advanced Timers): Advanced Timer (TIM) is configured in specific modes (e.g., Capture/Compare, complementary outputs) for complex tasks like 3Φ (three-phase) motor control.",
          "DMA Configuration: DMA_SxCR (Stream Configuration Register) - setting data transfer direction, priority, and circular mode.",
          "Timer Configuration: TIMx_CR1 (Control Register 1) - setting Prescaler/Period for base frequency and TIMx_CCRx (Capture/Compare Register) for duty cycle."
        ]
      },
      calculation: [
        "DMA Transfer Time: Calculated the time saved by DMA vs. CPU-handled transfer for a 1 M-sample/s ADC rate, showing a 98% CPU load reduction.",
        "PWM Resolution: Determined the necessary Timer Prescaler and Period to achieve a required PWM frequency (e.g., 20 kHz) and duty cycle resolution (16 bits).",
        "Baud Rate Error: Calculated the fractional error for communication peripherals (e.g., USART) at high baud rates to ensure reliable data transfer: Error = |16 · f_CLK / (Baud · USART_DIV) - 1| · 100%"
      ],
      method: [
        "Programming Style: Employed a register-level/LL (Low-Layer) approach mixed with the HAL to balance speed and code readability for performance-critical sections.",
        "Driver Implementation: Developed modular, decoupled drivers for each peripheral to promote reusability.",
        "Debugging: Used an Oscilloscope and Logic Analyzer to verify the output signals (e.g., checking PWM signal integrity, SPI clock/data alignment) and confirm timing accuracy."
      ],
      implementation: {
        tools: ["STM32CubeIDE (for project setup and code generation)", "ST-Link/V2 (for debugging and flashing)", "Oscilloscope/Logic Analyzer (for signal analysis)"],
        code: `// Example: DMA ADC Configuration Concept
// A critical step was implementing the DMA circular mode to continuously stream ADC data to memory buffers with minimum CPU involvement.`,
        results: "Successfully achieved a 100 kSPS (kilo-Samples per Second) ADC sampling rate with minimal CPU utilization (<2%) and implemented precise motor speed control via advanced timers and PWM."
      },
      lessonsLearned: [
        "DMA vs. Interrupts: DMA is superior for high-throughput, continuous data movement, while interrupts are best for event-driven, low-frequency tasks.",
        "Clock Configuration is King: Peripheral performance is critically dependent on correctly configuring the clock tree for optimal speed and resolution.",
        "LL/Register Access: Direct register access is necessary to squeeze out maximum performance and solve niche configuration issues that are abstracted away by the HAL."
      ],
      nextSteps: [
        "Integrate the advanced peripheral drivers into a complete Real-Time Operating System (RTOS) environment (e.g., FreeRTOS).",
        "Begin PCB design for a custom board that leverages these advanced features, focusing on signal integrity for high-speed communication lines.",
        "Explore bootloader design and firmware update mechanisms."
      ]
    },
    "design-mccs-1": {
      title: "MCCS System Architecture and Requirements Analysis",
      date: "October 2024",
      duration: "1 week",
      objective: "Define the system architecture for a mobile carbon capture system integrated with motorcycle design, analyzing requirements for carbon capture efficiency, vehicle integration, and environmental impact.",
      planning: [
        "Research existing carbon capture technologies suitable for mobile applications",
        "Analyze motorcycle design constraints and integration points",
        "Define system requirements including capture efficiency, weight, and power consumption",
        "Plan component selection and integration strategy"
      ],
      design: {
        description: "The MCCS design focuses on a modular carbon capture system that can be retrofitted to motorcycles while maintaining vehicle performance and safety.",
        equations: [
          "Carbon Capture Efficiency: η = (CO₂_captured / CO₂_emitted) × 100%",
          "System Weight Impact: ΔW = W_system / W_vehicle × 100% (target < 5%)",
          "Power Consumption: P_system = P_capture + P_compression + P_storage"
        ]
      },
      calculation: [
        "Estimated capture efficiency of 15-25% for mobile amine-based systems",
        "Calculated system weight impact of 3.2% on a 150kg motorcycle",
        "Determined power requirements: 50-100W continuous operation",
        "Analyzed thermal management needs for exothermic absorption reactions"
      ],
      method: [
        "Conducted literature review of mobile carbon capture technologies",
        "Performed motorcycle integration analysis using CAD modeling",
        "Developed system requirements specification document",
        "Created component selection matrix based on performance criteria"
      ],
      implementation: {
        tools: ["SolidWorks (CAD modeling)", "MATLAB (system analysis)", "Python (simulation)", "Excel (requirements tracking)"],
        code: `// MCCS System Requirements Analysis
struct MCCS_Requirements {
    float capture_efficiency;    // Target: 20%
    float system_weight_kg;     // Target: < 7.5kg
    float power_consumption_w;  // Target: < 100W
    float operating_temp_c;     // Range: 20-80°C
};`,
        results: "Defined comprehensive system requirements with realistic performance targets and identified key integration challenges"
      },
      lessonsLearned: [
        "Mobile carbon capture requires careful balance between efficiency and vehicle performance constraints",
        "Thermal management is critical for maintaining system efficiency during operation",
        "Modular design approach enables easier retrofit and maintenance",
        "Power consumption must be optimized to avoid significant impact on vehicle range"
      ],
      nextSteps: [
        "Select and procure carbonu capture sorbent materials",
        "Design mechanical integration with motorcycle chassis",
        "Develop control system for automated capture operation",
        "Prototype initial system components"
      ],
      images: ["/images/learning-episodes/design-mccs-1/image1.jpg", "/images/learning-episodes/design-mccs-1/image2.jpg", "/images/learning-episodes/design-mccs-1/image4.jpg", "/images/learning-episodes/design-mccs-1/image3.jpg"]
    },
    "design-mccs-2": {
      title: "Carbon Capture Chemistry and Sorbent Selection",
      date: "October 2024",
      duration: "2 weeks",
      objective: "Select and characterize carbon capture sorbents suitable for mobile motorcycle applications, focusing on efficiency, regeneration, and integration constraints.",
      planning: [
        "Research amine-based and other sorbent technologies for mobile use",
        "Evaluate sorbent performance metrics (capacity, kinetics, stability)",
        "Analyze regeneration methods suitable for vehicle operation",
        "Plan laboratory testing setup for sorbent characterization"
      ],
      design: {
        description: "The sorbent selection focuses on materials that provide high CO₂ capacity, fast kinetics, and low regeneration energy for mobile applications.",
        equations: [
          "CO₂ Capacity: C = m_CO₂ / m_sorbent (mol/kg)",
          "Regeneration Energy: E_regen = Q_heat + W_compression (kJ/mol CO₂)",
          "Sorbent Utilization: U = C_actual / C_theoretical × 100%"
        ]
      },
      calculation: [
        "Calculated CO₂ capacity requirements: minimum 2 mol/kg for practical system",
        "Estimated regeneration energy: target < 3 MJ/kg CO₂",
        "Determined sorbent lifetime: minimum 1000 cycles",
        "Analyzed pressure drop across sorbent bed: target < 50 mbar"
      ],
      method: [
        "Conducted literature review of sorbent materials for mobile applications",
        "Performed thermodynamic analysis of absorption/desorption cycles",
        "Developed sorbent selection criteria matrix",
        "Planned experimental characterization protocols"
      ],
      implementation: {
        tools: ["Thermogravimetric Analyzer (TGA)", "Gas Chromatography (GC)", "MATLAB (modeling)", "Python (data analysis)"],
        code: `// Sorbent Performance Modeling
class SorbentModel {
    double capacity;           // mol CO₂/kg sorbent
    double kinetics;           // 1/s reaction rate
    double regeneration_temp;  // °C
    double lifetime_cycles;    // number of cycles
    
    double calculateEfficiency(double flow_rate, double temp) {
        // Calculate capture efficiency based on operating conditions
        return capacity * kinetics / (flow_rate * temp_factor);
    }
};`,
        results: "Selected amine-functionalized silica as primary sorbent with 3.2 mol/kg capacity and moderate regeneration requirements"
      },
      lessonsLearned: [
        "Sorbent kinetics are critical for high-speed vehicle exhaust capture",
        "Regeneration strategy must be compatible with vehicle thermal management",
        "Material stability under vibration and temperature cycling is essential",
        "Cost-effective sorbents with good performance characteristics are available"
      ],
      nextSteps: [
        "Procure selected sorbent materials for testing",
        "Set up laboratory characterization equipment",
        "Develop sorbent regeneration system design",
        "Begin prototype sorbent bed fabrication"
      ]
    },
    "design-mccs-3": {
      title: "Mechanical Integration and Thermal Management",
      date: "November 2024",
      duration: "2 weeks",
      objective: "Design the mechanical integration of MCCS components with motorcycle chassis and develop thermal management system for efficient operation.",
      planning: [
        "Analyze motorcycle chassis for integration points",
        "Design sorbent bed housing and exhaust integration",
        "Develop thermal management system for heat rejection",
        "Plan vibration isolation and structural integrity analysis"
      ],
      design: {
        description: "The mechanical design ensures proper exhaust flow integration, thermal management, and structural integrity while minimizing impact on vehicle dynamics.",
        equations: [
          "Heat Rejection Rate: Q_reject = ṁ_air × C_p × ΔT (W)",
          "Pressure Drop: ΔP = f × (L/D) × (ρ × v²/2) (Pa)",
          "Natural Frequency: f_n = 1/(2π) × √(k/m) (Hz)"
        ]
      },
      calculation: [
        "Calculated heat rejection requirements: 150W at 60°C ambient",
        "Determined pressure drop limits: < 100 mbar for minimal power impact",
        "Analyzed vibration frequencies: 20-200 Hz range for motorcycle operation",
        "Estimated system weight distribution for center of gravity impact"
      ],
      method: [
        "Created 3D CAD models of motorcycle chassis integration",
        "Performed CFD analysis of exhaust flow and heat transfer",
        "Conducted structural analysis for vibration and crash loads",
        "Developed thermal management system design"
      ],
      implementation: {
        tools: ["SolidWorks (CAD)", "ANSYS (CFD/Thermal)", "MATLAB (analysis)", "Prototyping equipment"],
        code: `// Thermal Management System Model
struct ThermalSystem {
    double heat_load_w;        // Total heat to reject
    double ambient_temp_c;     // Ambient temperature
    double airflow_m3_s;       // Available cooling air flow
    
    double calculateFanPower() {
        // Calculate fan power requirements for heat rejection
        return heat_load / (efficiency * airflow * specific_heat);
    }
};`,
        results: "Designed integrated system with 85% heat rejection efficiency and minimal aerodynamic impact"
      },
      lessonsLearned: [
        "Exhaust integration requires careful flow analysis to maintain capture efficiency",
        "Thermal management must work across wide temperature ranges",
        "Vibration isolation is critical for sorbent bed integrity",
        "Aerodynamic design is important for minimal performance impact"
      ],
      nextSteps: [
        "Fabricate prototype mechanical components",
        "Test thermal management system performance",
        "Validate structural integrity under vibration",
        "Integrate with motorcycle test platform"
      ]
    },
    "design-mccs-4": {
      title: "Control System and Performance Validation",
      date: "November 2024",
      duration: "1 week",
      objective: "Develop control algorithms for MCCS operation and validate system performance under real-world motorcycle operating conditions.",
      planning: [
        "Design control algorithms for capture and regeneration cycles",
        "Develop sensor integration and data acquisition system",
        "Plan performance validation testing protocols",
        "Create safety and fault detection systems"
      ],
      design: {
        description: "The control system manages automated carbon capture operation, regeneration cycles, and system monitoring for optimal performance and safety.",
        equations: [
          "Control Law: u = K_p × e + K_i × ∫e dt + K_d × de/dt",
          "CO₂ Concentration: C_CO₂ = (V_exhaust × ρ_CO₂) / m_exhaust",
          "System Efficiency: η_system = CO₂_captured / CO₂_available × 100%"
        ]
      },
      calculation: [
        "Designed PID control for temperature regulation: K_p=2.5, K_i=0.8, K_d=0.3",
        "Calculated sampling rates: 10Hz for fast control loops, 1Hz for monitoring",
        "Determined sensor accuracy requirements: ±2% for CO₂ concentration",
        "Estimated control system power consumption: 5W"
      ],
      method: [
        "Developed control algorithms in MATLAB/Simulink",
        "Implemented embedded control system on microcontroller",
        "Created sensor fusion algorithms for accurate measurements",
        "Designed safety interlocks and fault detection"
      ],
      implementation: {
        tools: ["MATLAB/Simulink", "STM32 microcontroller", "CO₂ sensors", "Data acquisition system"],
        code: `// MCCS Control System
class MCCS_Controller {
    PID_Controller temp_pid;
    Sensor_Array sensors;
    State_Machine control_state;
    
    void controlLoop() {
        float co2_level = sensors.readCO2();
        float temp = sensors.readTemperature();
        
        if (control_state == CAPTURE) {
            // Control capture operation
            float valve_pos = temp_pid.compute(temp, setpoint);
            actuators.setValvePosition(valve_pos);
        }
    }
};`,
        results: "Implemented robust control system with 95% capture efficiency and comprehensive safety features"
      },
      lessonsLearned: [
        "Real-time control is essential for maintaining optimal capture conditions",
        "Sensor accuracy and response time are critical for system performance",
        "Safety systems must handle various fault conditions gracefully",
        "Data logging is important for performance analysis and optimization"
      ],
      nextSteps: [
        "Conduct comprehensive system testing",
        "Validate performance under various operating conditions",
        "Document system specifications and user manual",
        "Plan for production scaling and commercialization"
      ]
    },
    "simple-30a-esc-1": {
      title: "30A ESC Architecture and Component Selection",
      date: "October 2024",
      duration: "1 week",
      objective: "Design the system architecture for a 30A Electronic Speed Controller for brushless motors, selecting appropriate components for efficient and reliable operation.",
      planning: [
        "Research brushless motor control principles and ESC requirements",
        "Analyze 30A current handling requirements and component ratings",
        "Select microcontroller and power electronics components",
        "Plan PCB layout and thermal management strategy"
      ],
      design: {
        description: "The ESC design focuses on efficient three-phase motor control with sensorless operation, protection features, and compact form factor.",
        equations: [
          "Power Dissipation: P_diss = I² × R × duty_cycle (W)",
          "Switching Frequency: f_sw = 1 / (2 × t_dead + t_rise + t_fall) (Hz)",
          "Current Rating: I_max = (T_j_max - T_a) / (R_th × safety_factor) (A)"
        ]
      },
      calculation: [
        "Calculated MOSFET power dissipation: 2.4W at 30A continuous",
        "Determined switching frequency: 16kHz for optimal efficiency",
        "Selected component voltage ratings: 60V for 48V system operation",
        "Estimated thermal resistance requirements: < 2°C/W"
      ],
      method: [
        "Reviewed existing ESC designs and best practices",
        "Performed component stress analysis and derating calculations",
        "Developed schematic design with protection circuits",
        "Planned PCB layout for optimal power distribution"
      ],
      implementation: {
        tools: ["LTspice (simulation)", "KiCad (schematic/PCB)", "STM32CubeMX (config)", "Oscilloscope"],
        code: `// ESC System Parameters
#define MAX_CURRENT 30.0f      // Amperes
#define SUPPLY_VOLTAGE 48.0f   // Volts
#define SWITCH_FREQ 16000.0f   // Hz

struct ESC_Config {
    float max_current;
    float supply_voltage;
    float switching_freq;
    uint8_t pole_pairs;
    float kv_rating;
};`,
        results: "Selected high-performance components with 95% efficiency target and comprehensive protection features"
      },
      lessonsLearned: [
        "Component derating is crucial for reliable operation under all conditions",
        "Thermal management is critical for high-current applications",
        "Protection circuits are essential for motor and ESC safety",
        "PCB layout significantly impacts EMI and switching performance"
      ],
      nextSteps: [
        "Design detailed schematic with all protection circuits",
        "Create PCB layout with proper power plane design",
        "Implement firmware for sensorless motor control",
        "Prototype and test initial design"
      ]
    },
    "simple-30a-esc-2": {
      title: "Sensorless BLDC Motor Control Algorithm",
      date: "October 2024",
      duration: "2 weeks",
      objective: "Implement sensorless control algorithms for brushless DC motors using back-EMF sensing and field-oriented control techniques.",
      planning: [
        "Study sensorless control methods (back-EMF, flux estimation)",
        "Implement commutation logic and PWM generation",
        "Develop speed and torque control loops",
        "Plan startup and low-speed operation strategies"
      ],
      design: {
        description: "The control algorithm uses back-EMF sensing for rotor position estimation and implements field-oriented control for optimal motor performance.",
        equations: [
          "Back-EMF: e = (P/2) × ω × ψ × sin(θ_electrical)",
          "Commutation Angle: θ_comm = θ_mechanical × P / 2",
          "Torque: T = (3/2) × P × (ψ_d × i_q - ψ_q × i_d)"
        ]
      },
      calculation: [
        "Calculated back-EMF zero crossing detection accuracy: ±5° electrical",
        "Determined control loop bandwidth: 1kHz for current, 100Hz for speed",
        "Estimated startup time: < 200ms for reliable motor start",
        "Calculated torque ripple: < 10% at rated speed"
      ],
      method: [
        "Implemented back-EMF sensing algorithm in firmware",
        "Developed commutation state machine for six-step control",
        "Created PID controllers for speed and current regulation",
        "Designed startup sequence with open-loop acceleration"
      ],
      implementation: {
        tools: ["STM32 HAL/LL libraries", "MATLAB (algorithm development)", "Oscilloscope", "Motor test bench"],
        code: `// Sensorless BLDC Control
class BLDC_Controller {
    ADC_HandleTypeDef* hadc;
    TIM_HandleTypeDef* htim_pwm;
    PID_Controller speed_pid;
    PID_Controller current_pid;
    
    void commutateMotor(uint8_t step) {
        // Six-step commutation sequence
        switch(step) {
            case 0: // Phase A+, B-, C off
                setPWM(htim_pwm, CHANNEL_A, duty);
                setPWM(htim_pwm, CHANNEL_B, 0);
                break;
            // ... other steps
        }
    }
    
    uint8_t detectZeroCrossing() {
        // Back-EMF zero crossing detection
        return (adc_read(ADC_CHANNEL) > threshold);
    }
};`,
        results: "Implemented robust sensorless control with smooth startup and stable operation across full speed range"
      },
      lessonsLearned: [
        "Back-EMF sensing requires careful filtering for reliable zero crossing detection",
        "Startup sequence is critical for sensorless operation",
        "Current sensing accuracy affects torque control performance",
        "PWM timing synchronization is essential for commutation accuracy"
      ],
      nextSteps: [
        "Implement field-oriented control for higher efficiency",
        "Add advanced features like regenerative braking",
        "Test with various motor types and load conditions",
        "Optimize code for minimum latency and maximum performance"
      ]
    },
    "simple-30a-esc-3": {
      title: "Protection Circuits and System Integration",
      date: "November 2024",
      duration: "1 week",
      objective: "Design comprehensive protection circuits and integrate all ESC components into a complete, reliable system with safety features.",
      planning: [
        "Design overcurrent, overvoltage, and overtemperature protection",
        "Implement motor stall and locked rotor detection",
        "Add communication interface for external control",
        "Plan final system testing and validation"
      ],
      design: {
        description: "The protection system ensures safe operation under all conditions with multiple layers of fault detection and response mechanisms.",
        equations: [
          "Overcurrent Threshold: I_trip = I_max × safety_factor × (1 + tolerance)",
          "Thermal Protection: T_trip = T_j_max - (P_diss × R_th × safety_margin)",
          "Response Time: t_response = t_detection + t_shutdown (μs)"
        ]
      },
      calculation: [
        "Set overcurrent threshold: 35A (17% above rated current)",
        "Calculated thermal shutdown temperature: 85°C junction temperature",
        "Determined minimum response time: < 10μs for current protection",
        "Estimated capacitor sizing for voltage ripple: < 5%"
      ],
      method: [
        "Designed analog protection circuits with comparators",
        "Implemented digital fault detection in firmware",
        "Created multi-level protection hierarchy",
        "Developed fault logging and diagnostic capabilities"
      ],
      implementation: {
        tools: ["KiCad (schematic)", "STM32 firmware", "Protection circuit components", "Test equipment"],
        code: `// ESC Protection System
class ESC_Protection {
    ADC_HandleTypeDef* current_adc;
    ADC_HandleTypeDef* voltage_adc;
    ADC_HandleTypeDef* temp_adc;
    
    enum FaultType {
        OVERCURRENT,
        OVERVOLTAGE,
        OVERTEMP,
        STALL_DETECTED
    };
    
    void checkFaults() {
        if (adc_read(current_adc) > OVERCURRENT_THRESHOLD) {
            emergencyShutdown(OVERCURRENT);
        }
        if (adc_read(temp_adc) > OVERTEMP_THRESHOLD) {
            emergencyShutdown(OVERTEMP);
        }
        // Additional fault checks...
    }
    
    void emergencyShutdown(FaultType fault) {
        disablePWM();
        setFaultLED(fault);
        logFault(fault);
    }
};`,
        results: "Implemented comprehensive protection system with < 5μs response time and multiple safety layers"
      },
      lessonsLearned: [
        "Multiple protection layers provide redundancy and reliability",
        "Fast response times are critical for power electronics protection",
        "Proper fault logging aids in system debugging and improvement",
        "User feedback (LEDs, beeps) is important for system status indication"
      ],
      nextSteps: [
        "Conduct comprehensive testing under various fault conditions",
        "Validate protection system response times and accuracy",
        "Document safety specifications and user guidelines",
        "Prepare for production and certification testing"
      ]
    },
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
          "Lyapunov function: V(x) = x^T P x where P > 0",
          "Stability criterion: V_dot(x) = \u2202V/\u2202x \u00b7 f(x) < 0",
          "Neural network adaptation: \u03b8_dot = -\u0393 \u00b7 \u2202V/\u2202\u03b8 where \u0393 > 0"
        ]
      },
      calculation: [
        "Derived stability conditions for second-order nonlinear system",
        "Calculated adaptation gain bounds: 0.1 < \u0393 < 10",
        "Computed convergence rate: exponential with \u03bb = 0.85",
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
    }
  };

  const episodeKey = `${topicId}-${episodeId}`;
  const episode = episodeData[episodeKey];

  if (!episode) {
    return (
      <div className="min-h-screen bg-background">
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
                {episode.date} \\u00b7 {episode.duration}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          {/* Images */}
          {episode.images && episode.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-4 overflow-hidden"
            >
              {episode.images.slice(0, 3).map((image: string, idx: number) => (
                <Dialog key={idx}>
                  <DialogTrigger asChild>
                    <div className="relative group cursor-pointer overflow-hidden rounded-lg border border-navy-border hover:shadow-lg transition-all flex-1 min-w-0">
                      <img
                        src={image}
                        alt={`Progress image ${idx + 1}`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                          Click to enlarge
                        </span>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <img
                      src={image}
                      alt={`Progress image ${idx + 1}`}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                  </DialogContent>
                </Dialog>
              ))}
              {episode.images.length > 3 && (
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative group cursor-pointer overflow-hidden rounded-lg border border-navy-border hover:shadow-lg transition-all flex-1 min-w-0 bg-muted/50 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent mb-1">+</div>
                        <div className="text-sm text-muted-foreground">View All</div>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {episode.images.map((image: string, idx: number) => (
                        <Dialog key={idx}>
                          <DialogTrigger asChild>
                            <div className="relative group cursor-pointer overflow-hidden rounded-lg border border-navy-border hover:shadow-lg transition-all">
                              <img
                                src={image}
                                alt={`Progress image ${idx + 1}`}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                                  Click to enlarge
                                </span>
                              </div>
                            </div>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <img
                              src={image}
                              alt={`Progress image ${idx + 1}`}
                              className="w-full h-auto max-h-[80vh] object-contain"
                            />
                          </DialogContent>
                        </Dialog>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </motion.div>
          )}

          {/* Objective */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
                      <span className="text-accent mt-1">\u2022</span>
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
                      <span className="text-accent mt-1">\u2022</span>
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
                      <span className="text-accent mt-1">\u2022</span>
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

          {/* References */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Card className="border-navy-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-accent" />
                  References
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground">
                  <p className="mb-4">This episode draws from the following sources and references:</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Technical documentation and datasheets from component manufacturers</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Research papers and academic articles on relevant technologies</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Online tutorials and community resources</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Practical implementation guides and best practices</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Next Steps */}
          {episode.nextSteps && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
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
                        <span className="text-accent mt-1">\u2192</span>
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
