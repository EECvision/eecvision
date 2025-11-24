import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import styles from "./layout.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | EECvision",
  description: "Let's make the world a better place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        <div className={styles.wrapper}>
          <div className={styles.container}>{children}</div>
          <div className={styles.footerWrapper}></div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
