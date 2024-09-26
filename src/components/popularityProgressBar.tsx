export default function PopularityProgressBar({popularity}: { popularity: number }) {
    const validValue = Math.max(1, Math.min(popularity, 100));

    return (
        <div className="w-20 h-2 rounded-md border border-1 border-black">
            <div
                className="bg-white2 h-full rounded-full"
                style={{width: `${validValue}%`}}
            />
        </div>
    );
}