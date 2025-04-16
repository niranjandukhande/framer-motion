import { motion, useMotionValue, useSpring } from "motion/react"

const SpringAnimatedPosition = () => {
  // const x = useMotionValue(0)
  // const y = useMotionValue(0)
  const x = useSpring(0)
  const y = useSpring(0)

  const moveBox = () => {
    x.set(Math.random() * 300)
    y.set(Math.random() * 300)
  }

  return (
    <div>
      <motion.div
        onClick={moveBox}
        className="bg-blue-500 w-32 h-32 rounded flex justify-center items-center text-white"
        style={{ x: x, y: y }}
      >
        Click Me!
      </motion.div>
    </div>
  )
}

export default SpringAnimatedPosition
