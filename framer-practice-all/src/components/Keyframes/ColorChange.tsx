import { motion } from "motion/react"
const ColorChange = () => {
  return (
    <motion.div
      className="h-32 w-32 rounded"
      animate={{
        backgroundColor: ["#FF0000", "#00FF00", "#0000FF", "#FF0000"],
      }}
      transition={{ duration: 3, ease: "linear", repeat: Infinity }}
    />
  )
}

export default ColorChange
