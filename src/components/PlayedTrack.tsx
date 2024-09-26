import { ilya } from "@/lib/converter";
import Link from "next/link";
import Image from "next/image";

export default function PlayedTrack({track, played_at}: { track: any, played_at: any }) {
    return (
        <div>
            <Image
                src={track.album.images[0].url} alt={track.album.name}
                width={50} height={50}
            />
            <Link href={track.external_urls.spotify}>
                <p>{track.name}</p>
            </Link>
            <Link href={track.artists[0].external_urls.spotify}>
                <p>{track.artists[0].name}</p>
            </Link>
            <p>écouté il y a {ilya(played_at)}</p>
        </div>
    );
}