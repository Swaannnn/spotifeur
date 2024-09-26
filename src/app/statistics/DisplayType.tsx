import Image from "next/image";
import { useState } from "react";

interface DisplayTypeProps {
    onTypeChange: (type: boolean) => void;
}

export default function DisplayType({ onTypeChange }: DisplayTypeProps) {
    const [type, setType] = useState<boolean>(true);

    const styleButton = 'px-2.5 py-2 rounded-md';
    const styleButtonSelected = 'bg-black3 hover:bg-gray2';
    const styleButtonNotSelected = 'text-black bg-white hover:bg-white2';

    const handleTypeChange = (newType: boolean) => {
        setType(newType);
        onTypeChange(newType);
    };

    return (
        <div className="flex gap-2">
            <button
                onClick={() => handleTypeChange(false)}
                className={`${styleButton} ${type ? styleButtonSelected : styleButtonNotSelected}`}
            >
                <Image
                    src="/images/square.svg"
                    alt="affichage carré"
                    width={20}
                    height={20}
                    className={!type ? 'filter invert' : ''}
                />
            </button>
            <button
                onClick={() => handleTypeChange(true)}
                className={`${styleButton} ${!type ? styleButtonSelected : styleButtonNotSelected}`}
            >
                <Image
                    src="/images/list.svg"
                    alt="affichage liste"
                    width={20}
                    height={20}
                    className={type ? 'filter invert' : ''}
                />
            </button>
        </div>
    );
}
