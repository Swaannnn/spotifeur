import { useState } from "react";

interface ChoiceButtonsProps {
    onTopChange: (top: string) => void;
    onTimeChange: (time: string) => void;
}

export default function ChoiceButtons({ onTopChange, onTimeChange }: ChoiceButtonsProps) {
    const [selectedType, setSelectedType] = useState<string>("tracks");
    const [selectedTime, setSelectedTime] = useState<string>("short_term");

    const styleButton = 'px-4 py-1.5 rounded-full'
    const styleButtonSelected = 'bg-black3 hover:bg-gray2'
    const styleButtonNotSelected = 'text-black bg-white hover:bg-white2'

    const handleTypeChange = (type: string) => {
        setSelectedType(type);
        onTopChange(type);
    };

    const handleTimeChange = (time: string) => {
        setSelectedTime(time);
        onTimeChange(time);
    };

    return (
        <div>
            <div className="flex gap-8">
                <div className="flex gap-4">
                    <button
                        onClick={() => handleTypeChange("tracks")}
                        className={`${styleButton} ${selectedType === "tracks" ? styleButtonNotSelected : styleButtonSelected}`}
                    >
                        Top titres
                    </button>
                    <button
                        onClick={() => handleTypeChange("artists")}
                        className={`${styleButton} ${selectedType === "artists" ? styleButtonNotSelected : styleButtonSelected}`}
                    >
                        Top artistes
                    </button>
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={() => handleTimeChange("short_term")}
                        className={`${styleButton} ${selectedTime === "short_term" ? styleButtonNotSelected : styleButtonSelected}`}
                    >
                        4 semaines
                    </button>
                    <button
                        onClick={() => handleTimeChange("medium_term")}
                        className={`${styleButton} ${selectedTime === "medium_term" ? styleButtonNotSelected : styleButtonSelected}`}
                    >
                        6 mois
                    </button>
                    <button
                        onClick={() => handleTimeChange("long_term")}
                        className={`${styleButton} ${selectedTime === "long_term" ? styleButtonNotSelected : styleButtonSelected}`}
                    >
                        Toujours
                    </button>
                </div>
            </div>
        </div>
    );
}
