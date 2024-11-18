import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <section className="flexCenter flex-col p-4 min-h-screen">
      <h1 className="head-text">Tickify</h1>
      <span className="head-text-span green_gradient text-center my-2 py-3">
        Your ultimate ticket management solution
      </span>
      <p className="desc text-center mt-4">
        Simplify your ticketing process and focus on what matters
        most—connecting with your audience. From events to customer support,
        we&apos;ve got you covered!
      </p>
      <div className="flexCenter flex-col md:flex-row gap-3 mt-8">
        <Link href="/auth/login">
          <Button className="text-lg w-52">Login</Button>
        </Link>
        <Link href="/auth/signup">
          <Button className="text-lg w-52" variant="outline-dark">
            Sign up
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
