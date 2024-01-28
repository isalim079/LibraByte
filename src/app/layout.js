import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./Context/AuthProvider";

import { Toaster } from "react-hot-toast";
import { ChatBot } from "@/components/ChatBot/ChatBot";

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


                    <div className="">
                        {children}</div>
                </AuthProvider>
                <Toaster />
            </body>
        </html>
    );
}
