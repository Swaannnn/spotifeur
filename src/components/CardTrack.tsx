import Image from "next/image";
import Link from "next/link";

export default function CardTrack({data: item, pos}: { data: any, pos: number }) {
    if (!item) return null
    return (
        <div className="flex flex-col justify-center items-center bg-black3 p-2 m-2 rounded-lg w-64 h-80">
            <p className="mb-2">
                <i>#{pos}</i>
            </p>
            {item.album && item.album.images && item.album.images[0] && (
                <Image
                    src={item.album.images[0].url} alt={item.name}
                    width={200} height={200}
                    className="mb-4"
                />
            )}
            {item.name && (
                <p className="truncate" >
                    <Link href={item.external_urls.spotify} className="hover:underline">
                        {item.name}
                    </Link>
                </p>
            )}
            {item.artists && (
                <p className="truncate">
                    <Link href={item.artists[0].external_urls.spotify} className="hover:underline">
                        <b>{item.artists[0].name}</b>
                    </Link>
                </p>
            )}
        </div>
    )
}