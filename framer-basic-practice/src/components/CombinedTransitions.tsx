import { motion } from "motion/react"
const CombinedTransitions = () => {
  return (
    <motion.div
      className="bg-purple-500 w-40 h-40"
      animate={{ x: 200, rotate: 360, scale: 1.5 }}
      transition={{ duration: 1.5 }}
    />
  )
}

export default CombinedTransitions
