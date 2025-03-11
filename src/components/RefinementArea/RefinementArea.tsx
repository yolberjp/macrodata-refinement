import { useEffect, useState } from "react";
import Number from "../Number/Number";

const getRandomIndex = (total: number) => {
    const random = Math.floor((Math.random() * total) + 1)
    return Math.min(random, total - 2)
}

const getSelectedArea = (selectedRowIndex: number, selectedItemIndex: number) => {
    return {
        rows: [selectedRowIndex - 1, selectedRowIndex, selectedRowIndex + 1],
        items: [selectedItemIndex - 1, selectedItemIndex, selectedItemIndex + 1]
    }
}

const totalRows = 15
const totalItemsPerRow = 30
const animationDuration = 10000

const rows = [...Array(totalRows)]
const items = [...Array(totalItemsPerRow)]

export default function RefinementArea() {
    const [winnerItem, setWinnerItem] = useState<{rowIndex: number, itemIndex: number}>({
        rowIndex: getRandomIndex(totalRows),
        itemIndex: getRandomIndex(totalItemsPerRow)
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setWinnerItem({
                rowIndex: getRandomIndex(totalRows),
                itemIndex: getRandomIndex(totalItemsPerRow)
            })
        }, animationDuration)
        return () => clearInterval(interval)
    }, [])

    const selectedArea = getSelectedArea(winnerItem.rowIndex, winnerItem.itemIndex)

    return (<section className='flex flex-col w-full h-full p-2 relative overflow-hidden'>

            {rows.map((_, r)=>(<div key={r} className="flex transition-transform duration-200 select-none">

              {items.map((_, i) => <Number key={i} selected={selectedArea.rows.includes(r) && selectedArea.items.includes(i)} center={r === winnerItem.rowIndex && i === winnerItem.itemIndex} />)}

            </div>))}
    </section>)
}