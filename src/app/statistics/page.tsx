"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import ChoiceButtons from "@/app/statistics/ChoiceButtons";
import DisplayType from "@/app/statistics/DisplayType";
import DisplayResult from "@/app/statistics/DisplayResult";

export default function StatisticsPage() {
    const { data: session } = useSession();
    const [selectedType, setSelectedType] = useState<string>("tracks");
    const [selectedTime, setSelectedTime] = useState<string>("short_term");
    const [displayType, setDisplayType] = useState<boolean>(true);
    const [top, setTop] = useState<any>();

    useEffect(() => {
        setTop(null);
        const fetchData = async (type: string, time: string) => {
            const response = await fetch(`/api/spotify/statistics/get-top?type=${type}&time_range=${time}`);
            return await response.json();
        };
        if (session) {
            fetchData(selectedType, selectedTime)
                .then((result) => setTop(result))
                .catch((error) => console.error("Error fetching data:", error));
        }
    }, [session, selectedType, selectedTime]);

    return (
        <div>
            <div className="flex justify-between px-6">
                <ChoiceButtons
                    onTopChange={setSelectedType}
                    onTimeChange={setSelectedTime}
                />
                <DisplayType onTypeChange={setDisplayType}/>
            </div>

            <br/>
            <DisplayResult displayType={displayType} selectedType={selectedType} data={top} />
        </div>
    );
}
