import { motion } from "motion/react"
import { useState } from "react"

const items = [
  { title: "Title 1", content: "This is content of title 1" },
  { title: "Title 2", content: "This is content of title 2" },
  { title: "Title 3", content: "This is content of title 3" },
  { title: "Title 4", content: "This is content of title 4" },
]

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleItem = (index: any) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="w-full text-left p-2 bg-gray-300 rounded focus:outline-none"
            onClick={() => toggleItem(index)}
          >
            {item.title}
          </button>
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: openIndex === index ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="p-2 bg-gray-200 rounded text-black">
              {item.content}
            </h1>
          </motion.div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
