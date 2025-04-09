import { motion } from "motion/react"

{
  /* <motion.element> : element can be any HTML element, some props which can be used are initial, animate, and exit */
}

const App = () => {
  return (
    <div>
      {/* Translate
      <motion.div className="box" animate={{ x: "100px" }} /> */}
      {/* Rotate
      <motion.div className="box" animate={{ rotateX: 60 }} />
      <motion.div className="box" animate={{ rotate: 60 }} /> */}
      {/* Scaling
      <motion.div className="box" animate={{ scale: 2 }} />
      <motion.div className="box" animate={{ scaleX: 2 }} /> */}
      Skew
      <motion.div className="box" animate={{ skewX: 20 }} />
    </div>
  )
}
export default App
