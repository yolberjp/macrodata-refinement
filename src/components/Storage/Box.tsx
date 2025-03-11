import { motion } from 'motion/react'
import './Storage.css'
import { useState } from 'react'

export default function Box({id}: {id: string}) {
    const [open, setOpen] = useState(false)

    return <div className="storage-box w-[150px] h-[40px] border-4 relative" onClick={() => setOpen(!open)}>
        <motion.div 
        initial={{ rotate: 0 }}
        animate={{ rotate: open ? -135 : 0 }} 
        transition={{ duration: 1.5 }}
        style={{
            position: 'absolute',
            top: -4,
            left: 0,
            width: '50%',
            height: 4,
            backgroundColor: "white",
            transformOrigin: "0% 100%",
          }}
        />

        <motion.div 
            initial={{ rotate: 0 }}
            animate={{ rotate: open ? 135 : 0 }} 
            transition={{ duration: 1.5 }}
            style={{
                position: 'absolute',
                top: -4,
                right: 0,
                width: '50%',
                height: 4,
                backgroundColor: "white",
                transformOrigin: "100% 100%",
            }}/>

        <h4 className="text-xl font-extrabold">{id}</h4>
    </div>
}