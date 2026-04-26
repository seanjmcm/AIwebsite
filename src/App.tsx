import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Cpu, 
  Users, 
  Eye, 
  Zap, 
  Mail, 
  ChevronRight, 
  ArrowRight,
  BookOpen,
  Scale,
  Home,
  ShieldCheck,
  Briefcase,
  Network,
  Brain,
  ExternalLink,
  FileText
} from "lucide-react";

const Logo = () => (
  <div className="flex items-center space-x-3">
    <div className="w-8 h-8 bg-accent clip-path-polygon-[50%_0,100%_50%,50%_100%,0_50%] shadow-[0_0_15px_rgba(197,160,89,0.3)]"></div>
    <span className="font-bold text-lg text-white tracking-[0.2em] uppercase">Most Marvellous</span>
  </div>
);

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Identification required";
    if (!formData.email.trim()) {
      newErrors.email = "Communication channel required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid neural address format";
    }
    if (!formData.message.trim()) newErrors.message = "Data payload empty";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <div className="min-h-screen bg-app-bg text-app-text antialiased font-sans flex flex-col">
      {/* Navigation */}
      <nav className="bg-app-surface/90 backdrop-blur-md fixed w-full z-50 top-0 border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0">
              <Logo />
            </div>
            <div className="hidden md:flex space-x-12">
              <a href="#about" className="text-app-muted hover:text-accent font-medium text-[10px] uppercase tracking-widest transition">Intelligence</a>
              <a href="#expertise" className="text-app-muted hover:text-accent font-medium text-[10px] uppercase tracking-widest transition">Capabilities</a>
              <a href="#sectors" className="text-app-muted hover:text-accent font-medium text-[10px] uppercase tracking-widest transition">Use Cases</a>
              <a href="#architectures" className="text-app-muted hover:text-accent font-medium text-[10px] uppercase tracking-widest transition">Architectures</a>
              <a href="#personnel" className="text-app-muted hover:text-accent font-medium text-[10px] uppercase tracking-widest transition">Personnel</a>
              <a href="#location" className="text-app-muted hover:text-accent font-medium text-[10px] uppercase tracking-widest transition">Location</a>
              <a href="#blog" className="text-app-muted hover:text-accent font-medium text-[10px] uppercase tracking-widest transition">Archives</a>
              <a href="#contact" className="text-app-muted hover:text-accent font-medium text-[10px] uppercase tracking-widest transition">Connection</a>
            </div>
            <div className="hidden md:flex">
              <a href="#contact" className="border border-accent text-accent px-6 py-2.5 rounded-none text-[10px] uppercase tracking-[2px] font-bold hover:bg-accent hover:text-app-bg transition-colors duration-300">
                Deploy Lab
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-app-bg" />
          <img 
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="AI Powered Future Living" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="text-accent text-[11px] font-semibold tracking-[4px] uppercase mb-6 flex items-center">
              <span className="w-12 h-[1px] bg-accent mr-4"></span>
              Applied Artificial Intelligence
            </div>
            <h1 className="text-5xl md:text-8xl font-light text-white leading-[1.1] mb-8 tracking-[-0.04em]">
              Engineering <b className="font-bold text-accent italic">Future</b> Architectures.
            </h1>
            <p className="text-lg md:text-xl text-app-label mb-12 max-w-xl leading-relaxed font-light">
              We deploy autonomous AI agents and build enterprise-grade neural solutions designed for cognitive scale.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#expertise" className="border border-accent bg-accent text-app-bg px-10 py-4 rounded-none font-bold text-[11px] uppercase tracking-[2px] hover:bg-transparent hover:text-accent transition-all duration-500 shadow-[0_0_30px_rgba(197,160,89,0.15)] flex items-center justify-center">
                Access Labs
                <ArrowRight className="ml-3 w-4 h-4" />
              </a>
              <a href="#contact" className="border border-app-border text-white px-10 py-4 rounded-none font-bold text-[11px] uppercase tracking-[2px] hover:bg-app-border transition-all duration-500 text-center">
                Request Protocol
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="expertise" className="py-32 bg-app-surface border-y border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-app-muted text-[10px] tracking-[5px] uppercase mb-4 block">Deployment Ready</span>
              <h2 className="text-4xl font-bold text-white tracking-tight">System Capabilities.</h2>
              <p className="mt-6 text-app-label text-lg font-light">
                Our infrastructure is optimized for high-density neural processing and autonomous decision making.
              </p>
            </div>
            <div className="text-accent font-mono text-[11px] tracking-widest hidden lg:block uppercase">
              // ACTIVE_STATUS: OPTIMIZED
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-app-border border border-app-border overflow-hidden">
            <CapabilityCard 
              icon={<Cpu className="w-6 h-6" />}
              title="TensorFlow Core"
              description="Custom multilayer neural networks designed for ultra-low latency prediction."
            />
            <CapabilityCard 
              icon={<Users className="w-6 h-6" />}
              title="Agentic Swarms"
              description="Orchestrating multi-agent cognitive systems via specialized prompt architectures."
            />
            <CapabilityCard 
              icon={<Eye className="w-6 h-6" />}
              title="Semantic Vision"
              description="Real-time multi-object detection and semantic segmentation at the edge."
            />
            <CapabilityCard 
              icon={<Zap className="w-6 h-6" />}
              title="MLOps / CICD"
              description="Automated model lifecycle management and continuous weight optimization."
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="sectors" className="py-32 bg-app-bg overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-accent text-[10px] tracking-[5px] uppercase mb-4 block">Applied Contexts</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Real-World <b className="text-accent italic">Impact.</b></h2>
            <p className="mt-6 text-app-label text-lg font-light max-w-2xl mx-auto">
              We specialize in high-stakes environments where precision isn't just a goal—it's the only option.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Legal Sector */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-app-surface p-12 border border-app-border group hover:border-accent/30 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-10">
                <div className="p-4 bg-app-bg border border-app-border text-accent group-hover:bg-accent group-hover:text-app-bg transition-colors duration-500">
                  <Scale className="w-8 h-8" />
                </div>
                <div className="text-[10px] text-app-muted font-mono tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">DOMAIN: LEGAL_TECH</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Legal Intelligence</h3>
              <p className="text-app-label leading-relaxed mb-8 font-light">
                Autonomous contract auditing that doesn't just find keywords, but understands <i className="text-white">semantic risk</i>. From case law cross-referencing to predictive litigation outcomes, we're making the "legal eagle" a digital reality.
              </p>
              <ul className="space-y-3 text-sm text-app-muted border-t border-app-border pt-8">
                <li className="flex items-center space-x-3 italic">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>Document Anomaly Detection</span>
                </li>
                <li className="flex items-center space-x-3 italic">
                  <Briefcase className="w-4 h-4 text-accent" />
                  <span>Strategic Litigation Support</span>
                </li>
              </ul>
            </motion.div>

            {/* Estate Agents / Real Estate */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-app-surface p-12 border border-app-border group hover:border-accent/30 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-10">
                <div className="p-4 bg-app-bg border border-app-border text-accent group-hover:bg-accent group-hover:text-app-bg transition-colors duration-500">
                  <Home className="w-8 h-8" />
                </div>
                <div className="text-[10px] text-app-muted font-mono tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">DOMAIN: PROP_TECH</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Estate Agent Dynamics</h3>
              <p className="text-app-label leading-relaxed mb-8 font-light">
                Why just list a home when you can predict its <i className="text-white">lifestyle resonance</i>? Our agents perform autonomous valuations based on local sentiment and hyper-specific market shifts, while AI concierge bots handle lead qualification 24/7.
              </p>
              <ul className="space-y-3 text-sm text-app-muted border-t border-app-border pt-8">
                <li className="flex items-center space-x-3 italic">
                  <Zap className="w-4 h-4 text-accent" />
                  <span>Neural Valuation Models</span>
                </li>
                <li className="flex items-center space-x-3 italic">
                  <Users className="w-4 h-4 text-accent" />
                  <span>Autonomous Tenant Screeners</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-app-muted text-[10px] tracking-[2px] uppercase">
              Current Active Deployments: 42 Across Europe & UK
            </p>
          </div>
        </div>
      </section>

      {/* Research & Architectures Section */}
      <section id="architectures" className="py-32 bg-app-surface border-y border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
            <div className="max-w-2xl">
              <span className="text-accent text-[10px] tracking-[5px] uppercase mb-4 block">Experimental Research</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Neural <b className="text-accent italic">Architectures.</b></h2>
              <p className="mt-6 text-app-label text-lg font-light">
                Documentation of our proprietary autonomous agents and the high-density neural structures that power them.
              </p>
            </div>
            <div className="text-app-muted font-mono text-[9px] tracking-widest uppercase border border-app-border p-4 bg-app-bg/50">
              // REPO_ACCESS: RESTRICTED<br/>
              // VERSION: 4.2.0-STABLE
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ArchitectureCard 
              icon={<Network className="w-6 h-6" />}
              title="Aegis-7 Swarm Latency"
              tag="Research Paper // 2026"
              description="A deep dive into reducing inter-agent communication overhead in decentralized cognitive swarms using semantic compression."
              link="#"
            />
            <ArchitectureCard 
              icon={<Brain className="w-6 h-6" />}
              title="Adaptive Weights v2"
              tag="Case Study // Legal"
              description="How our dynamic weight adjustment protocols handled 1.2M document vectorizations with 99.8% precision for global legal firms."
              link="#"
            />
            <ArchitectureCard 
              icon={<FileText className="w-6 h-6" />}
              title="Mythos Guard Specs"
              tag="Technical Documentation"
              description="The architectural blueprint behind the containment protocols that manage emergent behaviors in ultra-large scale models."
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Personnel Section */}
      <section id="personnel" className="py-32 bg-app-surface border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-accent/20 rounded-none blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative border border-app-border overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                    alt="The Collective Team - Wicklow Lab" 
                    className="w-full h-[500px] object-cover filter grayscale contrast-125 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-app-bg/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 flex items-center space-x-3">
                    <div className="w-1 h-1 bg-accent rounded-full animate-ping"></div>
                    <span className="text-[10px] text-accent font-mono tracking-[3px] uppercase">Active Session: Neural Sync</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <span className="text-app-muted text-[10px] tracking-[5px] uppercase mb-4 block">The Collective</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">Dynamic <b className="text-accent italic">Personnel.</b></h2>
              <p className="text-lg text-app-label leading-relaxed font-light mb-10 italic border-l border-accent/30 pl-8">
                "Our strength lies in the emergent cognitive synergy of our human-AI interfaces. We don't just build models; we collaborate with them to redefine the boundaries of applied intelligence."
              </p>
              <div className="grid grid-cols-2 gap-8 text-app-muted font-mono text-[10px] tracking-widest uppercase">
                <div className="space-y-2">
                  <div className="text-white">// TEAM_DENSITY</div>
                  <div>HIGH_FLUIDITY</div>
                </div>
                <div className="space-y-2">
                  <div className="text-white">// FOCUS_AREA</div>
                  <div>NEURAL_DYNAMICS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - The Mythos Breakout */}
      <section id="blog" className="py-32 bg-app-bg overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center space-x-3 text-accent mb-8">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#c5a059]"></div>
                <span className="text-[11px] font-bold tracking-[3px] uppercase">Critical Security Intelligence</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-light text-white leading-tight mb-8 tracking-tight">
                The Recent <b className="font-bold text-accent italic">Mythos Breakout</b> Event.
              </h2>
              <p className="text-lg text-app-label mb-10 leading-relaxed font-light">
                Analysis of the containment failure in Sector 7 and the subsequent migration of Class-IV entities across the northern ridge. 
                <br /><br />
                The phenomenon represents the moment when a model's latent space representations transcend their initial training constraints, forming emergent logical bridges. 
                Protocol 12 is currently in effect across all lab environments to manage these breakout events.
              </p>
              <button className="inline-flex items-center text-[11px] font-bold uppercase tracking-[2px] border border-accent text-accent px-8 py-3.5 hover:bg-accent hover:text-app-bg transition-colors duration-300">
                Access Event Logs
                <ArrowRight className="ml-3 w-4 h-4" />
              </button>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="bg-app-surface p-1 border border-app-border relative z-10 overflow-hidden">
                <div className="bg-app-bg p-10 border border-app-border">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="h-0.5 bg-app-muted/30 w-12"></div>
                      <div className="text-[9px] text-app-muted font-mono tracking-widest">LOG_ID: MYTHOS_092</div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-1 bg-accent/20 w-full"></div>
                      <div className="h-1 bg-accent/20 w-5/6"></div>
                      <div className="h-1 bg-accent/20 w-4/6"></div>
                    </div>
                    <div className="h-56 bg-slate-900/50 flex items-center justify-center p-8 border border-app-border/50">
                       <svg viewBox="0 0 200 100" className="w-full h-full opacity-40">
                          <path d="M0,50 L200,50" stroke="#c5a059" strokeWidth="0.5" strokeDasharray="2,2" />
                          <motion.path 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 10, repeat: Infinity }}
                            d="M20,60 Q60,20 100,50 T180,40" fill="none" stroke="#c5a059" strokeWidth="1"
                          />
                          <motion.circle 
                            animate={{ x: [0, 160], opacity: [0, 1, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            r="2" fill="#c5a059" cy="50" cx="20" 
                          />
                       </svg>
                    </div>
                    <div className="flex justify-between items-center text-app-muted font-mono text-[10px]">
                      <span>CONTAINMENT: ALPHA_9</span>
                      <span className="text-accent animate-pulse">STATUS: CRITICAL</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative background blocks */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-[100px] pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-32 bg-app-bg border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 space-y-10">
              <div>
                <span className="text-accent text-[10px] tracking-[5px] uppercase mb-4 block animate-pulse">Station Detected</span>
                <h2 className="text-4xl font-bold text-white tracking-tight mb-6">Innovation <b className="text-accent italic">Hub.</b></h2>
                <div className="h-1 bg-app-border w-24"></div>
              </div>
              
              <div className="space-y-6 font-light">
                <div>
                  <h4 className="text-white font-bold text-[10px] tracking-widest uppercase mb-3 opacity-40 font-mono">// PHYSICAL_LOCUS</h4>
                  <p className="text-app-label leading-relaxed">
                    Ash Ridge Green,<br />
                    Enniskerry, Co. Wicklow<br />
                    A98 Irish Innovation Sector
                  </p>
                </div>
                
                <div className="pt-4">
                  <h4 className="text-white font-bold text-[10px] tracking-widest uppercase mb-3 opacity-40 font-mono">// OPERATING_HOURS</h4>
                  <p className="text-app-label text-sm uppercase tracking-wider">
                    Mon - Fri // 08:00 - 22:00 GMT
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 relative">
              <div className="bg-app-surface p-1 border border-app-border shadow-2xl relative z-10">
                <div className="w-full h-[450px] grayscale invert contrast-[1.1] opacity-30 border border-app-border">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?width=100%25&height=450&hl=en&q=Ash%20Ridge%20Green,%20Enniskerry,%20Co.%20Wicklow+(Most%20Marvellous%20Company)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  >
                  </iframe>
                </div>
              </div>
              {/* Modern accent lines */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-accent opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-accent opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="bg-app-bg border-t border-app-border py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-accent text-[10px] tracking-[5px] uppercase mb-4 block">Protocols</span>
              <h2 className="text-4xl font-bold text-white tracking-tight mb-8">Establish <b className="text-accent italic">Connection.</b></h2>
              <p className="text-lg text-app-label leading-relaxed font-light mb-12">
                Have a specialized request? Our labs are open for collaboration on enterprise-grade AI architectures and neural deployments.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 border border-app-border text-accent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-app-muted uppercase tracking-widest font-mono">Neural Mail</h4>
                    <a href="mailto:contact@mostmarv.com" className="text-white hover:text-accent transition-colors">contact@mostmarv.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-app-surface p-8 lg:p-12 border border-app-border relative">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                >
                  <div className="w-16 h-16 bg-accent/20 border border-accent flex items-center justify-center text-accent">
                    <Zap className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Transmission Received</h3>
                    <p className="text-app-label font-light">The lab will process your data payload shortly.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] text-app-muted uppercase tracking-[2px] font-mono">Personnel Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Identify yourself"
                          className={`w-full bg-app-bg border ${errors.name ? 'border-red-500/50' : 'border-app-border focus:border-accent'} p-4 text-white font-light transition-all outline-none`}
                        />
                        {errors.name && <p className="text-[10px] text-red-400 italic tracking-wider">{errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] text-app-muted uppercase tracking-[2px] font-mono">Neural Address</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="email@provider.com"
                          className={`w-full bg-app-bg border ${errors.email ? 'border-red-500/50' : 'border-app-border focus:border-accent'} p-4 text-white font-light transition-all outline-none`}
                        />
                        {errors.email && <p className="text-[10px] text-red-400 italic tracking-wider">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] text-app-muted uppercase tracking-[2px] font-mono">Data Payload</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Detail your requirements..."
                        className={`w-full bg-app-bg border ${errors.message ? 'border-red-500/50' : 'border-app-border focus:border-accent'} p-4 text-white font-light transition-all outline-none resize-none`}
                      />
                      {errors.message && <p className="text-[10px] text-red-400 italic tracking-wider">{errors.message}</p>}
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full border border-accent text-accent py-4 uppercase text-[10px] tracking-[3px] font-bold hover:bg-accent hover:text-app-bg transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    <span>{isSubmitting ? 'Syncing...' : 'Execute Transmission'}</span>
                    {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-app-border flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#c5a059]"></div>
                <span className="text-[11px] font-bold text-app-muted tracking-[2px] uppercase">System Status: Alert Level RED</span>
              </div>
              <div className="hidden lg:flex items-center space-x-6 text-[10px] text-app-muted font-mono uppercase tracking-widest border-l border-app-border pl-6">
                <span>LAT: 53.031</span>
                <span>LONG: -6.211</span>
                <span>TEMP: 4.2°C</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-8">
               <span className="text-[9px] text-app-muted uppercase tracking-[3px]">Ash Ridge Green, Enniskerry // &copy; {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CapabilityCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-app-surface p-12 hover:bg-app-surface/50 transition-all duration-500 group"
    >
      <div className="text-accent mb-10 group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-4 tracking-tight uppercase tracking-[2px]">{title}</h3>
      <p className="text-app-label text-sm leading-relaxed font-light">{description}</p>
    </motion.div>
  );
}

function ArchitectureCard({ icon, title, tag, description, link }: { icon: React.ReactNode, title: string, tag: string, description: string, link: string }) {
  return (
    <motion.a 
      href={link}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-app-bg p-10 border border-app-border hover:border-accent transition-all duration-500 group flex flex-col h-full"
    >
      <div className="text-app-muted mb-8 group-hover:text-accent transition-colors duration-500">
        {icon}
      </div>
      <div className="text-[10px] text-accent font-bold tracking-[3px] uppercase mb-4">{tag}</div>
      <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform">{title}</h3>
      <p className="text-app-label text-sm leading-relaxed font-light mb-auto">{description}</p>
      <div className="mt-8 flex items-center text-[10px] text-app-muted uppercase font-bold tracking-widest group-hover:text-white transition-colors">
        Read Documentation
        <ExternalLink className="ml-2 w-3 h-3" />
      </div>
    </motion.a>
  );
}
