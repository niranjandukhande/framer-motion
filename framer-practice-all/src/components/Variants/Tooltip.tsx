import { motion } from "motion/react"
import { useState } from "react"

const tooltipVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
}

const Tooltip = () => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div className="relative inline-block">
      <button
        className="p-4 text-white bg-blue-600 rounded"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        Hover Over Me!
      </button>
      {visible && (
        <motion.div
          variants={tooltipVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.2 }}
          className="absolute bg-gray-700 text-white p-2"
        >
          Tooltip Content
        </motion.div>
      )}
    </div>
  )
}

export default Tooltip
