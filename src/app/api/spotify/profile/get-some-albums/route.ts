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

        const response = await spotifyApi.getMySavedAlbums({
            limit: 50
        })

        const albums = response.body.items.map((item: any) => {
            return {
                name: item.album.name,
                external_urls: item.album.external_urls.spotify,
                image: item.album.images[2].url,
                release_date: item.album.release_date,
                artist: {
                    name: item.album.artists[0].name,
                    external_urls: item.album.artists[0].external_urls.spotify,
                },
            }
        })

        const fourRandomAlbums = albums.sort(() => Math.random() - 0.5).slice(0, 4);

        return NextResponse.json(fourRandomAlbums);
    } catch (error) {
        console.error('Erreur lors de la récupération des albums:', error);
        return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
    }
}
