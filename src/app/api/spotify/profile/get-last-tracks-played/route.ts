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

        const tracks = response.body.items.map((track: any) => {
            return {
                name: track.track.name,
                external_urls: track.track.external_urls.spotify,
                artist: {
                    name: track.track.artists[0].name,
                    external_urls: track.track.artists[0].external_urls.spotify,
                },
                album: {
                    name: track.track.album.name,
                    external_urls: track.track.album.external_urls.spotify,
                    image: track.track.album.images[2].url,
                },
                played_at: track.played_at,
            }
        })

        return NextResponse.json(tracks);
    } catch (error) {
        console.error('Erreur lors de la récupération des titres récemment écoutés:', error);
        return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
    }
}