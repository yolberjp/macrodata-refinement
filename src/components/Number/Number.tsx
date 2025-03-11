import { useMemo } from "react";
import Animated from "./Animated";
import Item from "./Item";

export default function Number({selected, center}: {selected?: boolean, center?:boolean}) {
    const number = useMemo(() => Math.floor(Math.random() * 10), []);

    return <div className="w-[40px] h-[40px] flex items-center justify-center text-xl text-white relative">
      {selected ? <Animated center={center}>{number}</Animated> : <Item>{number}</Item>}
  </div>
}