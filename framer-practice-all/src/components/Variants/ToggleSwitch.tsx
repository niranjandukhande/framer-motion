import { motion } from "motion/react"
import { useState } from "react"

const switchVariants = {
  off: { x: 0 },
  on: { x: 80 },
}

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState<boolean>(false)

  return (
    <div className="relative inline-block w-36 h-16">
      <div
        className={`w-full h-full rounded-full bg-gray-300 cursor-pointer ${
          isOn ? "bg-green-500" : ""
        }`}
        onClick={() => setIsOn(!isOn)}
      >
        <motion.div
          className="absolute top-1 left-1 w-14 h-14 rounded-full bg-white shadow"
          variants={switchVariants}
          initial="off"
          animate={isOn ? "on" : "off"}
          transition={{ type: "tween", stiffness: 300 }}
        />
      </div>
    </div>
  )
}

export default ToggleSwitch
