"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import ChoiceButtons from "@/app/statistics/ChoiceButtons";
import TracksResult from "@/app/statistics/TracksResult";
import ArtistsResult from "@/app/statistics/ArtistsResult";

export default function StatisticsPage() {
    const { data: session } = useSession();
    const [selectedType, setSelectedType] = useState<string>("tracks");
    const [selectedTime, setSelectedTime] = useState<string>("short_term");
    const [top, setTop] = useState<any>();

    useEffect(() => {
        setTop(null);
        const fetchData = async (type: string, time: string) => {
            const response = await fetch(`/api/spotify/statistics/top?type=${type}&time_range=${time}`);
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
            <ChoiceButtons
                onTopChange={setSelectedType}
                onTimeChange={setSelectedTime}
            />
            <br />
            {selectedType === 'tracks' &&
                <TracksResult data={top} />
            }
            {selectedType === 'artists' &&
                <ArtistsResult data={top} />
            }
        </div>
    );
}
