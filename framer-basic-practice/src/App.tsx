import BasicTranslation from "./components/BasicTranslation"
import CombinedTransitions from "./components/CombinedTransitions"
import RotationAnimation from "./components/RotationAnimation"
import SequentialTransition from "./components/SequentialTransition"
import SkewedTransition from "./components/SkewedTransition"
import VerticalMovement from "./components/VerticalMovement"

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <BasicTranslation /> */}
      {/* <VerticalMovement /> */}
      {/* <RotationAnimation /> */}
      {/* <SkewedTransition /> */}
      {/* <CombinedTransitions /> */}
      <SequentialTransition />
    </div>
  )
}

export default App
