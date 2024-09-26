"use client";

import "./globals.css";
import React from "react";
import {SessionProvider} from "next-auth/react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import AuthWrapper from "@/components/AuthWrapper";

// export const metadata: Metadata = {
//     title: "Spotifeur",
//     description: "",
// };

export default function RootLayout(
    {children}: Readonly<{
        children: React.ReactNode;
    }>
) {
    const pathname = usePathname()
    const hideHeaderOnPaths = ['/login'];
    const shouldHideHeader = hideHeaderOnPaths.includes(pathname);

    return (
        <html lang="fr">
            <body className="bg-black2 text-white">
            {!shouldHideHeader && <Header />}
            <SessionProvider>
                <AuthWrapper>
                    {children}
                </AuthWrapper>
            </SessionProvider>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@latest"></script>
            <script>
                const lenis = new Lenis({
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                })
            </script>
        </html>
    );
}
