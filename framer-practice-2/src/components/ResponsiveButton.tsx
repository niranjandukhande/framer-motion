import { motion } from "motion/react"
const ResponsiveButton = () => {
  return (
    <motion.div
      className="p-2 bg-blue-500 text-white rounded transition-transform ease-in-out cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      Click Me
    </motion.div>
  )
}

export default ResponsiveButton
