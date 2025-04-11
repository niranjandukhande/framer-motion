import { motion, useMotionValue, useMotionValueEvent } from "motion/react"

const UseMotionValue = () => {
  const x = useMotionValue(300)
  useMotionValueEvent(x, "animationStart", () => {
    console.log("Animation started on x")
  })
  useMotionValueEvent(x, "change", (latest) => {
    console.log("Animation started on x", latest)
  })

  return (
    <>
      {/* doesn't work */}
      {/* <motion.div className="box" animate={{ x: x }} /> */}
      <motion.div
        className="box"
        drag
        dragConstraints={{ left: 0, right: 200 }}
        style={{ x }}
      />
    </>
  )
}
export default UseMotionValue
