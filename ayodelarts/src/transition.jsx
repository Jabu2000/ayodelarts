import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const transition = (OgComponent) => {
  const TransitionWrapper = () => {
    const location = useLocation()

    return (
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname}>
          <OgComponent />
          <motion.div
            className="slide-in"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </AnimatePresence>
    )
  }

  return TransitionWrapper
}

export default transition