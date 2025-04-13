import { motion } from "motion/react"
const SequentialTransition = () => {
  return (
    <div>
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="bg-teal-500 w-20 h-20 m-2"
          animate={{ x: 100 }}
          transition={{ duration: 0.5, delay: index * 0.5 }}
        />
      ))}
    </div>
  )
}

export default SequentialTransition
