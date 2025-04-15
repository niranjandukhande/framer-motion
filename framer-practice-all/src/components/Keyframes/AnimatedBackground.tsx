import { motion } from "motion/react"
const AnimatedBackground = () => {
  return (
    <motion.div
      className="w-screen h-screen"
      animate={{
        backgroundColor: ["#FF0000", "#00FF00", "#0000FF", "#FF0000"],
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    />
  )
}

export default AnimatedBackground
