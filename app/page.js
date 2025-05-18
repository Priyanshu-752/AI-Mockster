"use client"

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import { Rocket, Bot, Video, Mic, Edit, Share2, Star, Check, Users, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Hero from "./components/Hero";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer at Google",
    image: "/head.png",
    content: "This platform helped me land my dream job at Google! The AI feedback was incredibly accurate and helped me improve my technical interview skills.",
    initials: "JD"
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager at Microsoft",
    image: "/head.png",
    content: "After 5 failed interviews, I tried Ai Mockster and passed my next interview with flying colors. The personalized feedback made all the difference.",
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Data Scientist at Amazon",
    image: "/head.png",
    content: "The AI interviewer asked me questions that were almost identical to my actual interview. I felt so prepared and confident. Highly recommend!",
    initials: "MC"
  }
];

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    try {
      await loadFull(engine);
    } catch (err) {
      console.error("Error initializing particles:", err);
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background to-secondary">
      <div className="absolute inset-0 z-[-10] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      
      <Header/>
      <Hero />

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-background to-secondary py-16 relative overflow-hidden">
        <div className="absolute top-0 inset-0 opacity-10 bg-center"></div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10"
        >
          {[{num: "10K+", text: "Interviews Conducted"}, 
            {num: "95%", text: "Success Rate"}, 
            {num: "50+", text: "Job Categories"}, 
            {num: "24/7", text: "Available Support"}].map((stat, index) => (
            <motion.div key={index} variants={fadeIn} className="text-center">
              <h3 className="text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">{stat.num}</h3>
              <p className="text-muted-foreground font-medium">{stat.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 mx-auto max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 text-transparent bg-clip-text">How It Works</motion.h2>
          <motion.p variants={fadeIn} className="text-muted-foreground mb-16 text-lg">Get interview-ready in just 3 simple steps</motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{icon: Mic, title: "Practice with AI", desc: "Our AI interviewer asks realistic questions"},
              {icon: Edit, title: "Get Instant Feedback", desc: "Receive detailed analysis of your answers"},
              {icon: Share2, title: "Share & Improve", desc: "Track progress and share with mentors"}].map((feature, index) => (
              <motion.div key={index} variants={fadeIn} whileHover={{ y: -10 }} className="h-full">
                <Card className="hover:shadow-xl transition-all h-full border-2 border-transparent hover:border-primary/20">
                  <CardHeader>
                    <div className="bg-primary/10 p-4 rounded-full w-fit mb-6 mx-auto">
                      <feature.icon className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base mt-2">{feature.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-background to-secondary py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 inset-0 opacity-5 bg-center"></div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto relative z-10"
        >
          <motion.h2 variants={fadeIn} className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-foreground/80 text-transparent bg-clip-text">What Our Users Say</motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-xl transition-all border-2 border-transparent hover:border-primary/20">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar className="h-14 w-14 border-2 border-primary/20">
                        <AvatarImage src={testimonial.image} />
                        <AvatarFallback>{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <div className="flex text-yellow-400 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base italic">
                      "{testimonial.content}"
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 mx-auto max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-foreground to-foreground/80 text-transparent bg-clip-text">Simple, Transparent Pricing</motion.h2>

          <motion.p variants={fadeIn} className="text-muted-foreground text-lg">Choose the plan that fits your needs</motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeIn} whileHover={{ y: -10 }}>
            <Card className="border-2 hover:border-primary transition-all h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Free Trial</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-4">
                  Perfect for trying out the platform
                </CardDescription>
              </CardHeader>
              <div className="p-6 space-y-4">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span>3 Practice Interviews</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span>Basic AI Feedback</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span>Interview History</span>
                </div>
                <Button className="w-full mt-6 group">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn} whileHover={{ y: -10 }}>
            <Card className="border-2 border-primary relative hover:shadow-xl transition-all h-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</div>
              <CardHeader>
                <CardTitle className="text-2xl">Pro</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-4">
                  For serious job seekers
                </CardDescription>
              </CardHeader>
              <div className="p-6 space-y-4">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span>Unlimited Interviews</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span>Advanced AI Feedback</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span>Custom Interview Scenarios</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span>Progress Analytics</span>
                </div>
                <Button className="w-full mt-6 group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn} whileHover={{ y: -10 }}>
            <Card className="border-2 hover:border-primary transition-all h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-4">
                  For teams and organizations
                </CardDescription>
              </CardHeader>
              <div className="p-6 space-y-4">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span>Everything in Pro</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span>Team Management</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span>Custom Branding</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span>Priority Support</span>
                </div>
                <Button className="w-full mt-6 group">
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-background to-secondary py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 inset-0 opacity-5 bg-center"></div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto relative z-10"
        >
          <motion.h2 variants={fadeIn} className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-foreground/80 text-transparent bg-clip-text">Frequently Asked Questions</motion.h2>
          
          <motion.div variants={fadeIn} className="space-y-4 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="bg-background rounded-lg shadow-sm">
              <AccordionItem value="item-1" className="border-b border-border">
                <AccordionTrigger className="py-5 px-6 hover:no-underline hover:bg-secondary rounded-t-lg text-lg font-medium">How does the AI interview process work?</AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-2 text-muted-foreground">
                  Our AI interviewer uses advanced natural language processing to conduct realistic interview conversations. It adapts to your responses and provides detailed feedback on your answers, communication style, and areas for improvement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-border">
                <AccordionTrigger className="py-5 px-6 hover:no-underline hover:bg-secondary text-lg font-medium">What types of interviews are supported?</AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-2 text-muted-foreground">
                  We support various interview types including technical interviews, behavioral interviews, leadership interviews, and industry-specific interviews across multiple job roles and experience levels.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-border">
                <AccordionTrigger className="py-5 px-6 hover:no-underline hover:bg-secondary text-lg font-medium">Can I practice for specific companies?</AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-2 text-muted-foreground">
                  Yes! Our Pro and Enterprise plans allow you to customize interview scenarios based on specific companies, roles, and industries. The AI adapts its questions and feedback to match the company's known interview style.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-border">
                <AccordionTrigger className="py-5 px-6 hover:no-underline hover:bg-secondary text-lg font-medium">How accurate is the AI feedback?</AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-2 text-muted-foreground">
                  Our AI feedback system has been trained on thousands of real interviews and is continuously updated. It provides accurate, actionable feedback that has helped 95% of our users improve their interview performance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b-0">
                <AccordionTrigger className="py-5 px-6 hover:no-underline hover:bg-secondary rounded-b-lg text-lg font-medium">Can I cancel my subscription anytime?</AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-2 text-muted-foreground">
                  Yes, you can cancel your subscription at any time. We offer a no-questions-asked refund policy within the first 14 days of your subscription.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Ai Mockster</h3>
            <p className="text-gray-400 mb-6">Your personal AI interview coach helping you land your dream job.</p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors cursor-pointer">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
              </div>
              <div className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors cursor-pointer">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </div>
              <div className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors cursor-pointer">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Product</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-primary transition-colors cursor-pointer">Features</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Pricing</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Testimonials</li>
              <li className="hover:text-primary transition-colors cursor-pointer">FAQ</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-primary transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Terms of Service</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Cookie Policy</li>
              <li className="hover:text-primary transition-colors cursor-pointer">GDPR</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 Ai Mockster. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );}
