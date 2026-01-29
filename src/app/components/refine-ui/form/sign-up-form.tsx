"use client";

import { useState } from "react";

import { InputPassword } from "./input-password";
import { Button } from "@*/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@app/components/ui/card";
import { Input } from "@*/components/ui/input";
import { Label } from "@app/components/ui/label";
import { Separator } from "@*/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  useLink,
  useNotification,
  useRefineOptions,
  useRegister,
} from "@refinedev/core";

export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { open } = useNotification();

  const Link = useLink();

  const { title } = useRefineOptions();

  const { mutate: register } = useRegister();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      open?.({
        type: "error",
        message: "Passwords don't match",
        description:
          "Please make sure both password fields contain the same value.",
      });

      return;
    }

    register({
      email,
      password,
    });
  };

  const handleSignUpWithGoogle = () => {
    register({
      providerName: "google",
    });
  };

  const handleSignUpWithGitHub = () => {
    register({
      providerName: "github",
    });
  };

  return (
    <div
      className={cn(
        "flex flex-1",
        "flex-col",
        "items-center",
        "justify-center",
        "px-6",
        "py-8",
        "min-h-svh"
      )}
    >
      <Card className={cn("sm:w-[456px]", "p-12", "mt-6")}>
        <CardHeader className={cn("px-0")}>
          <CardTitle
            className={cn(
              "text-blue-600",
              "dark:text-blue-400",
              "text-3xl",
              "font-semibold"
            )}
          >
            Sign up
          </CardTitle>
          <CardDescription
            className={cn("text-muted-foreground", "font-medium" , "dark:text-blue-500")}
          >
            Welcome to e-support.
          </CardDescription>
        </CardHeader>

        <Separator />

        <CardContent className={cn("px-0")}>
          <form onSubmit={handleSignUp}>
            <div className={cn("flex", "flex-col", "gap-2")}>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder=""
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div
              className={cn("relative", "flex", "flex-col", "gap-2", "mt-6")}
            >
              <Label htmlFor="password">Password</Label>
              <InputPassword
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div
              className={cn("relative", "flex", "flex-col", "gap-2", "mt-6")}
            >
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <InputPassword
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className={cn(
                "w-full",
                "mt-6",
                "bg-blue-600",
                "hover:bg-blue-700",
                "text-white"
              )}
            >
              Sign up
            </Button>
          </form>
        </CardContent>

        <Separator />

        <CardFooter>
          <div className={cn("w-full", "text-center text-sm")}>
            <span className={cn("text-sm", "text-muted-foreground")}>
              Have an account?{" "}
            </span>
            <Link
              to="/login"
              className={cn(
                "text-blue-600",
                "dark:text-blue-400",
                "font-semibold",
                "underline"
              )}
            >
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

SignUpForm.displayName = "SignUpForm";
