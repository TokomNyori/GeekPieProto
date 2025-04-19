"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Socials } from "@/components/auth/socials";
import { BackButton } from "@/components/auth/back-btn";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  headerHeading: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
  socialBtnText?: string;
}

export const CardWrapper = ({
  children,
  headerLabel,
  headerHeading,
  backButtonLabel,
  backButtonHref,
  showSocial = false,
  socialBtnText = "Continue with Google",
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} heading={headerHeading} />
      </CardHeader>
      <CardContent className="pb-4">{children}</CardContent>
      {showSocial && (
        <CardFooter className="">
          <Socials buttonTxt={socialBtnText} />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
};
