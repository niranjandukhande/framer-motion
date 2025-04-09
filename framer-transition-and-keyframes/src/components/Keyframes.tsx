import { motion } from "motion/react"
const Keyframes = () => {
  return (
    <motion.div
      className="box"
      // animate={{ scale: [1, 2] }}
      animate={{
        // scale: [1, 2, 3, 2, 3, 4, 1, 2, 1],
        rotate: [0, 270, 130, 0],
        borderRadius: ["20%", "20%", "50%", "20%"],
      }}
      transition={{ duration: 5 }}
    />
  )
}

export default Keyframes
