"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
// If your layout.js or globals.css already imports Tailwind, no need to import it again here

export default function Home() {
  // Example testimonials array
  const testimonials = [
    {
      name: "John D.",
      review: "I&apos;ve learned more in my first week than I did in 3 months on my own.",
    },
    {
      name: "Sarah W.",
      review: "The fractal system is a game-changer for spotting potential moves early!",
    },
    {
      name: "Mark T.",
      review: "Active community & awesome live trading sessions. Highly recommended!",
    },
    {
      name: "Emily R.",
      review: "The trial helped me get a feel for the alerts and community — totally worth it.",
    },
  ];

  // Testimonial carousel state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Collapsible disclaimer
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* HERO SECTION */}
      <section className="px-4 py-20 bg-gray-900 text-white flex flex-col items-center text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Transform Your Trading in Just 7 Days — FREE Trial!
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            ⭐ 5.00/5.00 (31 Reviews and Counting)
          </motion.p>

          {/* Embedded video with controls */}
          <motion.video
            className="mx-auto mb-6 w-full max-w-2xl rounded shadow-lg"
            src="/hero-video.mp4"
            controls
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            poster="" 
            // If you have a poster image for the video, put it in /public & reference it here
          />

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <button
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold"
              onClick={() => window.open("https://whop.com/your-whop-link", "_blank")}
            >
              Claim Your Free Trial
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold"
              onClick={() => window.open("https://discord.gg/your-discord-invite", "_blank")}
            >
              Join Our Discord
            </button>
          </motion.div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Ascend Trading?
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ValuePropCard
            title="Daily Live Trading"
            description="Get LIVE commentary & precise executions from multiple profitable traders."
            icon="📡"
          />
          <ValuePropCard
            title="High-Quality Alerts"
            description="Receive high probability trade ideas to guide you on your journey."
            icon="🚀"
          />
          <ValuePropCard
            title="Educational Material"
            description="Access our simplified trading course, fractal education, & 200+ hours of recordings."
            icon="📚"
          />
          <ValuePropCard
            title="Active Community"
            description="Engage in an active, supportive, and professional trading community."
            icon="💬"
          />
        </motion.div>

        <div className="flex justify-center mt-8">
          <button
            className="bg-red-600 hover:bg-red-700 transition-colors font-semibold px-6 py-3 rounded-md text-white"
            onClick={() => window.open("https://whop.com/your-whop-link", "_blank")}
          >
            Claim Your Free Trial
          </button>
        </div>
      </section>

      {/* REVIEWS / SOCIAL PROOF */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Our Members Say
          </motion.h2>
          <div className="relative w-full max-w-xl mx-auto">
            {/* Testimonial carousel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonialIndex}
                className="p-6 bg-white rounded-md shadow text-center"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="italic mb-4">
                  &quot;{testimonials[currentTestimonialIndex].review}&quot;
                </p>
                <p className="font-semibold text-gray-700">
                  - {testimonials[currentTestimonialIndex].name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* FRACTAL SYSTEM EXPLANATION */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Fractal System
        </motion.h2>

        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-4">
            The system Russel created breaks market data into fractal geometry, visually
            displaying potential repeating support and resistance points—simplifying
            whether a stock is &quot;too high&quot; or &quot;too low.&quot;
          </p>
          <p className="mb-4">
            It helps determine buy/sell points and the probable percent of a stock having a
            higher or lower close on subsequent trading days.
          </p>
          <p className="mb-4">
            Designed in 2004, it&apos;s been in use ever since. Let it guide you to more confident
            trading decisions!
          </p>

          <div className="mt-8">
            <Image
              src="/fractal-sample.jpg"
              alt="Fractal System Sample"
              width={800}
              height={600}
              className="mx-auto rounded shadow-lg"
            />
          </div>
        </motion.div>
      </section>

      {/* DISCLAIMER (Collapsible) */}
      <section className="bg-gray-200 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-2xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Official Disclaimer
          </motion.h2>

          <div className="text-center mb-4">
            <button
              className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded shadow"
              onClick={() => setShowDisclaimer(!showDisclaimer)}
            >
              {showDisclaimer ? "Hide Disclaimer" : "Read Disclaimer"}
            </button>
          </div>

          <AnimatePresence>
            {showDisclaimer && (
              <motion.div
                className="text-sm text-gray-700 leading-relaxed bg-white p-4 rounded shadow"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p>
                  Ascend Trading LLC is a fully incorporated company, but we are not licensed
                  financial professionals. All opinions, insights, and trade recommendations shared
                  on our Discord channel or website are solely for educational and informational
                  purposes.
                </p>
                <p className="mt-4">
                  We believe in transparency and want every member to understand the risks
                  associated with trading stocks, options, and futures:
                </p>
                <ul className="list-disc ml-6 mt-2">
                  <li>
                    Trading involves risk. Stocks, options, and futures trading carry the potential
                    for significant rewards but also involve substantial risk.
                  </li>
                  <li>
                    Understand and accept the risks. Only trade if you are fully aware of the risks
                    involved and are prepared to accept potential losses.
                  </li>
                  <li>
                    No guarantees. We do not make any promises regarding the accuracy, success, or
                    profitability of any claims, strategies, or recommendations.
                  </li>
                  <li>
                    Responsibility. You are solely responsible for all trading decisions you make.
                    Thoroughly research any stock, option, or futures contract before investing.
                  </li>
                  <li>
                    Don&apos;t trade with funds you cannot afford to lose.
                  </li>
                  <li>
                    Not an offer or solicitation. Nothing we share constitutes a solicitation or an
                    offer to buy or sell stocks, options, or futures.
                  </li>
                  <li>
                    It&apos;s important to evaluate your risk tolerance.
                  </li>
                  <li>
                    Seek professional advice. If you are uncertain about the risks, consult with a
                    licensed financial advisor before engaging in trading.
                  </li>
                </ul>
                <p className="mt-4">
                  We strongly encourage all traders to conduct their own research and assess the
                  risks before executing any trade. Investments in securities, especially options
                  and futures, are speculative and can result in substantial loss. Ascend Trading LLC
                  does not guarantee success and stands by the principle that results will reflect
                  the individual trader&apos;s approach and understanding.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Trading?
          </motion.h2>
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get instant access to live trading, alerts, education, and more. <br />
            Start your 7-Day FREE Trial now and see the difference Ascend Trading can make.
          </motion.p>
          <motion.button
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            onClick={() => window.open("https://whop.com/your-whop-link", "_blank")}
          >
            Claim Your Free Trial
          </motion.button>
        </div>
      </section>
    </main>
  );
}

// Reusable component for the value prop blocks
function ValuePropCard({ title, description, icon }) {
  return (
    <div className="p-4 border rounded-lg shadow bg-white flex flex-col items-center text-center">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}
