import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
const Modal = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col items-center">
      <button
        className="m-4 p-2 bg-black text-white rounded cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white p-4 rounded flex flex-col justify-center items-center"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: "-100vh" }}
              animate={{ y: "0vh" }}
              exit={{ y: "100vh" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg font-bold text-black">Modal Title</h2>
              <p className="text-black">This is some random modal content</p>
              <button
                className="p-2 bg-blue-400 text-white rounded cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Close Modal
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Modal
