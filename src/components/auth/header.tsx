import { Poppins } from "next/font/google";
import LoginButton from "@/components/auth/signin-button";
import { cn } from "@/lib/utils";

const popins = Poppins({ subsets: ["latin"], weight: ["400", "700", "600"] });

interface HeaderProps {
  heading: string;
  label: string;
}

export function Header({ label, heading }: HeaderProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4">
      <h1 className={cn(popins.className)}>{heading}</h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
