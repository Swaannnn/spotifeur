"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import Image from "next/image";
import PlayedTrack from "@/components/PlayedTrack";
import DisplaySomePlaylists from "@/components/DisplaySomePlaylists";
import DisplaySomeAlbums from "@/components/DisplaySomeAlbums";

export default function Home() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [profileData, setProfileData] = useState<any>(null);
    const [recentlyPlayed, setRecentlyPlayed] = useState<any>(null);
    const [somePlaylists, setSomePlaylists] = useState<any>(null);
    const [someAlbums, setSomeAlbums] = useState<any>(null);

    useEffect(() => {
        if (session) {
            fetch("/api/spotify/profile")
                .then((res) => res.json())
                .then((data) => setProfileData(data))

            fetch("/api/spotify/profile/get-last-tracks-played")
                .then((res) => res.json())
                .then((data) => setRecentlyPlayed(data))

            fetch("/api/spotify/profile/get-some-playlists")
                .then((res) => res.json())
                .then((data) => setSomePlaylists(data))

            fetch("/api/spotify/profile/get-some-albums")
                .then((res) => res.json())
                .then((data) => setSomeAlbums(data))
        }
    }, []);

    // marche pas
    if (status === "unauthenticated") {
        router.push("/login");
    }

    if (status === "loading") {
        return <Loader />;
    }

    console.log(someAlbums);

    // restructuer cette page comme celles des statistiques (composants / vérifier les données...)
    return (
        <div>
            {profileData && recentlyPlayed && somePlaylists && someAlbums ? (
                <div>
                    <div className="flex flex-col items-center justify-center">
                        {profileData.images?.[1]?.url && (
                            <Image
                                className="rounded-full"
                                src={profileData.images[1].url}
                                alt="avatar"
                                width={150}
                                height={150}
                            />
                        )}
                        <p>Bienvenue {profileData.display_name} !</p>
                    </div>

                    <p>Quelques playlists :</p>
                    {somePlaylists.map((playlist: any, index: number) => (
                        <DisplaySomePlaylists key={index} playlist={playlist}/>
                    ))}

                    <p>Quelques albums :</p>
                    {someAlbums.map((album: any, index: number) => (
                        <DisplaySomeAlbums key={index} album={album}/>
                    ))}

                    <p>Mes dernières écoutes :</p>
                    {recentlyPlayed.items.map((track: any, index: number) => (
                        <PlayedTrack key={index} track={track.track} played_at={track.played_at}/>
                    ))}
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    );
}
