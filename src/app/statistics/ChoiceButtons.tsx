import { useState } from "react";

interface ChoiceButtonsProps {
    onTopChange: (top: string) => void;
    onTimeChange: (time: string) => void;
}

export default function ChoiceButtons({ onTopChange, onTimeChange }: ChoiceButtonsProps) {
    const [selectedType, setSelectedType] = useState<string>("tracks");
    const [selectedTime, setSelectedTime] = useState<string>("short_term");

    const styleButtonP1 = 'px-4 py-1 border rounded'
    const styleButtonP2 = 'bg-spotify-green text-white'
    const syuleButtonSelected = 'bg-white text-black border-gray-300'

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
            <div className="flex gap-10">
                <div className="flex gap-2">
                    <button
                        onClick={() => handleTypeChange("tracks")}
                        className={`${styleButtonP1} ${selectedType === "tracks" ? styleButtonP2 : syuleButtonSelected}`}
                    >
                        Top titres
                    </button>
                    <button
                        onClick={() => handleTypeChange("artists")}
                        className={`${styleButtonP1} ${selectedType === "artists" ? styleButtonP2 : syuleButtonSelected}`}
                    >
                        Top artistes
                    </button>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => handleTimeChange("short_term")}
                        className={`${styleButtonP1} ${selectedTime === "short_term" ? styleButtonP2 : syuleButtonSelected}`}
                    >
                        4 semaines
                    </button>
                    <button
                        onClick={() => handleTimeChange("medium_term")}
                        className={`${styleButtonP1} ${selectedTime === "medium_term" ? styleButtonP2 : syuleButtonSelected}`}
                    >
                        6 mois
                    </button>
                    <button
                        onClick={() => handleTimeChange("long_term")}
                        className={`${styleButtonP1} ${selectedTime === "long_term" ? styleButtonP2 : syuleButtonSelected}`}
                    >
                        Toujours
                    </button>
                </div>
            </div>
        </div>
    );
}
