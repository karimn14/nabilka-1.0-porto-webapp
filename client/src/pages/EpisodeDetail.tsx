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
      title: "Exploring STM32F103C8T6 Blue Pill: Core Features and Capabilities",
      date: "September 2024",
      duration: "2 weeks",
      objective: "Gain comprehensive understanding of the STM32F103C8T6 Blue Pill development board, exploring its hardware architecture, peripheral capabilities, and practical implementation through hands-on experimentation with GPIO, timers, and basic communication interfaces.",
      planning: [
        "Research the STM32F103C8T6 microcontroller specifications and Blue Pill board layout.",
        "Study the ARM Cortex-M3 core architecture and its instruction set.",
        "Identify key peripherals available on the Blue Pill (ADC, UART, SPI, I2C, timers).",
        "Plan systematic exploration: start with GPIO basics, move to timers, then communication protocols.",
        "Compare Blue Pill with STM32 Black Pill to understand evolution and differences."
      ],
      design: {
        description: "The exploration focuses on understanding the microcontroller's architecture and how its peripherals interact with the real world. The Blue Pill serves as an accessible entry point to STM32 ecosystem, with its 72MHz Cortex-M3 core providing ample processing power for intermediate projects.",
        equations: [
          "Clock Frequency: f_CPU = 72 MHz (maximum for STM32F103 series)",
          "Timer Resolution: t_resolution = 1 / f_timer (13.89 ns at 72MHz)",
          "ADC Conversion Time: t_conv = 12.5 cycles × (1/f_ADC) ≈ 1.17 μs at maximum speed",
          "UART Baud Rate: Baud = f_PCLK / (16 × USARTDIV) where USARTDIV is programmable"
        ]
      },
      calculation: [
        "Power Consumption Analysis: Calculated typical current draw of 30-50mA during active operation, with sleep modes reducing to <1mA.",
        "Memory Utilization: Assessed 64KB Flash and 20KB SRAM capacity for program storage and runtime data.",
        "Peripheral Clock Analysis: Determined optimal clock configurations for different peripherals to balance performance and power consumption.",
        "Pin Mapping Study: Analyzed the 40-pin layout and alternate function assignments for flexible hardware design."
      ],
      method: [
        "Hardware Setup: Configured development environment with STM32CubeIDE and ST-Link programmer.",
        "Systematic Testing: Implemented GPIO control, timer-based PWM generation, and UART communication.",
        "Debugging Approach: Used onboard LED for visual feedback and serial output for monitoring internal states.",
        "Documentation: Maintained detailed notes on register configurations and timing behaviors observed during testing."
      ],
      implementation: {
        tools: ["STM32CubeIDE", "ST-Link V2 Programmer", "Logic Analyzer", "Multimeter", "Oscilloscope"],
        code: `// Blue Pill GPIO and Timer Exploration
// Basic setup for LED blinking with timer interrupts
void TIM2_IRQHandler(void) {
    if (TIM_GetITStatus(TIM2, TIM_IT_Update) != RESET) {
        GPIO_WriteBit(GPIOC, GPIO_Pin_13, 
                     GPIO_ReadOutputDataBit(GPIOC, GPIO_Pin_13) ? Bit_RESET : Bit_SET);
        TIM_ClearITPendingBit(TIM2, TIM_IT_Update);
    }
}

// UART communication for debugging
void UART_SendString(char* str) {
    while (*str) {
        while (USART_GetFlagStatus(USART1, USART_FLAG_TXE) == RESET);
        USART_SendData(USART1, *str++);
    }
}`,
        results: "Successfully mapped all major peripherals, achieved reliable UART communication at 115200 baud, and implemented timer-based PWM with 1μs resolution. The Blue Pill proved to be a capable platform for intermediate embedded projects."
      },
      lessonsLearned: [
        "Peripheral Initialization: Proper clock enabling and GPIO configuration are crucial for reliable operation.",
        "Interrupt Handling: Understanding NVIC priorities and interrupt nesting prevents timing issues.",
        "Power Management: The Blue Pill's low power modes make it suitable for battery-powered applications.",
        "Hardware Limitations: 64KB Flash limits complex applications, necessitating efficient code practices."
      ],
      nextSteps: [
        "Transition to STM32 Black Pill for enhanced performance and more peripherals.",
        "Implement DMA for high-speed data transfer applications.",
        "Explore wireless communication modules integration.",
        "Design custom PCB based on Blue Pill learnings."
      ]
    },
    "microcontroller-pcb-2": {
      title: "STM32 Black Pill Deep Dive: Advanced Features and Performance",
      date: "October 2024",
      duration: "3 weeks",
      objective: "Explore the enhanced capabilities of STM32 Black Pill (STM32F411CEU6), comparing it with Blue Pill while implementing advanced features like USB, SDIO, and higher-speed peripherals for more demanding embedded applications.",
      planning: [
        "Compare Black Pill specifications with Blue Pill (STM32F411 vs F103).",
        "Study new peripherals: USB OTG, SDIO, I2S, advanced ADC.",
        "Implement USB communication and mass storage functionality.",
        "Explore higher clock speeds and performance optimizations.",
        "Design experiments to showcase Black Pill advantages."
      ],
      design: {
        description: "Building on Blue Pill knowledge, the Black Pill exploration focuses on performance enhancements and modern peripherals. The 100MHz Cortex-M4F core with DSP instructions enables more sophisticated signal processing and real-time applications.",
        equations: [
          "Enhanced Clock: f_CPU = 100 MHz (25% performance increase over Blue Pill)",
          "USB Data Rate: 12 Mbps full-speed USB with OTG capability",
          "SDIO Interface: Up to 48 MHz clock for high-speed SD card access",
          "ADC Resolution: 12-bit ADC with up to 2.4 MSPS sampling rate"
        ]
      },
      calculation: [
        "Performance Benchmarking: Measured 40% faster execution for DSP algorithms compared to Blue Pill.",
        "USB Power Analysis: Calculated power delivery capabilities for connected devices.",
        "Memory Bandwidth: Analyzed SRAM access patterns for optimal data throughput.",
        "Thermal Analysis: Assessed heat dissipation requirements for continuous high-performance operation."
      ],
      method: [
        "Comparative Testing: Ran identical algorithms on both Blue Pill and Black Pill to quantify improvements.",
        "USB Implementation: Developed USB CDC (serial) and MSC (mass storage) device classes.",
        "SD Card Integration: Implemented FAT filesystem for data logging applications.",
        "Performance Profiling: Used system tick timers to measure execution times and identify bottlenecks."
      ],
      implementation: {
        tools: ["STM32CubeIDE", "ST-Link V2", "USB Protocol Analyzer", "SD Card Module", "Logic Analyzer"],
        code: `// Black Pill USB CDC Implementation
// Virtual COM port over USB for high-speed communication
USBD_HandleTypeDef hUsbDeviceFS;
extern USBD_DescriptorTypeDef USBD_CDC_Desc;

void USB_CDC_Init(void) {
    USBD_Init(&hUsbDeviceFS, &USBD_CDC_Desc, DEVICE_FS);
    USBD_RegisterClass(&hUsbDeviceFS, &USBD_CDC);
    USBD_Start(&hUsbDeviceFS);
}

// SDIO for high-speed data logging
void SDIO_Init(void) {
    SDIO_InitTypeDef SDIO_InitStructure;
    SDIO_InitStructure.SDIO_ClockDiv = SDIO_INIT_CLK_DIV;
    SDIO_InitStructure.SDIO_ClockEdge = SDIO_ClockEdge_Rising;
    SDIO_Init(&SDIO_InitStructure);
}`,
        results: "Achieved USB communication at full 12Mbps speed, implemented reliable SD card data logging at 10MB/s, and demonstrated 3x faster ADC sampling compared to Blue Pill. The Black Pill proved superior for applications requiring high performance and modern connectivity."
      },
      lessonsLearned: [
        "USB Complexity: OTG functionality requires careful state management and power negotiation.",
        "Performance Gains: The Cortex-M4F core enables floating-point operations critical for control systems.",
        "Power Efficiency: Despite higher performance, Black Pill maintains good efficiency in active modes.",
        "Software Ecosystem: Enhanced peripherals require more sophisticated driver implementations."
      ],
      nextSteps: [
        "Integrate wireless modules (WiFi, Bluetooth) using available interfaces.",
        "Implement real-time operating system for multi-threaded applications.",
        "Develop custom sensor interfaces leveraging high-speed ADC capabilities.",
        "Design application-specific PCBs incorporating Black Pill features."
      ]
    },
    "microcontroller-pcb-3": {
      title: "STM32 Ecosystem Expansion: Custom Board Design and Prototyping (Planned)",
      date: "Planned - November 2024",
      duration: "4 weeks",
      objective: "Design and prototype custom STM32-based PCBs, integrating sensors, actuators, and communication modules while optimizing for specific application requirements and manufacturing constraints.",
      planning: [
        "Select appropriate STM32 microcontroller for target application.",
        "Design schematic with power management, sensor interfaces, and communication buses.",
        "Implement PCB layout with proper signal integrity and EMI considerations.",
        "Plan prototyping and testing strategy for iterative design improvement."
      ],
      design: {
        description: "Custom board design focuses on application-specific requirements while leveraging STM32's rich peripheral set. The process involves balancing performance, cost, and manufacturability.",
        equations: [
          "Power Budget: P_total = P_STM32 + Σ(P_peripheral) + P_overhead",
          "Signal Integrity: Rise time t_r < 0.35 × propagation delay",
          "EMI Control: Ground plane coverage > 70% of board area",
          "Thermal Management: θ_JA < 40°C/W for reliable operation"
        ]
      },
      calculation: [
        "Component Selection: Evaluate voltage regulators, capacitors, and connectors for optimal performance.",
        "Layout Optimization: Calculate trace widths and via placements for current carrying capacity.",
        "Cost Analysis: Balance component costs with performance requirements.",
        "Reliability Assessment: Determine MTBF based on component stress analysis."
      ],
      method: [
        "Schematic Design: Use KiCad or Altium for professional-grade schematics.",
        "PCB Layout: Implement proper layer stackup and routing guidelines.",
        "Design Rule Check: Validate electrical and manufacturing constraints.",
        "Prototyping: Order PCBs and assemble initial prototypes for testing."
      ],
      implementation: {
        tools: ["KiCad PCB Design", "STM32CubeMX", "Oscilloscope", "Thermal Camera", "EMI Tester"],
        code: "// Custom Board Initialization\n// Power-on self-test and peripheral validation\nvoid Board_Init(void) {\n    // Voltage regulator check\n    // Peripheral presence detection\n    // Communication link verification\n}",
        results: "Expected: Functional prototype with validated power management, reliable communication interfaces, and optimized thermal performance."
      },
      lessonsLearned: [
        "Design Iteration: PCB design requires multiple revisions for optimal performance.",
        "Manufacturing Constraints: Understanding fab house capabilities prevents costly mistakes.",
        "Testing Strategy: Comprehensive testing protocols ensure reliable operation.",
        "Cost Optimization: Component selection significantly impacts total BOM cost."
      ],
      nextSteps: [
        "Validate design with comprehensive testing across operating conditions.",
        "Iterate based on test results and user feedback.",
        "Prepare for small-scale production and certification.",
        "Document design for future reference and replication."
      ]
    },
    "microcontroller-pcb-4": {
      title: "Nordic nRF52 Series Exploration: Bluetooth Low Energy Integration (Planned)",
      date: "Planned - December 2024",
      duration: "3 weeks",
      objective: "Explore Nordic Semiconductor nRF52 series microcontrollers, focusing on Bluetooth Low Energy (BLE) implementation, sensor integration, and low-power IoT applications.",
      planning: [
        "Study nRF52 architecture and BLE protocol stack.",
        "Implement basic BLE services and characteristics.",
        "Integrate sensors for environmental monitoring applications.",
        "Optimize power consumption for battery-operated devices.",
        "Develop mobile app companion for device interaction."
      ],
      design: {
        description: "Nordic nRF52 exploration focuses on wireless connectivity and ultra-low-power operation. The integrated BLE radio enables sophisticated IoT applications with minimal external components.",
        equations: [
          "BLE Connection Interval: T_conn = 7.5ms to 4s (configurable)",
          "Current Consumption: I_active = 5-10mA, I_sleep = <1μA",
          "Range Performance: d = 10 × log(P_tx / P_rx) + 20 × log(f) - 147.55",
          "Battery Life: t_life = C_battery / I_avg × efficiency_factor"
        ]
      },
      calculation: [
        "Power Profiling: Analyze current consumption in different operating modes.",
        "Range Testing: Calculate expected communication distance based on antenna design.",
        "Data Throughput: Determine maximum payload sizes and transmission rates.",
        "Battery Sizing: Calculate required battery capacity for target operating life."
      ],
      method: [
        "BLE Stack Integration: Use Nordic SoftDevice for protocol handling.",
        "Sensor Integration: Implement I2C/SPI interfaces for environmental sensors.",
        "Power Optimization: Configure sleep modes and duty cycling.",
        "Mobile Development: Create companion app using React Native or Flutter."
      ],
      implementation: {
        tools: ["nRF Connect SDK", "J-Link Debugger", "BLE Scanner App", "Power Analyzer", "Environmental Sensors"],
        code: "// nRF52 BLE Service Implementation\n// Environmental monitoring service\nBLEService envService;\nBLECharacteristic tempChar;\nBLECharacteristic humidChar;\n\nvoid setupBLE() {\n    envService.begin();\n    tempChar.begin();\n    humidChar.begin();\n}",
        results: "Expected: Functional BLE device with sensor data transmission, optimized power consumption, and mobile app connectivity."
      },
      lessonsLearned: [
        "BLE Complexity: Protocol stack requires understanding of GAP, GATT, and ATT layers.",
        "Power Management: Duty cycling is critical for extending battery life.",
        "Antenna Design: Proper RF matching significantly affects communication range.",
        "Security: BLE security features must be properly implemented for production devices."
      ],
      nextSteps: [
        "Implement mesh networking capabilities for multi-device systems.",
        "Add over-the-air firmware update functionality.",
        "Integrate with cloud platforms for data storage and analysis.",
        "Develop production-ready enclosure and user interface."
      ]
    },
    "microcontroller-pcb-5": {
      title: "Advanced PCB Design: High-Speed Signals and EMI Mitigation (Planned)",
      date: "Planned - January 2025",
      duration: "4 weeks",
      objective: "Master advanced PCB design techniques for high-speed digital signals, mixed-signal circuits, and electromagnetic interference mitigation in microcontroller-based systems.",
      planning: [
        "Study high-speed signal integrity principles and transmission line theory.",
        "Design impedance-controlled traces and differential pairs.",
        "Implement EMI/EMC mitigation techniques and grounding strategies.",
        "Create mixed-signal PCB with microcontroller, ADC, and RF components.",
        "Validate design through simulation and prototyping."
      ],
      design: {
        description: "Advanced PCB design focuses on maintaining signal integrity in high-speed digital systems while preventing electromagnetic interference. Proper stackup design and routing techniques are crucial for reliable operation.",
        equations: [
          "Characteristic Impedance: Z_0 = √(L/C) = 87 × √(ε_r + 1.41) × ln(5.98 × h / (0.8 × w + t))",
          "Signal Rise Time: t_r = 0.35 / f_3dB for digital signals",
          "Crosstalk: V_crosstalk = (C_m / C_total) × V_signal × (1 - e^(-t/τ))",
          "EMI Radiation: E_field = (I × dl × sinθ) / (4π × ε_0 × r² × c)"
        ]
      },
      calculation: [
        "Impedance Matching: Calculate trace widths for 50Ω characteristic impedance.",
        "Signal Propagation: Determine propagation delay and timing budgets.",
        "EMI Analysis: Estimate radiated emissions and required shielding.",
        "Power Integrity: Analyze voltage ripple and decoupling capacitor placement."
      ],
      method: [
        "Stackup Design: Select appropriate dielectric materials and layer configuration.",
        "Routing Strategy: Implement length matching, via minimization, and return path optimization.",
        "EMI Testing: Use spectrum analyzer and near-field probes for emission measurement.",
        "Simulation: Employ SI/PI/EMI simulation tools for design validation."
      ],
      implementation: {
        tools: ["Altium Designer", "HyperLynx (SI Simulation)", "Spectrum Analyzer", "Near-Field Probe Set", "TDR Measurement System"],
        code: "// High-Speed Interface Configuration\n// DDR memory interface timing\n#define DDR_CLOCK_PERIOD 5.0f  // 200MHz\n#define SETUP_TIME 1.5f        // ns\n#define HOLD_TIME 1.0f         // ns",
        results: "Expected: PCB with validated signal integrity, minimal EMI emissions, and reliable high-speed operation across temperature and voltage variations."
      },
      lessonsLearned: [
        "Signal Integrity: Proper termination and impedance control prevent reflections and timing errors.",
        "EMI Control: Ground planes and shielding are essential for regulatory compliance.",
        "Design Verification: Simulation must be validated with physical measurements.",
        "Manufacturing Impact: PCB fabrication tolerances affect high-speed performance."
      ],
      nextSteps: [
        "Certify design for EMC compliance (FCC/CE standards).",
        "Optimize for manufacturing yield and cost reduction.",
        "Document design guidelines for team knowledge sharing.",
        "Scale to production volumes with quality control processes."
      ]
    },
    "microcontroller-pcb-6": {
      title: "IoT System Integration: Microcontroller, Sensors, and Cloud Connectivity (Planned)",
      date: "Planned - February 2025",
      duration: "4 weeks",
      objective: "Integrate microcontroller systems with sensors, wireless communication, and cloud platforms to create complete IoT solutions with data analytics and remote management capabilities.",
      planning: [
        "Select appropriate microcontroller and wireless technology for IoT application.",
        "Design sensor network with data acquisition and preprocessing.",
        "Implement cloud connectivity with MQTT or RESTful APIs.",
        "Develop data analytics pipeline and visualization dashboard.",
        "Ensure security and reliability for production deployment."
      ],
      design: {
        description: "IoT system integration combines embedded hardware design with cloud architecture. The focus is on creating reliable, secure, and scalable solutions that can operate autonomously with remote monitoring and control.",
        equations: [
          "Data Throughput: R_data = N_sensors × f_sample × bits_per_sample",
          "Power Budget: P_system = P_micro + P_sensors + P_radio × duty_cycle",
          "Network Latency: t_latency = t_processing + t_transmission + t_cloud_processing",
          "Battery Life: t_life = E_battery / P_avg × η_efficiency"
        ]
      },
      calculation: [
        "System Sizing: Determine required processing power and memory for data handling.",
        "Network Analysis: Calculate data transmission requirements and protocol overhead.",
        "Security Assessment: Evaluate encryption overhead and key management complexity.",
        "Cost Optimization: Balance component costs with performance and reliability requirements."
      ],
      method: [
        "Hardware Integration: Combine microcontroller, sensors, and communication modules.",
        "Firmware Development: Implement data acquisition, processing, and transmission.",
        "Cloud Platform: Set up AWS IoT, Google Cloud IoT, or Azure IoT services.",
        "Security Implementation: Add TLS encryption and device authentication.",
        "Testing: Validate system performance under various conditions and loads."
      ],
      implementation: {
        tools: ["ESP32/STM32 + WiFi/Bluetooth", "MQTT Broker", "AWS IoT Core", "Grafana Dashboard", "Security Analysis Tools"],
        code: "// IoT Device Firmware\n// Sensor data acquisition and cloud transmission\nconst char* MQTT_TOPIC = \"sensors/environment\";\n\nvoid sendSensorData() {\n    float temperature = readTemperature();\n    float humidity = readHumidity();\n    \n    String payload = \"{\\\"temp\\\":\" + String(temperature) + \",\\\"humidity\\\":\" + String(humidity) + \"}\";\n    mqttClient.publish(MQTT_TOPIC, payload.c_str());\n}",
        results: "Expected: Complete IoT system with reliable sensor data collection, secure cloud connectivity, real-time analytics dashboard, and remote management capabilities."
      },
      lessonsLearned: [
        "System Complexity: IoT integration requires coordination across hardware, firmware, and cloud components.",
        "Security Importance: End-to-end encryption and authentication are critical for production systems.",
        "Power Optimization: Duty cycling and low-power modes extend battery life significantly.",
        "Scalability: Cloud architecture must support future expansion and additional devices."
      ],
      nextSteps: [
        "Implement over-the-air firmware updates for maintenance.",
        "Add predictive maintenance algorithms using collected data.",
        "Scale system for production deployment with monitoring and alerting.",
        "Document complete system for replication and future development."
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

        {/* Images */}
        {episode.images && episode.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {episode.images.slice(0, 3).map((image: string, idx: number) => (
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
            {episode.images.length > 3 && (
              <div className="mt-4 text-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-accent hover:underline text-sm">
                      View all {episode.images.length} images
                    </button>
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
              </div>
            )}
          </motion.div>
        )}

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg max-w-none text-foreground"
        >
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-accent" />
              Project Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {episode.objective}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This {episode.duration} project began in {episode.date}, focusing on hands-on implementation and practical problem-solving in engineering design.
            </p>
          </div>

          {/* Planning & Approach */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent" />
              Planning & Initial Approach
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The project started with a structured planning phase to establish a solid foundation:
            </p>
            <ul className="space-y-2 mb-4">
              {episode.planning.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Design */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-accent" />
              Technical Design & Analysis
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {episode.design.description}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Key mathematical relationships and design equations formed the backbone of the technical approach:
            </p>
            <div className="space-y-3 mb-6">
              {episode.design.equations.map((eq: string, idx: number) => (
                <div key={idx} className="bg-muted p-4 rounded-lg border-l-4 border-accent">
                  <code className="text-sm text-foreground font-mono">{eq}</code>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Through detailed calculations and analysis, several critical parameters were determined:
            </p>
            <ul className="space-y-2 mb-4">
              {episode.calculation.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Implementation */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-accent" />
              Implementation & Results
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The implementation phase focused on translating theoretical designs into working solutions using systematic approaches:
            </p>
            <ul className="space-y-2 mb-6">
              {episode.method.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {episode.implementation.tools.map((tool: string) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Key Code Implementation</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm mb-4">
                <code className="text-foreground">{episode.implementation.code}</code>
              </pre>
              <h3 className="text-lg font-semibold text-foreground mb-2">Results Achieved</h3>
              <p className="text-muted-foreground leading-relaxed">
                {episode.implementation.results}
              </p>
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              Key Insights & Lessons Learned
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Throughout this project, several important lessons emerged that will inform future engineering work:
            </p>
            <div className="space-y-4">
              {episode.lessonsLearned.map((lesson: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{lesson}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          {episode.nextSteps && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-accent" />
                Future Directions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Based on the outcomes and insights gained, the following steps will continue this line of development:
              </p>
              <div className="space-y-3">
                {episode.nextSteps.map((step: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <span className="text-accent mt-1">→</span>
                    <span className="text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* References */}
          <div className="border-t pt-8">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent" />
              References & Resources
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This work builds upon knowledge from various technical sources and practical experiences:
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-muted-foreground">
                <span className="text-accent mt-1">•</span>
                <span>Technical documentation and datasheets from component manufacturers</span>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <span className="text-accent mt-1">•</span>
                <span>Research papers and academic articles on relevant technologies</span>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <span className="text-accent mt-1">•</span>
                <span>Online tutorials and community resources</span>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <span className="text-accent mt-1">•</span>
                <span>Practical implementation guides and best practices</span>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default EpisodeDetail;
