import Loader from "@/components/Loader";
import DisplayTracks from "@/app/statistics/DisplayTracks";
import DisplayArtists from "@/app/statistics/DisplayArtists";

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
    } else if (selectedType === "artists") {
        return (
            <div>
                {data ? (
                    <DisplayArtists data={data.items} displayType={displayType}/>
                ) : (
                    <Loader/>
                )}
            </div>
        );
    }
}