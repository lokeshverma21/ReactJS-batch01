import Card from "./components/Card"

function App() {

  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen gap-6">
    <h1>UseEffect Hook Usage</h1>
      <div className="flex gap-4">
        <Card/>
        <Card/>
      </div>
    </div>
    </>
  )
}

export default App
