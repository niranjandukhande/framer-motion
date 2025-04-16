import { motion } from "motion/react"
import { useState } from "react"

const RotateOnDrag = () => {
  const [rotation, setRotation] = useState(0)

  const handleDrag = (_: any, info: any) => {
    const newRotation = rotation + info.offset.x
    setRotation(newRotation)
  }

  return (
    <motion.div
      className="w-32 h-32 bg-blue-500 rounded text-white flex justify-center items-center"
      drag
      onDrag={handleDrag}
      style={{ rotate: rotation }}
    >
      Drag Me!
    </motion.div>
  )
}

export default RotateOnDrag
