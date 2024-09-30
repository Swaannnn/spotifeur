import Link from "next/link";

export default function DisplaySomePlaylists({playlist}: { playlist: any }) {
    return (
        <div className="bg-black3 p-2 m-2 rounded-lg flex gap-2 max-w-sm items-center">
            {playlist.images && playlist.images[0] ? (
                <img
                    src={playlist.images[0].url} alt={playlist.name}
                    width={64} height={64}
                />
            ) : (
                <div className="w-16 h-16 bg-gray2"></div>
            )}
            <div className="max-w-[18rem]">
                {playlist.name && playlist.external_urls && (
                    <p className=" truncate">
                        <Link className="hover:underline" href={playlist.external_urls}>
                            {playlist.name}
                        </Link>
                    </p>
                )}
                {playlist.owner && playlist.owner.display_name && (
                    <p className="truncate text-gray-300 text-xs mb-2">
                        par&nbsp;
                        <Link href={playlist.owner.external_urls} className="hover:underline">
                            {playlist.owner.display_name}
                    </Link>
                    </p>
                )}
            </div>
        </div>
    );
}