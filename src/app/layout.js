import { Poppins, Libre_Baskerville } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

export const metadata = {
  title: "Axe Accessibility Checker",
  description: "Check if a website is accessible and compliant",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${libreBaskerville.variable}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
