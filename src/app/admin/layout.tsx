import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GeekPie",
  description: "Software Company",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <div className=""></div>
        <h1>Hello</h1>
        {children}
      </body>
    </html>
  );
}
