import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "İngilizce Kelime Öğrenme",
  description: "İngilizce kelimeleri eğlenceli bir şekilde öğrenin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.className} antialiased transition-colors duration-300 dark:bg-gray-900`}>
        <ClientLayout>
          <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
            <Header />
            {children}
          </div>
        </ClientLayout>
      </body>
    </html>
  );
} 