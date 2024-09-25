import Loader from "@/components/Loader";
import DisplayTracks from "@/app/statistics/DisplayTracks";
import CardArtist from "@/app/statistics/CardArtist";

export default function DisplayResult({ displayType, selectedType,  data }: { displayType: boolean, selectedType: string, data: any }) {
    if (selectedType === "tracks") {
        return (
            <div>
                {data ? (
                    <DisplayTracks data={data.items} displayType={displayType}/>
                ) : (
                    <Loader/>
                )}
            </div>
        );
    }
    return (
        <div>
            {data ? (
                <div>
                    {/*{selectedType === "tracks" && (*/}
                    {/*    <DisplayTracks data={data.items} displayType={displayType}/>*/}
                    {/*)}*/}
                    {selectedType === "artists" && (
                        <div>
                            <div className="flex gap-10 flex-wrap">
                                {data.items.map((item: any, index: number) => (
                                    <CardArtist key={index} data={item} displayType={displayType}/>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    );
}