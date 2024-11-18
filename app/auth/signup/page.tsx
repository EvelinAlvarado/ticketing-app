import AuthSideContent from "@/components/AuthSideContent ";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const SignUp = ({ onToggle }: { onToggle: () => void }) => {
  return (
    <div className="flex w-full">
      <AuthSideContent
        title="Welcome Back!"
        description="To keep connected with us, please login with your personal info."
        buttonText="Go to Log in"
        onClick={onToggle}
      />
      <div className="w-full sm:w-3/5 p-2 md:p-5">
        <div className=" text-primary-shades">
          <CardHeader>
            <CardTitle>Create Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex gap-2">
                  <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" placeholder="Name" />
                  </div>
                  <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input type="text" id="lastName" placeholder="Last Name" />
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="Email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input type="password" id="password" placeholder="Password" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col w-full">
            <Button type="submit">Sign up</Button>
            <CardDescription className="sm:hidden">
              Already have an account?
              <Link href="/auth/login" onClick={onToggle}>
                <Button variant="link" className="w-min">
                  Sign up
                </Button>
              </Link>
            </CardDescription>
            <div className="flex items-center space-x-2 w-full pb-2 sm:pt-2">
              <hr className="flex-grow border-primary-shades dark:border-primary-shades" />
              <span className="text-primary-shades dark:text-primary-shades text-sm">
                OR
              </span>
              <hr className="flex-grow border-primary-shades dark:border-primary-shades" />
            </div>
            <Button variant="outline-dark" type="submit">
              <FcGoogle /> Sign up with Google
            </Button>
          </CardFooter>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
