import { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { spotifyApi } from "@/lib/spotify";
import { JWT } from "next-auth/jwt";

async function refreshAccessToken(token: JWT) {
    try {
        spotifyApi.setAccessToken(token.accessToken as string);
        spotifyApi.setRefreshToken(token.refreshToken as string);

        const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

        return {
            ...token,
            accessToken: refreshedToken.access_token,
            expires_at: Date.now() + refreshedToken.expires_in * 1000,
            refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
        };
    } catch (error) {
        console.error("Erreur lors du rafraîchissement du token :", error);
        return { ...token, error: "RefreshAccessTokenError" };
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID!,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
            authorization:
                "https://accounts.spotify.com/authorize?scope=playlist-modify-private,user-top-read,user-read-recently-played,user-library-read,playlist-read-private,playlist-read-collaborative",
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token as string | undefined;
                token.refreshToken = account.refresh_token as string | undefined;
            }

            if (Date.now() >= (token.expires_at as number)) {
                const newToken = await refreshAccessToken(token);
                if (newToken.error) {
                    return { ...newToken, error: "RefreshAccessTokenError" };
                }
                return newToken;
            }
            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken as string | undefined;
            session.refreshToken = token.refreshToken as string | undefined;
            session.error = token.error as string | undefined;
            return session;
        },
    },
    pages: {
        signIn: '/login',
        signOut: '/login',
        // error: '/auth/error',
    }
};