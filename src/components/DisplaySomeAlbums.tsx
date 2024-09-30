import Link from "next/link";
import { convertDate } from "@/lib/converter";

export default function DisplaySomeAlbums({album}: { album: any }) {
    return (
        <div className="bg-black3 p-2 m-2 rounded-lg flex gap-2 max-w-sm">
            {album.images && (
                <img
                    src={album.images[2].url} alt={album.name}
                    width={65} height={65}
                />
            )}
            <div>
                <div className="max-w-[18rem]">
                    <Link href={album.external_urls.spotify}>
                        <p className="hover:underline truncate">{album.name}</p>
                    </Link>
                </div>
                <Link href={album.artists[0].external_urls.spotify}>
                    <p className="hover:underline truncate text-gray-300 text-xs">{album.artists[0].name}</p>
                </Link>
                <p className="text-xs mt-2">{convertDate(album.release_date)}</p>
            </div>
        </div>
    );
}