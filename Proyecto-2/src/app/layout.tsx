import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import Nav2 from "../components/nav2";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Proyecto 2",
    description: "Aplicacion de fin de curso de Desarrollo Web",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Nav />
                <Nav2 />
                {children}
            </body>
        </html>
    );
}
