'use client'

import { SplineScene } from '@/components/ui/splite'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'
import { motion } from 'framer-motion'

const stats = [
  { num: '10+', label: 'Open Positions' },
  { num: '24h', label: 'Response Time' },
  { num: '5★', label: 'Royal Palace' },
]

export default function Hero() {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-[#0A1628]">
      <div className="w-full max-w-7xl mx-auto px-6 py-16">
        <Card className="w-full h-[600px] bg-black/[0.96] relative overflow-hidden border-white/10">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

          <div className="flex h-full">
            {/* Left content */}
            <div className="flex-1 p-10 relative z-10 flex flex-col justify-center">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 mb-6"
              >
                Royal Palace Recruitment · Saudi Arabia
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight"
              >
                Elite Talent for<br />Exceptional<br />Institutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-neutral-400 max-w-md text-base leading-relaxed"
              >
                We connect world-class hospitality professionals with prestigious royal palaces
                across the Kingdom of Saudi Arabia.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3 mt-8"
              >
                <a
                  href="#roles"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  View Open Roles
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-white/20 hover:border-white/40 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  Contact Us
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex gap-8 mt-10"
              >
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold text-white">{s.num}</div>
                    <div className="text-xs text-neutral-500 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Spline 3D scene */}
            <div className="flex-1 relative hidden md:block">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
