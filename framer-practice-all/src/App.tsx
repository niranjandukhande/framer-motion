import DraggableBox from "./components/Gestures/DraggableBox"
import GestureBasedImageGallery from "./components/Gestures/GestureBasedImageGallery"
import LongPressToChangeSize from "./components/Gestures/LongPressToChangeSize"
import RotateOnDrag from "./components/Gestures/RotateOnDrag"
import SwipableCard from "./components/Gestures/SwipableCard"
import TapToChangeColor from "./components/Gestures/TapToChangeColor"

const App = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#0d1017]">
      {/* <SwipableCard /> */}
      {/* <DraggableBox /> */}
      {/* <RotateOnDrag /> */}
      {/* <TapToChangeColor /> */}
      {/* <LongPressToChangeSize /> */}
      <GestureBasedImageGallery />
    </div>
  )
}

export default App
