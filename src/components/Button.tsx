import {ButtonHTMLAttributes, ReactElement} from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    url?: string,
    variant: "primary" | "secondary" | "outline";
    children: string
}

export function Button({ variant, className, url, children, onClick }: ButtonProps): ReactElement {
    const variants = {
        primary: "bg-spotify-green border border-spotify-green text-spotify-black rounded-full px-8 py-2 transition transform duration-150 hover:border-white hover:bg-spotify-black hover:text-white",
        secondary: "bg-spotify-black border border-white text-white rounded-full px-8 py-2 transition transform duration-150 hover:border-white hover:bg-white hover:text-spotify-black",
        outline: ""
    };

    return url ? (
        <Link
            href={url}
            className={clsx(variants[variant], className)}
        > {children} </Link>
    ) : (
        <button
            className={clsx(variants[variant], className)}
            onClick={onClick}
        > {children} </button>
    );
}
