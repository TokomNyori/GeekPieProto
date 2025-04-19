"use client";
import { CardWrapper } from "./card-wrapper";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState, useTransition } from "react";
import { newVerification } from "@/actions/new-verification";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export function NewVerificationForm() {
  const [isSuccess, setIsSuccess] = useState<string | undefined>("");
  const [isError, setIsError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const searchParam = useSearchParams();
  const token = searchParam.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setIsError("Missing verification token");
      return;
    }
    newVerification(token)
      .then((data) => {
        setIsSuccess(data.success);
        setIsError(data.error);
      })
      .catch((error) => {
        setIsError("Something went wrong!");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your email"
      headerHeading="GeekPie"
      backButtonLabel="Back to Sign In"
      backButtonHref="/auth/signin"
      showSocial={false}
    >
      <div className="flex w-full items-center justify-center">
        {!isSuccess && !isError && (
          <BeatLoader
            color="#000000"
            loading
            size={16}
            aria-label="Loading Spinner"
          />
        )}
        <FormSuccess message={isSuccess} />
        <FormError message={isError} />
      </div>
    </CardWrapper>
  );
}
