import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { spotifyApi } from "@/lib/spotify";

export async function GET(req: NextRequest) {
    const type = req.nextUrl.searchParams.get('type');
    const timeRange = req.nextUrl.searchParams.get('time_range') || 'short_term';
    try {
        const token = await getToken({req});
        if (!token) {
            return NextResponse.json({error: 'Unauthorized'}, {status: 401});
        }

        spotifyApi.setAccessToken(token.accessToken as string);
        if (timeRange === 'short_term' || timeRange === 'medium_term' || timeRange === 'long_term') {

            if (type === 'tracks') {
                const response = await spotifyApi.getMyTopTracks(
                    {
                        time_range: timeRange, limit: 50
                    }
                );
                return NextResponse.json(response.body);
            } else if (type === 'artists') {
                const response = await spotifyApi.getMyTopArtists(
                    {
                        time_range: timeRange, limit: 50
                    }
                );
                return NextResponse.json(response.body);
            } else {
                return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
            }
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des artistes:', error);
        return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
    }
}