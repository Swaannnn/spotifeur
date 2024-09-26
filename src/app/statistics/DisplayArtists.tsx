import Loader from "@/components/Loader";
import ListArtist from "@/app/statistics/ListArtist";
import CardArtist from "@/app/statistics/CardArtist";

export default function DisplayArtists({data, displayType} : {data: any, displayType: boolean}) {
    if (displayType) {
        return (
            <div>
                {data ? (
                    data.map((item: any, index: number) => (
                        <ListArtist key={index} pos={index+1} data={item}/>
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
                        <CardArtist key={index} pos={index+1} data={item}/>
                    ))
                ) : (
                    <Loader />
                )}
            </div>
        );
    }
}
