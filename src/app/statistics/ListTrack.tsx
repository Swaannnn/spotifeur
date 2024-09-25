import Image from "next/image";
import Link from "next/link";
import {convertMs, convertDate} from "@/lib/converter";

export default function TrackCard({data : item} : {data: any}) {
    return (
        <div className="bg-gray-100/5 p-2 m-2 rounded-lg items-center text-center grid grid-cols-6">

            {/*revoir ici pour un meilleur style avec grid*/}

            {item.album && item.album.images && item.album.images[0] && (
                <div>
                    <Image src={item.album.images[0].url} alt={item.name} width={100} height={100}/>
                </div>
            )}
            {item.name && (
                <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                    <Link href={item.external_urls.spotify}>
                        {item.name}
                    </Link>
                </div>
            )}
            <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                <div className="flex">
                    {item.artists && item.artists.map((artist: any, index: number) => (
                        <div key={index}>
                            <Link href={artist.external_urls.spotify}>
                                {artist.name}
                            </Link>
                            {index < item.artists.length - 1 && ','}
                        </div>
                    ))}
                </div>
            </div>
            {item.album && item.album.name && (
                <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                    <Link href={item.album.external_urls.spotify}> {item.album.name} </Link>
                </div>
            )}
            {item.album && item.album.release_date && (
                <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                    {convertDate(item.album.release_date)}
                </div>
            )}
            {item.duration_ms && (
                <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                    {convertMs(item.duration_ms)}
                </div>
            )}
        </div>
    );
}