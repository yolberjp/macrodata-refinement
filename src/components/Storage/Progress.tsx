interface ProgressProps {
    percentage: number;
}

export default function Progress({ percentage }: ProgressProps) {
    return (
        <div className="w-[150px] h-[30px] border-4 text-left relative overflow-hidden bg-black">
            <div 
                className="absolute top-0 left-0 h-full bg-gray-500"
                style={{ width: `${percentage}%` }}
            />
            <span 
                className="text-md font-bold relative z-10 px-2">
                {percentage}%
            </span>
        </div>
    );
}