import { motion } from "motion/react"

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: 180 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
}

const TimeLineAnimation = () => {
  return (
    <motion.div
      className="flex items-center"
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.5 }}
    >
      {[1, 2, 3].map((item) => (
        <motion.div
          key={item}
          variants={itemVariants}
          className="bg-purple-500 ml-[2rem] p-4 text-white my-2 rounded"
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default TimeLineAnimation
