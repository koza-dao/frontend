// pages/_app.tsx

import '@/../src/app/globals.css';
import Navbar from "@/components/Navbar/Navbar";

// Navbar importu
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar /> {/* Tüm sayfalarda Navbar'ı burada ekle */}
            <Component {...pageProps} /> {/* Sayfa içeriği */}
        </>
    );
}

export default MyApp;
