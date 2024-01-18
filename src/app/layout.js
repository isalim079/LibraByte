import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import AuthProvider from "./Context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "LibraByte",
    description: "LibraByte is a library management system.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light">
            <body className={inter.className}>
                <AuthProvider>
                    <div>
                        <Navbar />
                    </div>
                    <div>{children}</div>
                </AuthProvider>
            </body>
        </html>
    );
}
