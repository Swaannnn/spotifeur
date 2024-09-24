
import { DefaultJWT } from "next-auth";

declare module "next-auth" {
    interface Session {
        accessToken?: string;
        refreshToken?: string
        error?: string;
    }

    interface Token extends DefaultJWT {
        accessToken?: string;
        refreshToken?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: string;
        refreshToken?: string;
        expires_at?: number;
        error?: string; // Ajoute la propriété 'error' au type 'JWT'
    }
}