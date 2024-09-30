import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { spotifyApi } from "@/lib/spotify";

export async function GET(req: NextRequest) {
    try {
        const token = await getToken({ req });
        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        spotifyApi.setAccessToken(token.accessToken as string);
        const response = await spotifyApi.getMe();

        const profile = {
            display_name: response.body.display_name,
            external_urls: response.body.external_urls,
            images: response.body.images,
        }

        return NextResponse.json(profile);
    } catch (error) {
        console.error('Erreur lors de la récupération du profil Spotify:', error);
        return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
    }
}