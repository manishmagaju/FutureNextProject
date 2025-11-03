import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>This is header</h1>
        {children}
      </body>
    </html>
  );
}
