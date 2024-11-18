import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flexCenter flex-col mx-8 gap-5">
      <div className="relative w-full max-w-[500px] aspect-[4/3]">
        <Image
          src="/images/404-image.svg"
          alt="Page not found"
          fill
          className="object-contain"
        />
      </div>
      <span className="desc">Oops... page not found</span>
      <Link href="/">
        <Button variant="link">Return Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
