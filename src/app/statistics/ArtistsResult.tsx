export default function ArtistsResult({ data }: { data: any }) {
    return (
        <div>
            {data ? (
                <div>
                    <p>Mes artistes préférés du moment :</p>
                    <div className="flex gap-10 flex-wrap">
                        {data.items.map((item: any, index: number) => (
                            <div key={index} className="flex gap-2">
                                {item.images && item.images[0] && (
                                    <img src={item.images[0].url} alt={item.name} width={50} height={50} />
                                )}
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>chargement</p>
            )}
        </div>
    );
}