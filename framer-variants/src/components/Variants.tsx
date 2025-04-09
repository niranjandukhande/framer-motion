import { useState } from "react"
import { motion } from "motion/react"
import { variants } from "../variants"

const Variants = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true)
  return (
    <motion.div
      className="box"
      variants={variants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      exit="exit"
      transition={{ duration: 1 }}
      onClick={() => setIsVisible(!isVisible)}
    />
  )
}

export default Variants
