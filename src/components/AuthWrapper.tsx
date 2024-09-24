"use client";

import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Loader from "@/components/Loader";

interface AuthWrapperProps {
    children: React.ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === "/login") {
            return;
        }

        if (session?.error === "AccessTokenExpired" || session?.error === "RefreshAccessTokenError") {
            router.push("/login?error=expired");
        }

        if (status === "unauthenticated") {
            router.push("/login?error=expired");
        }
    }, [session, status, router, pathname]);

    if (status === "loading") {
        return <Loader />
    }

    return <>
        {children}
    </>
}
