import { motion } from "motion/react"

const BasicTranslation = () => {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 200 }}
      transition={{ duration: 2 }}
      className="h-32 w-32 bg-yellow-400"
    />
  )
}

export default BasicTranslation
