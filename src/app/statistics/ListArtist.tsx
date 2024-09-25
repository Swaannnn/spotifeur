import Image from "next/image";

export default function ListArtist({data : item, displayType} : {data: any, displayType: boolean}) {
    if (displayType) {
        return (
            <div className="flex gap-2">
                {item.images && item.images[0] && (
                    <Image src={item.images[0].url} alt={item.name} width={50} height={50}/>
                )}
                <div className="flex flex-col">
                    <p>{item.name}</p>
                    <div className="flex">
                        {item.genres && item.genres.map((genre: any, index: number) => (
                            <div key={index}>
                                <p>{genre.name},</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex gap-2">
                {item.images && item.images[0] && (
                    <Image src={item.images[0].url} alt={item.name} width={200} height={200}/>
                )}
                <div className="flex flex-col">
                    <p>{item.name}</p>
                    <div className="flex">
                        {item.genres && item.genres.map((genre: any, index: number) => (
                            <div key={index}>
                                <p>{genre.name},</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}