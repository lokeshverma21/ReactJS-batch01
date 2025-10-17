import Card from "./components/Card"
import MapFuntion from "./components/MapFuntion"
import UseeffectCard2, { UseeffectCard } from "./components/UseeffectCard"
// import UseeffectCard from "./components/UseeffectCard"

function App() {

  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen gap-6">
        <h1>UseEffect Hook Usage</h1>
      <div className="flex gap-4">
        {/* <Card/>
        <Card/> */}
        {/* <UseeffectCard/> */}
        {/* <MapFuntion/> */}
        <UseeffectCard/>
        <UseeffectCard2/>
      </div>
    </div>
    </>
  )
}

export default App
