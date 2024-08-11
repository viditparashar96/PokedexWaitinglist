import type { Metadata } from "next";
import { Prosto_One } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Prosto_One({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokesnap",
  description:
    "PokéSnap brings the world of Pokémon to life by identifying real-world objects as if they were Pokémon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
}
