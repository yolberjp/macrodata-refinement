import { useState, useRef, useCallback, WheelEvent } from "react";

import Number from "../Number/Number";

export default function Container() {
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

    return (<section ref={containerRef} onWheel={handleWheel} className='w-full h-full overflow-hidden'>
            <div style={{ transform: `scale(${zoom})`, transformOrigin }} className="flex flex-wrap transition-transform duration-200 select-none">
              {[...Array(260)].map((_, i) => (
                <Number key={i} />
              ))}
            </div>
    </section>)
}