import { motion } from "motion/react"

const RotationAnimation = () => {
  return (
    <motion.img
      src="https://images.unsplash.com/photo-1742943892619-501567da0c62?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      className="h-100 w-100"
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
  )
}

export default RotationAnimation
