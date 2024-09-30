import Link from "next/link";

export default function DisplaySomePlaylists({playlist}: { playlist: any }) {
    return (
        <div className="bg-black3 p-2 m-2 rounded-lg flex gap-2 max-w-sm">
            {playlist.images && (
                <img
                    src={playlist.images[0].url} alt={playlist.name}
                    width={65} height={65}
                />
                )}
            {/*centrer texte ici*/}
            <div className="max-w-[18rem]">
                <Link href={playlist.external_urls.spotify}>
                    <p className="hover:underline truncate">{playlist.name}</p>
                </Link>
            </div>
        </div>
    );
}