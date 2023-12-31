import { GeistMono, GeistSans } from "geist/font";
import type { Metadata } from "next";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import "/src/assets/globals.css";

export const metadata: Metadata = {
  title: "Colnago.sk",
  description: "Colnago.sk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
