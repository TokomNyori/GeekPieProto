"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { signin } from "@/actions/signin";
import { useState, useTransition } from "react";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";

export function SignInForm() {
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [isSuccess, setIsSuccess] = useState<string | undefined>("");
  const [isError, setIsError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const searchParam = useSearchParams();
  const callbackUrl = searchParam.get("callbackUrl");
  const urlError =
    searchParam.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with another provider"
      : "";
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { update } = useSession();
  const onSubmit = (values: z.infer<typeof SignInSchema>) => {
    setIsSuccess("");
    setIsError("");
    startTransition(() => {
      signin(values, callbackUrl as string)
        .then((data) => {
          console.log(values, data);
          if (data.error) {
            form.reset();
            console.log(data.error);
            setIsError(data.error);
          }

          if (data.success) {
            form.reset();
            update()
            setIsSuccess(data.success);
          }

          if (data.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch((error) => {
          console.log(error);
          setIsError(error.message);
        });
    });
  };

  return (
    <CardWrapper
      headerHeading="GeekPie"
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/signup"
      showSocial
      socialBtnText="Sign in with Google"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {showTwoFactor && (
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  console.log(field),
                  (
                    <FormItem>
                      <FormLabel>Enter Verification code</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="123456"
                          type="number"
                          disabled={isPending}
                          className="h-11"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )
                )}
              />
            )}
            {!showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Email</FormLabel> */}
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Email"
                          type="email"
                          disabled={isPending}
                          className="h-11"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Password</FormLabel> */}
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Password"
                          type="password"
                          disabled={isPending}
                          className="h-11"
                        />
                      </FormControl>
                      <Button
                        className="flex w-full justify-end px-0 font-normal"
                        size={`sm`}
                        variant="link"
                        asChild
                      >
                        <Link href={`/auth/reset`}>Forgot Password?</Link>
                      </Button>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
          </div>

          <FormError message={isError || urlError} />
          <FormSuccess message={isSuccess} />

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isPending}
          >
            {showTwoFactor ? "Confirm" : "Sign In"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
