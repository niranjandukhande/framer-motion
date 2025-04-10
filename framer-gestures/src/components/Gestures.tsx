import { motion } from "motion/react"

const Gestures = () => {
  return (
    <div>
      {/* whileHover
      <motion.div
        className="box"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      /> */}
      {/* whileTap
      <motion.div
        className="box"
        whileTap={{ scale: 0.8, backgroundColor: "crimson" }}
        transition={{ type: "spring", stiffness: 300 }}
      /> */}
      {/* whileDrag */}
      {/* <motion.div className="box" drag /> */}
      <motion.div
        className="box"
        drag
        dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
      />
    </div>
  )
}

export default Gestures
