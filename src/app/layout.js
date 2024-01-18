import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./Context/AuthProvider";
<<<<<<< HEAD
import { Toaster } from "react-hot-toast";
=======
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
>>>>>>> cd2100eb6475ef97588a6758580c4b901d914bf2

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
                    <div>
                        <Footer />
                    </div>
                </AuthProvider>
                <Toaster />
            </body>
        </html>
    );
}
