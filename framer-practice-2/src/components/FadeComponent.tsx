import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
const FadeComponent = () => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 h-screen">
      <button
        className="m-4 p-4 text-white bg-black rounded cursor-pointer"
        onClick={() => setVisible(!visible)}
      >
        Click Me
      </button>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="p-4 bg-white rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Hello, from fade
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FadeComponent
