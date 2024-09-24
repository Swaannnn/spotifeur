import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Header() {
    return (
        <header className="flex justify-evenly items-center h-16">
            <Link href="/">Spotifeur</Link>
            <div className="flex gap-4">
                <Link href="/statistics">Statistiques</Link>
                <Link href="/soon">SOON</Link>
                <Link href="/soon">SOON</Link>
                <Link href="/recommendations">Recommandations</Link>
            </div>
            <a className="cursor-pointer" onClick={() => signOut({ callbackUrl: "/login" })}>Se déconnecter</a>
        </header>
    )
}
