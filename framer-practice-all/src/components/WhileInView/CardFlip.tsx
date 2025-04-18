import { motion } from "motion/react"

const CardFlip = () => {
  return (
    <div className="perspective-100 w-64 h-64">
      <motion.div
        className="relative w-full h-full"
        initial={{ rotateY: 0 }}
        whileInView={{ rotateY: 180 }}
        transition={{ duration: 0.5 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center rounded">
          Front
        </div>
        <motion.div
          className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center rounded"
          style={{ transform: "rotateY(180deg)" }}
        >
          Back
        </motion.div>
      </motion.div>
    </div>
  )
}

export default CardFlip
