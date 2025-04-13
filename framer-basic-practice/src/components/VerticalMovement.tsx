import { easeInOut } from "motion"
import { motion } from "motion/react"
const VerticalMovement = () => {
  return (
    <motion.div
      animate={{ y: [0, -100, 0] }}
      transition={{
        duration: 1.5,
        ease: easeInOut,
        repeat: Infinity,
      }}
      className="h-32 w-32 bg-yellow-400 rounded-full"
    />
  )
}

export default VerticalMovement
