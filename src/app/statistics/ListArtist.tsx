import Image from "next/image";
import Link from "next/link";
import {convertFollowers} from "@/lib/converter";
import PopularityProgressBar from "@/app/statistics/popularityProgressBar";

export default function ListArtist({data: item, pos}: { data: any, pos: number }) {
    if (!item) return null
    return (
        <div
            className="bg-black3 p-2 m-2 rounded-lg items-center text-center grid"
            style={{gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"}}
        >
            {item.images && item.images[2] && (
                <div className="flex justify-evenly items-center">
                    <div>
                        <i>#{pos}</i>
                    </div>

                    <div className="flex justify-center items-center">
                        <Image
                            src={item.images[2].url} alt={item.name}
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

            {/*{item.genres && (*/}
            {/*    <div className="truncate">*/}
            {/*        {item.genres.map((genre: any, index: number) => (*/}
            {/*            <p key={index}>{genre}</p>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*)}*/}

            <div className="flex flex-col justify-center items-center gap-2">
                {item.followers && item.followers.total && (
                    <p className="truncate">
                        {convertFollowers(item.followers.total)}
                    </p>
                )}
                {item.popularity && (
                    <div className="truncate">
                        <PopularityProgressBar popularity={item.popularity} />
                    </div>
                )}
            </div>
        </div>
    );
}