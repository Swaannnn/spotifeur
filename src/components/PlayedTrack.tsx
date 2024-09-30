import { ilya } from "@/lib/converter";
import Link from "next/link";
import Image from "next/image";

export default function PlayedTrack({track}: { track: any }) {
    return (
        <div className="bg-black3 p-2 m-2 rounded-lg flex gap-2 max-w-sm">
            {track.album.image && (
                <Image
                    src={track.album.image} alt={track.name}
                    width={64} height={64}
                />
            )}
            <div className="max-w-[18rem]">
                <p className="truncate">
                    <Link className="hover:underline" href={track.external_urls}>
                        {track.name}
                    </Link>
                </p>
                <p className="truncate text-gray-300 text-xs">
                    <Link className="hover:underline" href={track.artist.external_urls}>
                        {track.artist.name}
                    </Link>
                </p>
            <p className="text-xs mt-2">écouté il y a {ilya(track.played_at)}</p>
            </div>
        </div>
    );
}