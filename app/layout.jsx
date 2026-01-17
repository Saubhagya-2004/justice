import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Justice",
  description: "Justice is a platform for legal services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
