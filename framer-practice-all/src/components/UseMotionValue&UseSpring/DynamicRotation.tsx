import { motion, useMotionValue, useSpring } from "motion/react"

const DynamicRotation = () => {
  // const rotation = useMotionValue(0)
  const rotation = useSpring(0)

  const rotateBox = () => {
    rotation.set(rotation.get() + 45)
  }

  return (
    <motion.div
      className="w-32 h-32 bg-blue-500 rounded text-white flex justify-center items-center cursor-pointer"
      style={{ rotate: rotation }}
      onClick={rotateBox}
    >
      Click Me!
    </motion.div>
  )
}

export default DynamicRotation
