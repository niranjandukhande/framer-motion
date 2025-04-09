import { easeInOut } from "motion"
import { motion } from "motion/react"

const Transition = () => {
  return (
    <motion.div
      className="box"
      initial={{ x: 0 }}
      animate={{ x: 200 }}
      // transition={{ delay: 2 }}
      // transition={{ duration: 2 }}
      transition={{ duration: 1, ease: easeInOut }}
    />
  )
}

export default Transition
