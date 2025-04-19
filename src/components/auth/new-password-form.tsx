"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewPasswordSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useState, useTransition } from "react";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { useSearchParams } from "next/navigation";
import { newPasswordReset } from "@/actions/new-password-reset";

export function NewPasswordForm() {
  const [isSuccess, setIsSuccess] = useState<string | undefined>("");
  const [isError, setIsError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });
  const searchParam = useSearchParams();
  const token = searchParam.get("token");

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setIsSuccess("");
    setIsError("");
    console.log(values);
    startTransition(() => {
    //   if (!token) {
    //     setIsError("Missing token");
    //     return;
    //   }
      newPasswordReset(values, token as string).then((data) => {
        setIsError(data?.error);
        setIsSuccess(data?.success);
      });
    });
  };

  return (
    <CardWrapper
      headerHeading="GeekPie"
      headerLabel="Enter a new password"
      backButtonLabel="Back to Sign In"
      backButtonHref="/auth/signin"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormError message={isError} />
          <FormSuccess message={isSuccess} />

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isPending}
          >
            Reset Password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
