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

        const response = await spotifyApi.getUserPlaylists({
            limit: 50
        })

        const playlists = response.body.items.map((playlist: any) => {
            return {
                name: playlist.name,
                external_urls: playlist.external_urls,
                images: playlist.images,
                collaborative: playlist.collaborative,
                owner: playlist.owner,
            }
        })

        const fourRandomPlaylists = playlists.sort(() => Math.random() - 0.5).slice(0, 4);

        return NextResponse.json(fourRandomPlaylists);
    } catch (error) {
        console.error('Erreur lors de la récupération des playlists:', error);
        return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
    }
}
