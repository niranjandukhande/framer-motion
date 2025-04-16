import { motion } from "motion/react"
import { useState } from "react"
const LongPressToChangeSize = () => {
  const [isLarge, setIsLarge] = useState(false)

  const handleLongPressStart = () => setIsLarge(true)
  const handleLongPressEnd = () => setIsLarge(false)

  return (
    <motion.div
      onTapStart={handleLongPressStart}
      onTapCancel={handleLongPressEnd}
      onTap={handleLongPressEnd}
      className={`w-48 h-32 text-white bg-blue-500 rounded flex justify-center items-center transition-all duration-300 cursor-pointer ${
        isLarge ? "w-60 h-48" : ""
      } `}
    >
      LongPressToChangeSize
    </motion.div>
  )
}

export default LongPressToChangeSize
