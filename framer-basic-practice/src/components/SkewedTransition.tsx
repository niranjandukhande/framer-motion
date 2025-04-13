import { motion } from "motion/react"
import { useState } from "react"

const SkewedTransition = () => {
  const [isSkewed, setIsSkewed] = useState(true)

  return (
    <motion.div
      className="h-24 w-48 bg-black cursor-pointer"
      onClick={() => setIsSkewed(!isSkewed)}
      animate={{ skewX: isSkewed ? 20 : 0 }}
      transition={{ duration: 0.5 }}
    />
  )
}

export default SkewedTransition
