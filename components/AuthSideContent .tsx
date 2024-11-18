import React from "react";
import { CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const AuthSideContent = ({
  title,
  description,
  buttonText,
  onClick,
}: {
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}) => (
  <div className="w-2/5 lg:px-6 text-secondary-shades-2 bg-light-accent hidden sm:flexCenter sm:flex-col rounded-md">
    <CardHeader className="text-center">
      <CardTitle className="pb-2">{title}</CardTitle>
      <hr className="w-10 border border-inherit mx-auto mb-2" />
      <CardDescription className="text-inherit text-center">
        {description}
      </CardDescription>
    </CardHeader>
    <CardFooter className="mt-4">
      <Button variant="outline-light" onClick={onClick}>
        {buttonText}
      </Button>
    </CardFooter>
  </div>
);

export default AuthSideContent;
