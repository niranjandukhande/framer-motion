import { motion } from "motion/react"

const text = "Hello World"

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const StaggerTextReveal = () => {
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.1 },
        },
      }}
      className="text-4xl text-white font-bold"
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={staggerVariants}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  )
}

export default StaggerTextReveal
