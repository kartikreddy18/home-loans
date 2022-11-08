import { M_PLUS_Rounded_1c } from "@next/font/google";
import Navbar from "./Navbar";
const font = M_PLUS_Rounded_1c({ weight: "400" });
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Home Loans</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Home Loans App" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${font.className} max-w-7xl mx-auto h-screen p-5`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
