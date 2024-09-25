import Image from "next/image";
import { useState } from "react";

interface DisplayTypeProps {
    onTypeChange: (type: boolean) => void;
}

export default function DisplayType({ onTypeChange }: DisplayTypeProps) {
    const [type, setType] = useState<boolean>(true);

    const styleButton = 'px-3 py-2 rounded-md'
    const styleButtonNotSelected = 'hover:bg-gray-800'
    const styleButtonSelected = 'bg-gray-800 cursor-auto'

    const handleTypeChange = (newType: boolean) => {
        setType(newType);
        onTypeChange(newType);
    };

    return (
        <div className="flex gap-2">
            <button
                onClick={() => handleTypeChange(false)}
                className={`${styleButton} ${!type ? styleButtonSelected : styleButtonNotSelected}`}
            >
                <Image src="/images/square.svg" alt="affichage carré" width={20} height={20} />
            </button>
            <button
                onClick={() => handleTypeChange(true)}
                className={`${styleButton} ${type ? styleButtonSelected : styleButtonNotSelected}`}
            >
                <Image src="/images/list.svg" alt="affichage liste" width={20} height={20} />
            </button>
        </div>
    );
}
