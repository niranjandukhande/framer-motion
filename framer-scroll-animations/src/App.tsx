import AnimationScroll from "./components/AnimationScroll"
import ScrollAnimation from "./components/ScrollAnimation"
import UseScroll from "./components/UseScroll"
import AnimatedCard from "./components/WhileInView"

const App = () => {
  return (
    <div>
      {/* <AnimatedCard /> */}
      {/* <UseScroll /> */}
      {/* <ScrollAnimation /> */}
      <AnimationScroll />
      <div className="h-[200vh] bg-gray-800 flex items-center justify-center">
        <h2 className="text-white">Scroll Down</h2>
      </div>
    </div>
  )
}
export default App
