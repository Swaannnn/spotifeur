"use client";

import "./globals.css";
import React from "react";
import {SessionProvider} from "next-auth/react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import AuthWrapper from "@/components/AuthWrapper";
import {animationdecondenuma} from "@/lib/animationdecondenuma";

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

    // animationdecondenuma()

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
        </html>
    );
}
