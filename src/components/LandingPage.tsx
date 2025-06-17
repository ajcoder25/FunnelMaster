"use client";

import { Button } from "../components/ui/button";
import Image from "next/image";

import { HeroGeometric } from "../components/ui/shape-landing-hero";
import { TestimonialsAnimations } from "@/components/ui/testimonials-animations";
import Footer from "./Footer";

import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroGeometric
        title1="Welcome to FunnelMaster "
      />
      <section
  className="w-full py-20 px-4 bg-[#020203] dark:bg-[#020203] flex flex-col items-center border-t border-b border-[#28244a]/70 shadow-[0_8px_32px_0_rgba(44,44,84,0.15)]"
>
  <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center text-white">
    ✨ Our Core Features
  </h2>
  <p className="text-base sm:text-lg text-gray-300 max-w-2xl mb-12 text-center">
    We help high-ticket coaches scale smarter — with powerful analytics and AI-backed tools designed to boost conversions and revenue.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
        {/* Animate cards with Framer Motion */}
        
    {/* Funnel Dashboard Card */}
    <motion.div
            className="relative rounded-3xl p-10 bg-[#020203]/95 border border-[#28244a] flex flex-col items-center text-center group overflow-hidden shadow-lg ring-1 ring-indigo-800/40 transition-all duration-300 ease-[cubic-bezier(.4,2,.3,1)] hover:scale-[1.035] hover:shadow-[0_8px_40px_8px_rgba(99,102,241,0.35),0_1.5px_8px_0_rgba(255,255,255,0.10)] hover:ring-2 hover:ring-indigo-400/70 hover:border-indigo-400/60 hover:bg-[#23235b]/90 backdrop-blur-[2.5px]"
            style={{boxShadow: '0 0 30px 0 #6d5dfc44'}}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
      <div className="text-4xl mb-3">📊</div>
      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">Funnel Dashboard</h3>
      <p className="text-base text-indigo-200 font-medium mb-6">See every step of your client journey, from first click to final payment.</p>
      <ul className="text-left text-gray-200 text-sm space-y-1">
        <li>⭐ 3D Funnel View</li>
        <li>⭐ Conversion & Revenue Metrics</li>
        <li>⭐ Lead & Booking Analytics</li>
        <li>⭐ Product-wise Payment Tracking</li>
      </ul>
    </motion.div>
    {/* Video Attribution Card */}
    <motion.div
            className="relative rounded-3xl p-10 bg-[#020203]/95 border border-[#28244a] flex flex-col items-center text-center group overflow-hidden shadow-lg ring-1 ring-indigo-800/40 transition-all duration-300 ease-[cubic-bezier(.4,2,.3,1)] hover:scale-[1.035] hover:shadow-[0_8px_40px_8px_rgba(99,102,241,0.35),0_1.5px_8px_0_rgba(255,255,255,0.10)] hover:ring-2 hover:ring-indigo-400/70 hover:border-indigo-400/60 hover:bg-[#23235b]/90 backdrop-blur-[2.5px]"
            style={{boxShadow: '0 0 30px 0 #fcba5d44'}}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
      <div className="text-4xl mb-3">🎥</div>
      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">Video Attribution</h3>
      <p className="text-base text-indigo-200 font-medium mb-6">Discover which YouTube videos drive your highest revenue and leads.</p>
      <ul className="text-left text-gray-200 text-sm space-y-1">
        <li>⭐ ROI per Video & View</li>
        <li>⭐ Attribution Flow Diagrams</li>
        <li>⭐ Revenue per View Calculation</li>
        <li>⭐ High-Converting Content Insights</li>
      </ul>
    </motion.div>
    {/* Growth Trends Card */}
    <motion.div
            className="relative rounded-3xl p-10 bg-[#020203]/95 border border-[#28244a] flex flex-col items-center text-center group overflow-hidden shadow-lg ring-1 ring-indigo-800/40 transition-all duration-300 ease-[cubic-bezier(.4,2,.3,1)] hover:scale-[1.035] hover:shadow-[0_8px_40px_8px_rgba(99,102,241,0.35),0_1.5px_8px_0_rgba(255,255,255,0.10)] hover:ring-2 hover:ring-indigo-400/70 hover:border-indigo-400/60 hover:bg-[#23235b]/90 backdrop-blur-[2.5px]"
            style={{boxShadow: '0 0 30px 0 #5dfcba44'}}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
      <div className="text-4xl mb-3">📈</div>
      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">Growth Trends</h3>
      <p className="text-base text-indigo-200 font-medium mb-6">Spot growth, drop-offs, and opportunities instantly with clear analytics.</p>
      <ul className="text-left text-gray-200 text-sm space-y-1">
        <li>⭐ Lead & Revenue Growth Charts</li>
        <li>⭐ Drop-off Detection</li>
        <li>⭐ Performance Comparison Tables</li>
        <li>⭐ Funnel Optimization Signals</li>
      </ul>
    </motion.div>
    {/* AI Assistant Card */}
    <motion.div
            className="relative rounded-3xl p-10 bg-[#020203]/95 border border-[#28244a] flex flex-col items-center text-center group overflow-hidden shadow-lg ring-1 ring-indigo-800/40 transition-all duration-300 ease-[cubic-bezier(.4,2,.3,1)] hover:scale-[1.035] hover:shadow-[0_8px_40px_8px_rgba(99,102,241,0.35),0_1.5px_8px_0_rgba(255,255,255,0.10)] hover:ring-2 hover:ring-indigo-400/70 hover:border-indigo-400/60 hover:bg-[#23235b]/90 backdrop-blur-[2.5px]"
            style={{boxShadow: '0 0 30px 0 #fc5dfc44'}}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
      <div className="text-4xl mb-3">🤖</div>
      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">AI Assistant</h3>
      <p className="text-base text-indigo-200 font-medium mb-6">Get instant, actionable recommendations to supercharge your funnel.</p>
      <ul className="text-left text-gray-200 text-sm space-y-1">
        <li>⭐ Smart Monthly Summaries</li>
        <li>⭐ Actionable Recommendations</li>
        <li>⭐ Forecasting & Trend Predictions</li>
        <li>⭐ GPT-Powered Funnel Insights</li>
      </ul>
    </motion.div>
  </div>

      {/* Testimonials Section */}
      <section className="w-full flex justify-center items-center py-12" style={{ background: '#020203' }}>
        <div className="w-full max-w-6xl">
          <TestimonialsAnimations
            testimonials={[
              {
                image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                text: "FunnelMaster has completely transformed the way I build and optimize funnels. The AI-driven insights and actionable recommendations are a game-changer for my business!", 
                name: 'Alice Johnson',
                username: '@alicejohnson',
                social: 'https://i.imgur.com/VRtqhGC.png'
              },
              {
                image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                text: 'FunnelMaster is hands-down the most innovative platform I have ever used. The forecasting tools and GPT-powered insights have given my team a huge competitive edge!',
                name: 'David Smith',
                username: '@davidsmith',
                social: 'https://i.imgur.com/VRtqhGC.png'
              },
              {
                image: 'https://i.imgur.com/kaDy9hV.jpeg',
                text: "I can’t imagine managing my marketing funnels without FunnelMaster anymore. The platform’s analytics and automation features are simply unmatched!", 
                name: 'Emma Brown',
                username: '@emmabrown',
                social: 'https://i.imgur.com/VRtqhGC.png'
              },
              {
                image: 'https://i.imgur.com/cRwFxtE.png',
                text: 'FunnelMaster’s user experience is top-notch. The interface is beautiful, intuitive, and packed with powerful features that actually deliver results.',
                name: 'James Wilson',
                username: '@jameswilson',
                social: 'https://i.imgur.com/VRtqhGC.png'
              },
              {
                image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400&facepad=2',
                text: "From the moment we started using FunnelMaster, our conversion rates and team productivity skyrocketed. This platform is a must-have for any serious marketer!", 
                name: 'Sophia Lee',
                username: '@sophialee',
                social: 'https://i.imgur.com/VRtqhGC.png'
              },
              {
                image: 'https://i.imgur.com/3ROmJ0S.png',
                text: 'FunnelMaster is the secret weapon behind our most successful campaigns. The AI insights and recommendations are always spot-on!',
                name: 'Michael Davis',
                username: '@michaeldavis',
                social: 'https://i.imgur.com/VRtqhGC.png'
              },
              {
                image: 'https://i.imgur.com/6fKCuVC.png',
                text: 'FunnelMaster’s responsive design and seamless integrations make it a joy to use across all our projects. Truly best-in-class!',
                name: 'Emily Chen',
                username: '@emilychen',
                social: 'https://i.imgur.com/VRtqhGC.png'
              },
              {
                image: 'https://i.imgur.com/Jjqe7St.png',
                text: "FunnelMaster’s customization options allowed us to perfectly match our brand and workflow. The attention to detail is incredible!", 
                name: 'Robert Lee',
                username: '@robertlee',
                social: 'https://i.imgur.com/VRtqhGC.png'
              },
              {
                image: 'https://i.imgur.com/bG88vHI.png',
                text: 'FunnelMaster has saved us countless hours. The documentation is crystal clear and the support team is always there to help.',
                name: 'Sarah Taylor',
                username: '@sarahtaylor',
                social: 'https://i.imgur.com/VRtqhGC.png'
              },
              {
                image: 'https://i.imgur.com/tjmS77j.png',
                text: 'The attention to detail in FunnelMaster’s design and features is outstanding. It’s a visually stunning and highly effective platform.',
                name: 'Kevin White',
                username: '@kevinwhite',
                social: 'https://i.imgur.com/VRtqhGC.png'
              },
              {
                image: 'https://i.imgur.com/yTsomza.png',
                text: 'FunnelMaster integrates effortlessly with all our tools and workflows. It’s become the backbone of our marketing operations!',
                name: 'Rachel Patel',
                username: '@rachelpatel',
                social: 'https://i.imgur.com/VRtqhGC.png'
              },
              {
                image: 'https://i.imgur.com/pnsLqpq.png',
                text: "FunnelMaster adapts perfectly to our needs, no matter the campaign or device. It’s the most flexible and reliable platform we’ve used!", 
                name: 'Brian Kim',
                username: '@briankim',
                social: 'https://i.imgur.com/VRtqhGC.png'
              }
            ]}
            className=""
            title="What Our Users Say"
            description="Real feedback from developers and teams using our component library."
            maxDisplayed={6}
          />
        </div>
      </section>

      {/* Start Now Button above horizontal line */}
      <div className="w-full flex justify-center mt-12 mb-8">
        <a href="/signup" className="group">
          <button className="p-[3px] relative rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-3 bg-black rounded-[6px] relative transition duration-200 text-white text-lg font-semibold group-hover:bg-transparent">
              Start Now
            </div>
          </button>
        </a>
      </div>
</section>

<Footer />
    </>
  );
}
