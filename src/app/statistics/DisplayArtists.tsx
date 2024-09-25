
import CardArtist from "@/app/statistics/CardArtist";
import ListArtist from "@/app/statistics/ListArtist";

export default function DisplayTracks({data, displayType} : {data: any, displayType: boolean}) {
    if (displayType) {
        console.log(data);
        return (
            data.map((item: any, index: number) => (
                <ListArtist key={index} data={item} displayType={displayType}/>
            ))
        );
    } else {
        return (
            data.map((item: any, index: number) => (
                <CardArtist key={index} data={item} displayType={displayType}/>
            ))
        );
    }
}
