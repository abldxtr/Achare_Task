import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "@/context/globalContext";
import { Toaster } from "sonner";

// const inter = Inter({ subsets: ["latin"] });
const vazir = Vazirmatn({
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "آچاره",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <GlobalProvider>
        <body className={vazir.className}>
          {children}

          <Toaster richColors position="top-center" />
        </body>
      </GlobalProvider>
    </html>
  );
}
