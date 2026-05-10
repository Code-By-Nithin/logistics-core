"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Menu, Globe, Shield, Zap, Navigation, Truck, MapPin, Phone, User, ChevronDown, CheckCircle2, QrCode, Plus, MessageSquare, Mail, MessageCircle, Share2, Link } from "lucide-react";
import ScrollCanvas from "@/components/ScrollCanvas";
import WorldMap from "@/components/WorldMap";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative text-white selection:bg-primary selection:text-black font-sans">
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
          <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center animate-pulse mb-8 shadow-[0_0_30px_rgba(250,204,21,0.3)]">
            <Truck className="w-10 h-10 text-black" />
          </div>
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
          <span className="mt-4 text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase">Loading System</span>
        </div>
      )}
      
      {/* Background Frame Sequence */}
      <ScrollCanvas />
      
      {/* Professional Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-8 py-5 flex justify-between items-center glass border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <Navigation className="w-4 h-4 text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight uppercase">Logistics<span className="text-primary font-normal">Core</span></span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-10">
          {["City Temp", "Truck Rentals", "Packers & Movers", "Two Wheelers"].map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-white/80 hover:text-primary transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-white uppercase tracking-wider">Dubai</span>
          </div>
          <button className="px-6 py-2.5 bg-white text-black font-semibold text-sm rounded hover:bg-primary transition-colors">
            Support
          </button>
          <button className="lg:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Foreground Content wrapper */}
      <div className="relative z-10 w-full">
        
        {/* ANIMATION WRAPPER */}
        <div id="animation-wrapper">
          
          {/* Section 1: Hero & Booking Form */}
          <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-24 border-b border-white/10">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-dark p-10 rounded-3xl border border-white/10 shadow-2xl"
              >
                <div className="px-4 py-1.5 rounded border border-white/20 bg-white/5 flex items-center gap-2 mb-6 w-fit">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-white text-xs font-semibold tracking-wider uppercase">Dubai Logistics Network</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                  Online Pickup Truck <br/>
                  <span className="text-primary">Rental in Dubai</span>
                </h1>
                <p className="text-lg text-zinc-300 max-w-xl mb-10">
                  Book Online Pickup Truck in Dubai for all your Transport Needs. Fast, reliable, and affordable logistics solutions.
                </p>
                <button className="px-8 py-3 bg-white text-black font-semibold rounded hover:bg-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] hover:-translate-y-1">
                  Know More
                </button>
              </motion.div>

              {/* Glass Booking Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl w-full max-w-md mx-auto lg:mx-0 shadow-2xl border border-white/20"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-primary" />
                  Book Your Truck
                </h3>
                <form className="space-y-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-zinc-400" />
                    <input type="text" placeholder="Enter Pickup Location *" className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-primary" />
                    <input type="text" placeholder="Enter Drop Location *" className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-zinc-400" />
                    <input type="text" placeholder="Enter Name *" className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-zinc-400" />
                    <input type="tel" placeholder="Enter Mobile *" className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="relative">
                    <select className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-4 pr-10 text-sm text-zinc-400 focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option value="">What best describes you? *</option>
                      <option value="personal">Personal Use</option>
                      <option value="business">Business / Commercial</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-zinc-400 pointer-events-none" />
                  </div>
                  <button type="button" className="w-full py-4 bg-primary text-black font-bold rounded-lg hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2 mt-6">
                    Get Fare Estimate <ArrowRight className="w-5 h-5" />
                  </button>
                  <div className="flex items-start gap-2 mt-4">
                    <input type="checkbox" className="mt-1 accent-primary" id="consent" />
                    <label htmlFor="consent" className="text-[10px] text-zinc-400 leading-tight">
                      By checking this, you give consent to LogisticsCore to reach out to you via phone/WhatsApp to help with booking, etc.
                    </label>
                  </div>
                </form>
              </motion.div>
            </div>
          </section>

          {/* Section 2: Fleet */}
          <section id="fleet" className="py-24 px-8 md:px-24 border-b border-white/10">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center glass-dark px-10 py-5 rounded-2xl w-fit shadow-lg border border-white/10">
                  Rent Trucks Near You in Dubai
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "Canter 3Ton", weight: "3510 Kg", price: "AED 55", type: "Heavy Commercial" },
                  { name: "Pickup 1Ton", weight: "1050 Kg", price: "AED 30", type: "Light Commercial" },
                  { name: "Car", weight: "100 Kg", price: "AED 24", type: "Personal Courier" }
                ].map((vehicle, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-3xl flex flex-col items-center text-center hover:bg-white/5 transition-all duration-300 border border-white/10 hover:border-primary/50"
                  >
                    <div className="w-24 h-24 bg-black/40 rounded-full flex items-center justify-center mb-6 border border-white/10 shadow-inner">
                      <Truck className="w-10 h-10 text-primary" />
                    </div>
                    <div className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-4 text-white">
                      Capacity: {vehicle.weight}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                    <p className="text-zinc-400 text-sm mb-6">{vehicle.type}</p>
                    <p className="text-lg font-semibold text-primary mb-6">Starting from {vehicle.price}</p>
                    <button className="w-full py-2.5 bg-black/40 border border-white/20 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1">
                      Know More
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: SEO Content & How it Works */}
          <section className="py-32 px-8 md:px-24 border-b border-white/10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass p-10 rounded-3xl border border-white/10 shadow-xl"
              >
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  Affordable Pickup Truck Rental Services
                </h2>
                <p className="text-zinc-300 leading-relaxed mb-8">
                  LogisticsCore pickup truck rental services in Dubai offer unmatched convenience with online booking through our app. Whether you need a small pickup truck rental for business purposes or personal use, our seamless process makes renting a pickup truck hassle-free. Here are some of the standout features:
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 p-4 glass-dark rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-white mb-1">Convenience with Online Truck Booking</strong>
                      <p className="text-sm text-zinc-400">Booking a goods vehicle has never been easier. Download the app, and within a few clicks, book a rental truck for your specific needs, saving time and avoiding hassle.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 glass-dark rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-white mb-1">Goods Vehicle Rental Made Easy</strong>
                      <p className="text-sm text-zinc-400">From entering locations to choosing goods types, everything is managed efficiently online with secure payment options.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 glass-dark rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-white mb-1">Book Vehicles for Shifting Household Goods</strong>
                      <p className="text-sm text-zinc-400">Take the stress out of moving by hiring reliable trucks. With our 1-ton truck, send anything, anywhere, anytime with zero hassles.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 glass-dark rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-white mb-1">Vehicles Available to Cater to Every Need</strong>
                      <p className="text-sm text-zinc-400">Diverse range of vehicles from small-scale moves to large commercial deliveries. Truck rental rates start at just AED 30 per km.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-dark p-10 rounded-3xl border border-white/10 shadow-xl flex flex-col justify-center"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Rent a Pickup Truck in Dubai with LogisticsCore</h3>
                <p className="text-zinc-300 mb-10 text-sm leading-relaxed">
                  Our services make it easy to transport goods from one place to another. Follow these simple steps, and you will have a reliable tempo for rent at your door shortly:
                </p>
                <ol className="space-y-4 text-sm text-zinc-300">
                  <li className="flex items-center gap-4 bg-black/40 p-3 rounded-lg border border-white/5"><span className="w-8 h-8 rounded bg-primary text-black flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(250,204,21,0.5)]">1</span> Download the app and register yourself.</li>
                  <li className="flex items-center gap-4 bg-black/40 p-3 rounded-lg border border-white/5"><span className="w-8 h-8 rounded bg-primary text-black flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(250,204,21,0.5)]">2</span> Enter the pickup and drop location.</li>
                  <li className="flex items-center gap-4 bg-black/40 p-3 rounded-lg border border-white/5"><span className="w-8 h-8 rounded bg-primary text-black flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(250,204,21,0.5)]">3</span> Enter the receiver's details.</li>
                  <li className="flex items-center gap-4 bg-black/40 p-3 rounded-lg border border-white/5"><span className="w-8 h-8 rounded bg-primary text-black flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(250,204,21,0.5)]">4</span> Choose the type of goods to transport.</li>
                  <li className="flex items-center gap-4 bg-black/40 p-3 rounded-lg border border-white/5"><span className="w-8 h-8 rounded bg-primary text-black flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(250,204,21,0.5)]">5</span> Select the truck as per your need.</li>
                  <li className="flex items-center gap-4 bg-black/40 p-3 rounded-lg border border-white/5"><span className="w-8 h-8 rounded bg-primary text-black flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(250,204,21,0.5)]">6</span> Confirm details and payment method.</li>
                </ol>
                <div className="mt-10 p-6 glass border border-primary/30 rounded-xl">
                  <strong className="block text-white mb-2 text-lg">Book Online Today</strong>
                  <p className="text-sm text-zinc-400">For reliable, affordable, and safe logistics solutions, rely on our efficient app-based service.</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Section 4: Map */}
          <section className="py-24 px-8 md:px-24 border-b border-white/10">
             <div className="max-w-6xl mx-auto flex flex-col items-center">
              <div className="flex justify-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center glass-dark px-10 py-5 rounded-2xl w-fit shadow-lg border border-white/10">
                  Real-Time Logistics Operations
                </h2>
              </div>
              <WorldMap />
             </div>
          </section>

          {/* Section 5: App Download & Areas Served */}
          <section className="py-32 px-8 md:px-24 border-b border-white/10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="glass-dark p-10 rounded-3xl flex flex-col justify-between items-start border border-white/10 shadow-xl">
                <div>
                  <h3 className="text-3xl font-bold mb-4 leading-tight">Download LogisticsCore for Hassle-Free Truck Rentals!</h3>
                  <p className="text-zinc-400 mb-10">Get our mobile app to start booking your orders instantly from anywhere.</p>
                </div>
                <div className="flex items-center gap-6 glass p-6 rounded-2xl border border-white/10 w-full">
                  <div className="p-3 bg-white rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                    <QrCode className="w-16 h-16 text-black" />
                  </div>
                  <div>
                    <span className="block font-bold text-white text-lg mb-1">Scan to download</span>
                    <span className="text-sm text-primary font-medium tracking-wide">Available on iOS and Android</span>
                  </div>
                </div>
              </div>

              <div className="glass p-10 rounded-3xl border border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  Areas We Serve in Dubai
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Downtown", "JLT", "International City", "Deira", "Al Qusais", 
                    "Al Quoz", "Jebel Ali", "Al Aweer", "Dubai Logistics City", 
                    "Industrial Area", "Sajaa", "City Center", "Rolla", "Rahmaniya"
                  ].map((area) => (
                    <span key={area} className="px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-sm text-zinc-300 hover:bg-primary hover:text-black hover:border-primary transition-colors cursor-default">
                      {area}
                    </span>
                  ))}
                </div>

                <div className="mt-12 border-t border-white/10 pt-10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Box className="w-6 h-6 text-primary" />
                    Other Services
                  </h3>
                  <div className="flex items-center gap-4 p-5 glass-dark rounded-xl cursor-pointer hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 shadow-lg border border-white/10 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Truck className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-semibold flex-1 text-lg group-hover:text-primary transition-colors">Two Wheelers</span>
                    <ArrowRight className="w-6 h-6 text-zinc-400 group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: FAQs */}
          <section className="py-32 px-8 md:px-24">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center glass-dark px-10 py-5 rounded-2xl w-fit shadow-lg border border-white/10">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  { q: "Does LogisticsCore provide intercity or inter-emirate service?", a: "Yes, we provide comprehensive intercity and inter-emirate logistics services across the UAE to meet your commercial and personal transport needs." },
                  { q: "How do I determine the right size and type of truck for my transport needs?", a: "You can use our in-app calculator or refer to our fleet guide (Car for <100kg, 1Ton for up to 1050kg, 3Ton for heavy cargo) to select the optimal vehicle." },
                  { q: "How long will my transport take?", a: "Transport times depend on distance and traffic, but our real-time tracking ensures you can monitor the exact ETA from pickup to delivery." }
                ].map((faq, i) => (
                  <div key={i} className="glass p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-500 cursor-pointer group overflow-hidden shadow-lg">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-white group-hover:text-primary transition-colors duration-300 text-lg">{faq.q}</h4>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Plus className="w-5 h-5 text-zinc-400 group-hover:rotate-45 group-hover:text-primary transition-all duration-300" />
                      </div>
                    </div>
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                      <div className="overflow-hidden">
                        <p className="pt-4 text-base text-zinc-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div> {/* END ANIMATION WRAPPER */}

        {/* Section 7: Modern Premium Footer */}
        <footer className="relative border-t border-white/10 pt-24 pb-8 overflow-hidden bg-black/80">
          {/* Subtle background glow for the footer */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/10 blur-[120px] pointer-events-none -z-10 rounded-full" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-8 md:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20 relative z-10">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-yellow-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.3)] border border-white/20">
                  <Navigation className="w-6 h-6 text-black" />
                </div>
                <span className="text-3xl font-bold tracking-tight uppercase text-white">Logistics<span className="text-primary font-normal">Core</span></span>
              </div>
              <p className="text-zinc-400 text-base leading-relaxed mb-8 pr-4">
                Seamless online pickup truck rentals and intelligent logistics in Dubai and across the UAE. Delivered with precision, speed, and scale.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex gap-4">
                {[
                  { Icon: Globe, href: "#" },
                  { Icon: Mail, href: "#" },
                  { Icon: MessageCircle, href: "#" },
                  { Icon: Share2, href: "#" }
                ].map((social, idx) => (
                  <a key={idx} href={social.href} className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-primary hover:border-primary hover:text-black hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all duration-300">
                    <social.Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Links Columns */}
            <div className="lg:col-span-3 lg:col-start-6">
              <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
                Truck Rental
              </h4>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"/> Rental Services Dubai</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"/> Rental Services Sharjah</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"/> Pickup 1 Ton Rental Dubai</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"/> Pickup 1 Ton Rental Sharjah</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"/> Canter 3 Ton Rental Dubai</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"/> Canter 3 Ton Rental Sharjah</a></li>
              </ul>
            </div>
            
            <div className="lg:col-span-3">
              <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
                Other Services
              </h4>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"/> Car Service Dubai</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"/> Delivery Services Dubai</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"/> Delivery Services Sharjah</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"/> Courier Services Dubai</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"/> Courier Services Sharjah</a></li>
              </ul>
            </div>
          </div>
          
          {/* Contact Bar */}
          <div className="max-w-7xl mx-auto px-8 md:px-24 mb-12 relative z-10">
            <div className="glass p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 border border-white/10 shadow-lg">
              <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
                <a href="mailto:support@logisticscore.com" className="flex items-center gap-3 p-4 bg-black/40 rounded-xl hover:bg-primary/10 border border-transparent hover:border-primary/50 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="w-5 h-5 text-zinc-400 group-hover:text-black transition-colors"/> 
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">Email Us</span>
                    <span className="font-semibold text-white group-hover:text-primary transition-colors">support@logisticscore.com</span>
                  </div>
                </a>
                <a href="tel:1800LOGISTICS" className="flex items-center gap-3 p-4 bg-black/40 rounded-xl hover:bg-primary/10 border border-transparent hover:border-primary/50 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="w-5 h-5 text-zinc-400 group-hover:text-black transition-colors"/> 
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">Call Us 24/7</span>
                    <span className="font-semibold text-white group-hover:text-primary transition-colors">1-800-LOGISTICS</span>
                  </div>
                </a>
              </div>
              <button className="w-full md:w-auto px-8 py-4 bg-primary text-black font-bold rounded-xl hover:bg-white hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                Get a Custom Quote <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 relative z-10">
            <div className="max-w-7xl mx-auto px-8 md:px-24 flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="text-sm text-zinc-500 font-medium">
                © 2026 LOGISTICS CORE. ALL RIGHTS RESERVED.
              </span>
              <div className="flex gap-8">
                <a href="#" className="text-sm text-zinc-500 font-medium hover:text-primary transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-sm text-zinc-500 font-medium hover:text-primary transition-colors duration-300">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      
    </main>
  );
}
