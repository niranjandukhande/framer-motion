import { motion } from "motion/react"
const DraggableBox = () => {
  return (
    <motion.div
      className="w-32 h-32 bg-blue-500 rounded"
      drag
      dragConstraints={{ left: -100, top: -100, right: 100, bottom: 100 }}
    />
  )
}

export default DraggableBox
