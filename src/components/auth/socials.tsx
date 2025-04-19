"use client";
import { IconBrandGoogle, IconBrandApple } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import {signIn} from "next-auth/react";
import { DEFAULT_SINGIN_REDIRECT } from "@/routes";
import { useSearchParams } from "next/navigation";

interface SocialsProps {
  buttonTxt?: string;
}

export function Socials({ buttonTxt }: SocialsProps) {
  const searchParam = useSearchParams();
  const callbackUrl = searchParam.get("callbackUrl");
  const onClick  = (provider: "google") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_SINGIN_REDIRECT,
    })
  }
  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size={"lg"}
        className="flex w-full items-center gap-x-2"
        variant={"outline"}
        onClick={()=> onClick("google")}
      >
        <FcGoogle className="h-6 w-6" />
        <p className="">{buttonTxt}</p>
      </Button>
    </div>
  );
}

{
  /* <div className="flex w-full items-center gap-x-2">
  <Button size={"lg"} className="w-full" variant={"outline"}>
    <FcGoogle className="h-6 w-6" />
  </Button>
  <Button size={"lg"} className="w-full" variant={"outline"}>
    <FaApple className="h-6 w-6" />
  </Button>
</div>; */
}
