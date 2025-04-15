import { motion } from "motion/react"
const PulsatingEffect = () => {
  return (
    <motion.button
      className="p-2 bg-amber-400 text-black rounded font-mono"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      Click Me
    </motion.button>
  )
}

export default PulsatingEffect
