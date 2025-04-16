import { motion } from "motion/react"

const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const StaggeredList = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.5,
          },
        },
      }}
    >
      {items.map((_, index) => (
        <motion.div
          key={index}
          className="mb-2 p-5 bg-yellow-300"
          variants={staggerVariants}
        />
      ))}
    </motion.div>
  )
}

export default StaggeredList
