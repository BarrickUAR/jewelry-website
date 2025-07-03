// inside your layout file (e.g., layout.js or RootLayout.jsx)
import { Karla, Cormorant_SC } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BackToTop from "./components/BackToTop";
import Attribition from "./components/Attribition";

// Fonts
const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

const cormorantSC = Cormorant_SC({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"], // Kullanacağın ağırlıklar
});

export const metadata = {
  title: "ED Bijuteri",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${karla.variable} ${cormorantSC.variable}`}>
      <body className="font-sans bg-white">
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <Attribition />
      </body>
    </html>
  );
}
