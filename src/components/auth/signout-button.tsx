"use client";
import { signout } from "@/actions/signout";
import { useSearchParams, usePathname  } from "next/navigation";

interface SignOutButtonProps {
  children?: React.ReactNode;
  asChild?: boolean;
}

export default function SignOut({ children, asChild }: SignOutButtonProps) {
  const searchParam = useSearchParams();
  const currentPath = usePathname();
  const onClick = () => {
    signout(currentPath as string);
  };

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
}
