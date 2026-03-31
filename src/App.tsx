import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Code,
  Bot,
  Cpu,
  Palette,
  TrendingUp,
  Menu,
  X,
  ArrowRight,
  Mail,
  Phone,
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* HERO SECTION */}
      <HeroSection />

      {/* SERVICES SECTION */}
      <ServicesSection />

      {/* PRICING SECTION */}
      <PricingSection />

      {/* FOOTER / CONTACT SECTION */}
      <FooterSection />
    </div>
  );
}

export default App;

/* ========================
   NAVBAR COMPONENT
   - Sticky navigation bar
   - Mobile responsive menu
   - Smooth scroll links
======================== */
function Navbar({
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}) {
  const navLinks = ['Services', 'Pricing', 'About', 'Contact'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <img src="/AlephLogoMainWhite.png" alt="Aleph Studio" className="h-10 w-10" />
            <span className="text-2xl font-bold tracking-wider hidden sm:inline">ALEPH STUDIO</span>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToSection(link)}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wide"
              >
                {link}
              </motion.button>
            ))}
            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg text-sm font-semibold hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40"
            >
              Let's Build
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/5"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wide py-2"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg text-sm font-semibold hover:from-teal-400 hover:to-cyan-400 transition-all duration-300"
            >
              Let's Build
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

/* ========================
   HERO SECTION
   - Main landing section
   - Headline and subheadline
   - Primary and secondary CTAs
   - Animated gradient background blobs
======================== */
function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated gradient background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Web & AI Solutions <br />
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            That Scale
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Dominate your digital reach. We architect digital ecosystems for modern brands.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <button
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg text-lg font-semibold hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 shadow-2xl shadow-teal-500/30 hover:shadow-teal-500/50 flex items-center gap-2"
          >
            Let's Build Something Powerful
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300"
          >
            View Our Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* ========================
   SERVICES SECTION
   - Grid of 4 glassmorphism service cards
   - Icons and feature lists
   - Fade-in animations on scroll
======================== */
function ServicesSection() {
  const services = [
    {
      icon: <Globe size={32} />,
      title: 'Web Development',
      features: [
        'Scalable Full-Stack Web & WebApp Development',
        'Robust E-Commerce Platforms (Shopify)',
        'Complex API & 3rd-Party Integrations',
        'Performance Optimization & SEO',
      ],
    },
    {
      icon: <Bot size={32} />,
      title: 'AI Agent Solutions',
      features: [
        'Custom AI Agents & RAG Systems',
        'Conversational Voice Interfaces',
        'Advanced Data Analysis',
        'AI Integration into Existing Systems',
      ],
    },
    {
      icon: <Palette size={32} />,
      title: 'Creative Design',
      features: [
        'Strategic Brand Identity',
        'Intuitive UI/UX Design',
        'Engaging Motion Graphics & Video',
        '3D Product Visualization',
      ],
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Marketing & Growth',
      features: [
        'Multi-Channel Lead Generation',
        'Data-Driven Social Media Strategy',
        'Strategic Copywriting',
        'CRM & Email Automation',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Comprehensive Digital{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10"
            >
              {/* Icon */}
              <div className="mb-6 text-teal-400 group-hover:text-cyan-400 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-400">
                    <span className="text-teal-400 mt-1">•</span>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================
   PRICING SECTION
   - Social Media Management pricing tiers
   - Glassmorphism pricing cards
   - Flexible pricing note
======================== */
function PricingSection() {
  const pricingTiers = [
    {
      title: 'Special First Month',
      price: '₹5,000',
      subtitle: 'Get Started',
      features: [
        'Comprehensive Content Calendar',
        'Daily DM & Comment Management',
        'Active Sentiment Monitoring',
        'Day-to-Day Account Operations',
      ],
      highlight: true,
    },
    {
      title: 'Standard Tier 1',
      price: '₹6,000',
      subtitle: 'Per Month',
      features: [
        '2 Image Posts per Week',
        'Comprehensive Content Calendar',
        'Daily DM & Comment Management',
        'Active Sentiment Monitoring',
        'Day-to-Day Account Operations',
      ],
      highlight: false,
    },
    {
      title: 'Standard Tier 2',
      price: '₹7,000',
      subtitle: 'Per Month',
      features: [
        '2 Image Posts per Week',
        '1 Reel Post per Week',
        'Comprehensive Content Calendar',
        'Daily DM & Comment Management',
        'Active Sentiment Monitoring',
        'Day-to-Day Account Operations',
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Flexible Social Media{' '}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Upliftment
            </span>
          </h2>
          <p className="text-xl text-gray-400 mt-4">
            Comprehensive social media management tailored to your needs
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-8 rounded-2xl border transition-all duration-300 ${
                tier.highlight
                  ? 'bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border-teal-400/30 shadow-2xl shadow-teal-500/20'
                  : 'bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              {/* Tier Title */}
              <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
              <p className="text-sm text-gray-400 mb-6">{tier.subtitle}</p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  {tier.price}
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-300">
                    <span className="text-teal-400 mt-1">✓</span>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Pricing Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-400 italic"
        >
          Pricing is fully flexible; discuss your custom needs with us.
        </motion.p>
      </div>
    </section>
  );
}

/* ========================
   FOOTER / CONTACT SECTION
   - Contact information
   - Contact form
   - Copyright notice
======================== */
function FooterSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will contact you soon.');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <footer id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Ready to Build{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Something Powerful?
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Let's discuss how we can elevate your digital presence and drive real results for
                your business.
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300">
              <div className="p-3 bg-teal-500/20 rounded-lg text-teal-400">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Call Us</p>
                <a
                  href="tel:+916290163992"
                  className="text-lg font-semibold hover:text-teal-400 transition-colors"
                >
                  +91 6290163992
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300">
              <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email Us</p>
                <a
                  href="mailto:alephstudiosofficial@gmail.com"
                  className="text-lg font-semibold hover:text-cyan-400 transition-colors break-all"
                >
                  alephstudiosofficial@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl space-y-6"
            >
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              {/* Service Select */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-white"
                >
                  <option value="" className="bg-slate-900 text-white">Select a service</option>
                  <option value="web" className="bg-slate-900 text-white">Web Development</option>
                  <option value="ai" className="bg-slate-900 text-white">AI Agent Solutions</option>
                  <option value="design" className="bg-slate-900 text-white">Creative Design</option>
                  <option value="marketing" className="bg-slate-900 text-white">Marketing & Growth</option>
                  <option value="social" className="bg-slate-900 text-white">Social Media Management</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg text-lg font-semibold hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center pt-8 border-t border-white/10"
        >
          <p className="text-gray-400">
            © 2026 Aleph Studio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
