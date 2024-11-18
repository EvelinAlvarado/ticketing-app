"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import AuthSideContent from "@/components/AuthSideContent ";

const Login = ({ onToggle }: { onToggle: () => void }) => {
  return (
    <div className="flex w-full">
      <div className="w-full sm:w-3/5 p-2 md:p-5 my-auto">
        <div className=" text-primary-shades">
          <CardHeader>
            <CardTitle>Welcome,</CardTitle>
            <CardDescription className="text-default-dark">
              Log in to manage your account and stay connected.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="Email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input type="password" id="password" placeholder="Password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col w-full">
            <Button type="submit">Log in</Button>
            <CardDescription className="sm:hidden">
              Don&apos;t have an account?
              <Link href="/auth/signup" onClick={onToggle}>
                <Button variant="link" className="w-min">
                  Sign up
                </Button>
              </Link>
            </CardDescription>
            <div className="flex items-center space-x-2 w-full pb-2 md:pt-2">
              <hr className="flex-grow border-primary-shades dark:border-primary-shades" />
              <span className="text-primary-shades dark:text-primary-shades text-sm">
                OR
              </span>
              <hr className="flex-grow border-primary-shades dark:border-primary-shades" />
            </div>
            <Button variant="outline-dark" type="submit">
              <FcGoogle /> Log in with Google
            </Button>
          </CardFooter>
        </div>
      </div>
      <AuthSideContent
        title="Hello, Friend!"
        description="Join our platform and simplify your ticketing process."
        buttonText="Go to Sign up"
        onClick={onToggle}
      />
    </div>
  );
};

export default Login;