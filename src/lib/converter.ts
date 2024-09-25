export function convertMs(ms: number): string {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);

    const formattedSeconds = String(seconds % 60).padStart(2, '0');

    return `${minutes}m ${formattedSeconds}s`;
}


export function convertDate(date: string): string {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const monthIndex = newDate.getMonth();
    const year = newDate.getFullYear();

    const months = [
        "janvier", "février", "mars", "avril", "mai", "juin",
        "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ];
    return `${day} ${months[monthIndex]} ${year}`;
}
