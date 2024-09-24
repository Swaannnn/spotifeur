"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import Image from "next/image";

export default function Home() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [profileData, setProfileData] = useState<any>(null);

    useEffect(() => {
        if (session) {
            fetch("/api/spotify/profile")
                .then((res) => res.json())
                .then((data) => setProfileData(data))
                .catch(() => router.push("/login"));
        }
    }, [session, router]);

    if (status === "loading") {
        return <Loader />;
    }

    return (
        <div>
            {profileData ? (
                <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
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
            ) : (
                <Loader/>
            )}
        </div>
    );
}
