import { useCallback, useRef, useState, WheelEvent } from 'react';
import './App.css'
import Number from './components/Number/Number'

function App() {
  const [zoom, setZoom] = useState(1);
  const [transformOrigin, setTransformOrigin] = useState<string>('0 0');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleWheel = useCallback((e: WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const zoomIntensity = 0.1;

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const originX = (offsetX / rect.width) * 100;
    const originY = (offsetY / rect.height) * 100;

    setTransformOrigin(`${originX}% ${originY}%`);

    if (e.deltaY < 0) {
      setZoom((prevZoom) => Math.min(prevZoom + zoomIntensity, 3));
    } else {
      setZoom((prevZoom) => Math.max(prevZoom - zoomIntensity, 0.5));
    }
  }, []);

  return (
    <div className="flex flex-col justify-between w-7xl aspect-[6/4] rounded-[80px] border overflow-hidden bg-gray-950">
      <header className="flex flex-row items-center w-full h-48 border-b-10 border-double px-20">
        <div className="flex flex-row w-full border-2 px-5 py-1">
          <h2 className="text-3xl font-extrabold">Dranesville</h2>
        </div>
      </header>

      <section ref={containerRef} onWheel={handleWheel} className='w-full h-full overflow-hidden'>
        <div style={{ transform: `scale(${zoom})`, transformOrigin }} className="flex flex-wrap transition-transform duration-200">
          {[...Array(260)].map((_, i) => (
            <Number key={i} />
          ))}
        </div>
      </section>

      <footer>
        <div className="flex flex-row items-center w-full h-28 border-t-10 border-double px-20">

        </div>
      </footer>
    </div>
  )
}

export default App
