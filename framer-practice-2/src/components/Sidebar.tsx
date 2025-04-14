import { motion } from "motion/react"
import { useState } from "react"
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-black text-white rounded cursor-pointer"
      >
        Toggle Sidebar
      </button>
      <motion.div
        className={`fixed left-0 top-0 h-full bg-gray-500 text-white p-4 ${
          isOpen ? "" : "-translate-x-full"
        }`}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg font-bold">Sidebar</h2>
        <p>Some Random Content</p>
      </motion.div>
    </div>
  )
}

export default Sidebar
