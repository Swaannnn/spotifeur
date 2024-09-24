"use client";

import Image from "next/image"
import {Button} from "@/components/Button";
import {signIn} from "next-auth/react";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <Image src="/images/spotify/spotify-logo-green.png" alt="Logo Spotify" width={200} height={200}/>
                <h1>Bienvenue sur Spotifeur</h1>
                <p>Découvre de nombreuses statistiques de ton écoute Spotify.</p>
                <Button onClick={() => signIn("spotify", { callbackUrl: "/" })} variant="primary">Connexion avec Spotify</Button>
            </main>
        </div>
    );
}