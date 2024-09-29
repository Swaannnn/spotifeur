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

export function convertFullDate(date: string): string {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const monthIndex = newDate.getMonth();
    const year = newDate.getFullYear();

    const months = [
        "janvier", "février", "mars", "avril", "mai", "juin",
        "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ];
    return `${day} ${months[monthIndex]} ${year} à ${newDate.getHours()}h ${newDate.getMinutes()}m`;
}

export function ilya(date: string): string {
    const interval = Date.now() - new Date(date).getTime()
    const seconds = Math.floor(interval / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `il y a ${days}j ${String((hours-24*days) % 24).padStart(2, '0')}h`;
    } else if (hours > 0) {
        return `il y a ${hours}h ${String((minutes-60*hours) % 60).padStart(2, '0')}m`;
    } else {
        return `${ String(minutes % 60).padStart(2, '0')}m`;
    }
}

export function convertFollowers(followers: number) : string {
    const formattedFollowers = followers.toLocaleString('fr-FR');
    return `${formattedFollowers} followers`
}