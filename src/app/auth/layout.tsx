import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GeekPie",
  description: "Software Company",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="flex h-screen items-center justify-center antialiased">
      {children}
    </div>
  );
}
