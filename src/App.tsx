import './App.css'
import RefinementArea from './components/RefinementArea/RefinementArea';
import Storage from './components/Storage/Storage';

function App() {

  const fileID = "0x136D60 : 0x09A4D1"
  const storageIds = ['1', '2', '3', '4', '5']

  return (
    <div className="flex flex-col justify-between w-full max-w-4xl xl:max-w-7xl aspect-[6/4] rounded-[80px] border-6  overflow-hidden bg-gray-950">
      <header className="flex flex-row items-center w-full py-5 border-b-10 border-double px-20 relative">
        <div className="flex flex-row w-full border-4 px-5 py-1 justify-between pr-40">
          <h2 className="text-3xl font-bold">Siena</h2>
          <h2 className="text-3xl font-bold">0% Complete</h2>
        </div>
        <img src="/lumon.jpg" className="absolute w-40 rounded-full right-15" />
      </header>

      <RefinementArea />

      <footer className="flex flex-col p-2">
        <div className="flex flex-row justify-between items-center w-full h-28 border-t-10 border-double px-20">

          {storageIds.map((id) => <Storage key={id} id={id} />)}

        </div>
        <div className="border-t-2">
          <span className="text-lg text-gray-300 font-extrabold">{fileID}</span>
        </div>
      </footer>
    </div>
  )
}

export default App
