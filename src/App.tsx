import './App.css'
import RefinementArea from './components/RefinementArea/RefinementArea';

function App() {

  return (
    <div className="flex flex-col justify-between w-full max-w-7xl aspect-[6/4] rounded-[80px] border-8  overflow-hidden bg-gray-950">
      <header className="flex flex-row items-center w-full py-5 border-b-10 border-double px-20 relative">
        <div className="flex flex-row w-full border-4 px-5 py-1 justify-between pr-40">
          <h2 className="text-3xl font-bold">Siena</h2>
          <h2 className="text-3xl font-bold">0% Complete</h2>
        </div>
        <img src="/lumon.jpg" className="absolute w-40 rounded-full right-15" />
      </header>

      <RefinementArea />

      <footer>
        <div className="flex flex-row items-center w-full h-28 border-t-10 border-double px-20">

        </div>
      </footer>
    </div>
  )
}

export default App
