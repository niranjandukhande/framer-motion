import { easeInOut } from "motion"
import { motion } from "motion/react"
const BouncingBall = () => {
  return (
    <motion.div
      className="h-32 w-32 bg-yellow-400 rounded-full"
      animate={{ y: [0, -100, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: easeInOut,
      }}
    />
  )
}

export default BouncingBall
