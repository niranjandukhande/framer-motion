import { motion } from "motion/react"
import { useState } from "react"

const cardVariants = {
  frontSide: { rotateY: 0 },
  backSide: { rotateY: 180 },
}

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)
  return (
    <motion.div
      className="perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        variants={cardVariants}
        initial="front"
        animate={isFlipped ? "backSide" : "frontSide"}
        transition={{ duration: 0.6 }}
        className="absolute w-64 h-40 bg-white rounded-lg shadow-lg overflow-hidden transform-style-preserve-3d"
      >
        <div className="absolute inset-0 bg-white flex items-center justify-center text-xl font-bold">
          Front Side
        </div>
        <div className="absolute inset-0 bg-blue-500 flex items-center justify-center text-xl font-bold ">
          Back Side
        </div>
      </motion.div>
    </motion.div>
  )
}

export default FlippingCard
