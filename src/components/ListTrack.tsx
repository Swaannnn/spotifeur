import Image from "next/image";
import Link from "next/link";
import {convertMs, convertDate} from "@/lib/converter";

export default function ListTrack({data: item, pos}: { data: any, pos: number }) {
    if (!item) return null
    return (
        <div
            className="bg-black3 p-2 m-2 rounded-lg items-center text-center grid"
            style={{gridTemplateColumns: "1fr 2fr 1fr 2fr 1fr 1fr"}}
        >
            {item.album && item.album.images && item.album.images[0] && (
                <div className="flex justify-evenly items-center">
                    <div>
                        <i>#{pos}</i>
                    </div>

                    <div className="flex justify-center items-center">
                        <Image
                            src={item.album.images[0].url} alt={item.name}
                            width={100} height={100}
                        />
                    </div>
                </div>
            )}
            {item.name && (
                <Link className="truncate hover:underline" href={item.external_urls.spotify}>
                    {item.name}
                </Link>
            )}
            <div>
                {item.artists && item.artists.map((artist: any, index: number) => (
                    <div key={index}>
                        <Link className="truncate hover:underline" href={artist.external_urls.spotify}>
                            {artist.name}
                        </Link>
                        {index < item.artists.length - 1 && ','}
                    </div>
                ))}
            </div>
            {item.album && item.album.name && (
                <Link className="truncate hover:underline" href={item.album.external_urls.spotify}> {item.album.name} </Link>
            )}
            {item.album && item.album.release_date && (
                <div className="truncate">
                    {convertDate(item.album.release_date)}
                </div>
            )}
            {item.duration_ms && (
                <div className="truncate">
                    {convertMs(item.duration_ms)}
                </div>
            )}
        </div>
    );
}