import { useMemo } from "react";
import { cn } from "../../libs/utils";
import Animated from "./Animated";
import Item from "./Item";

export default function Number({selected, center}: {selected?: boolean, center?:boolean}) {
    const number = useMemo(() => Math.floor(Math.random() * 10), []);

    return <div className={cn("w-[40px] h-[40px] flex items-center justify-center text-xl text-white relative", {
      // "bg-gray-700": selected
    })}>
      {selected ? <Animated center={center}>{number}</Animated> : <Item>{number}</Item>}
  </div>
}