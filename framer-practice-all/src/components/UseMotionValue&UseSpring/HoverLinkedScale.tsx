import { motion, useMotionValue, useSpring } from "motion/react"

const HoverLinkedScale = () => {
  // const scale = useMotionValue(1)
  const scale = useSpring(1)
  return (
    <motion.div
      className="p-4 bg-blue-500 text-white rounded"
      onHoverStart={() => scale.set(2)}
      onHoverEnd={() => scale.set(1)}
      style={{ scale: scale }}
    >
      Hover Me!
    </motion.div>
  )
}

export default HoverLinkedScale
