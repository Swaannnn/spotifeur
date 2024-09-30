import Link from "next/link";
import { convertDate } from "@/lib/converter";

export default function DisplaySomeAlbums({album}: { album: any }) {
    return (
        <div className="bg-black3 p-2 m-2 rounded-lg flex gap-2 max-w-sm">
            {album.image && (
                <img
                    src={album.image} alt={album.name}
                    width={64} height={64}
                />
            )}
            <div>
                <div className="max-w-[18rem]">
                    <p className="truncate">
                        <Link className="hover:underline" href={album.external_urls}>
                            {album.name}
                        </Link>
                    </p>
                </div>
                <p className="truncate text-gray-300 text-xs">
                    <Link className="hover:underline" href={album.artist.external_urls}>
                        {album.artist.name}
                    </Link>
                </p>
                <p className="text-xs mt-2">{convertDate(album.release_date)}</p>
            </div>
        </div>
    );
}