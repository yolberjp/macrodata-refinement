export default function Box({id}: {id: string}) {

    return <div className="w-[150px] h-[40px] border-4">
        <h4 className="text-xl font-extrabold">{id}</h4>
    </div>
}