import Box from "./Box";
import Progress from "./Progress";

export default function Storage({id}: {id: string}) {
    return <div className="flex flex-col gap-2 justify-between">
        <Box id={id} />
        <Progress percentage={45} />
    </div>
}