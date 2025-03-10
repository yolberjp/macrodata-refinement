import { useMemo } from "react";

export default function Number() {
    const number = useMemo(() => Math.floor(Math.random() * 10), []);

    return <div className="px-5 py-3">
        <span>{number}</span>
    </div>
}