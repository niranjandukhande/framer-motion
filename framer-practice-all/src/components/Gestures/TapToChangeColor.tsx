import { motion } from "motion/react"
import { useState } from "react"

const colors = ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500"]

const TapToChangeColor = () => {
  const [colorIndex, setColorIndex] = useState(0)

  const handleTap = () => {
    setColorIndex((prev) => (prev + 1) % colors.length)
  }

  return (
    <motion.div
      className={`w-32 h-32 ${colors[colorIndex]} rounded flex justify-center items-center text-white`}
      onTap={handleTap}
    >
      Tap Me!
    </motion.div>
  )
}

export default TapToChangeColor
