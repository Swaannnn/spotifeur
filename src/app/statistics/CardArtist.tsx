import Image from "next/image";
import Link from "next/link";

export default function CardArtist({data: item, pos}: { data: any, pos: number }) {
    if (!item) return null
    return (
        <div className="flex flex-col justify-center items-center bg-black3 p-2 m-2 rounded-lg w-64 h-80">
            <p className="mb-2">
                <i>#{pos}</i>
            </p>
            {item && item.images && item.images[0] && (
                <Image
                    src={item.images[0].url} alt={item.name}
                    width={180} height={200}
                    className="mb-4"
                />
            )}
            {item.name && (
                <Link href={item.external_urls.spotify} className="block w-56 text-center truncate hover:underline">
                    <p>{item.name}</p>
                </Link>
            )}
            {item.artists && (
                <Link href={item.artists[0].external_urls.spotify} className="hover:underline">
                    <p>
                        <b>{item.artists[0].name}</b>
                    </p>
                </Link>
            )}
        </div>
    )
}