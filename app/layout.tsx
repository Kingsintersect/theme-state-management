import type { Metadata } from "next";
import { ThemeProvider } from '../contexts/ThemeContext';
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Solomon's Portfolio ",
  description: "Explore Solomon's portfolio showcasing my Software Development Expertise, including projects, skills, and achivements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
