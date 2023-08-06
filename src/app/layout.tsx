import "~/app/assets/globals.css";
import type { Metadata } from "next";
import Header from "~/app/components/Header";

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
      <body className="relative">
        <Header />
        {children}
      </body>
    </html>
  );
}
