import Image from "next/image";
import Link from "next/link";

export default function CardTrack({data : item} : {data: any}) {
    return (
        <div className="flex flex-col justify-center items-center bg-gray-100/5 p-2 m-2 rounded-lg w-64 h-80">
            {item.album && item.album.images && item.album.images[0] && (
                <div>
                    <Image src={item.album.images[0].url} alt={item.name} width={200} height={200}/>
                </div>
            )}
            <br/>
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
                                <b>{artist.name}</b>
                            </Link>
                            {index < item.artists.length - 1 && ','}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}