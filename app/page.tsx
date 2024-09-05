'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [pickupLine, setPickupLine] = useState("Click the button to generate a pickup line!")

  const pickupLines = [
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Do you have a map? I just keep getting lost in your eyes.",
    "Is your name Google? Because you've got everything I've been searching for.",
    "Are you a camera? Because every time I look at you, I smile.",
    "Do you believe in love at first sight, or should I walk by again?",
  ]

  const generatePickupLine = () => {
    const randomIndex = Math.floor(Math.random() * pickupLines.length)
    setPickupLine(pickupLines[randomIndex])
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-8 text-white">Pickup Line Generator</h1>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <p className="text-xl mb-4">{pickupLine}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={generatePickupLine}>Generate Pickup Line</button>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  )
}