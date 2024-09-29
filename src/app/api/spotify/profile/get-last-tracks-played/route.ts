import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { spotifyApi } from "@/lib/spotify";

export async function GET(req: NextRequest) {
    try {
        const token = await getToken({req});
        if (!token) {
            return NextResponse.json({error: 'Unauthorized'}, {status: 401});
        }

        spotifyApi.setAccessToken(token.accessToken as string);

        const response = await spotifyApi.getMyRecentlyPlayedTracks({
            limit: 5
        });
        return NextResponse.json(response.body);
    } catch (error) {
        console.error('Erreur lors de la récupération des titres récemment écoutés:', error);
        return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
    }
}