import ListTrack from "@/app/statistics/ListTrack";
import CardTrack from "@/app/statistics/CardTrack";
import Loader from "@/components/Loader";

export default function DisplayTracks({data, displayType} : {data: any, displayType: boolean}) {
    if (displayType) {
        return (
            <div>
                {data ? (
                    data.map((item: any, index: number) => (
                        <ListTrack key={index} pos={index+1} data={item}/>
                    ))
                ) : (
                    <Loader />
                )}
            </div>
        );
    } else {
        return (
            <div className="flex flex-wrap justify-center">
                {data ? (
                    data.map((item: any, index: number) => (
                        <CardTrack key={index} pos={index+1} data={item}/>
                    ))
                ) : (
                    <Loader />
                )}
            </div>
        );
    }
}
