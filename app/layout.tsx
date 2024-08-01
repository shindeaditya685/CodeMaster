import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { dark } from "@clerk/themes";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CodeMaster",
  description:
    "CodeMaster is a premier coding blog offering tutorials, problem-solving tips, and in-depth guides to help you excel in programming. Discover valuable insights and enhance your coding skills with our expert content.",
  icons: {
    icon: "/assets/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-gray-900 font-sans antialiased",
          fontSans.variable
        )}
      >
        <ClerkProvider appearance={{ baseTheme: dark }}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Bounce}
            />
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
