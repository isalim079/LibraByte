import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./Context/AuthProvider";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";

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
            </body>
        </html>
    );
}
