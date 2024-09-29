import { ilya } from "@/lib/converter";
import Link from "next/link";
import Image from "next/image";

export default function PlayedTrack({track, played_at}: { track: any, played_at: any }) {
    return (
        <div className="bg-black3 p-2 m-2 rounded-lg flex gap-2 max-w-sm">
            <Image
                src={track.album.images[0].url} alt={track.album.name}
                width={65} height={65}
            />
            <div className="max-w-[18rem]">
                <Link href={track.external_urls.spotify}>
                    <p className="hover:underline truncate">{track.name}</p>
                </Link>
                <Link href={track.artists[0].external_urls.spotify}>
                    <p className="hover:underline truncate text-gray-300 text-xs">{track.artists[0].name}</p>
                </Link>
                <p className="text-xs mt-2">écouté il y a {ilya(played_at)}</p>
            </div>
        </div>
    );
}