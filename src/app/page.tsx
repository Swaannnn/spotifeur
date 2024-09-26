"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import Image from "next/image";
import PlayedTrack from "@/components/PlayedTrack";

export default function Home() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [profileData, setProfileData] = useState<any>(null);
    const [recentlyPlayed, setRecentlyPlayed] = useState<any>(null);

    useEffect(() => {
        if (session) {
            fetch("/api/spotify/profile")
                .then((res) => res.json())
                .then((data) => setProfileData(data))
                .catch(() => router.push("/login"));

            fetch("/api/spotify/profile/recently-played")
                .then((res) => res.json())
                .then((data) => setRecentlyPlayed(data))
                .catch(() => router.push("/login"));
        }
    }, [session, router]);

    if (status === "loading") {
        return <Loader />;
    }

    console.log(recentlyPlayed);
    // restructuer cette page comme celles des statistiques (composants / vérifier les données...)
    return (
        <div>
            {profileData && recentlyPlayed ? (
                <div>
                    <div className="flex flex-col items-center justify-center">
                        {profileData.images?.[1]?.url && (
                            <Image
                                className="rounded-full"
                                src={profileData.images[1].url}
                                alt="avatar"
                                width={300}
                                height={300}
                            />
                        )}
                        <p>{profileData.display_name}</p>
                    </div>

                    {recentlyPlayed.items.map((track: any, index: number) => (
                        <PlayedTrack key={index} track={track.track} played_at={track.played_at} />
                    ))}
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    );
}
