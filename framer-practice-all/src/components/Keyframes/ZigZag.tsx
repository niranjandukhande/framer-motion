import { motion } from "motion/react"
const ZigZag = () => {
  return (
    <motion.div
      className="h-32 w-32 bg-green-600 rounded"
      animate={{ x: [0, 50, 0, -50, 0], y: [0, 50, 0, 50, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

export default ZigZag
