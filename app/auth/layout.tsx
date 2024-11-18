"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "./login/page";
import SignUp from "./signup/page";
import { usePathname, useRouter } from "next/navigation";

const AuthLayout = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(pathname === "/auth/login");

  useEffect(() => {
    setIsLogin(pathname === "/auth/login");
  }, [pathname]);

  const handleToggle = () => {
    // Cambia la ruta en función del estado actual
    router.push(isLogin ? "/auth/signup" : "/auth/login");
  };

  return (
    <div className="flexCenter min-h-screen bg-secondary-shades">
      <motion.div
        className="flex w-11/12 md:w-2/3 max-w-2xl overflow-hidden rounded-md border bg-card text-card-foreground shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: 0 }}
              transition={{ type: "spring", stiffness: 90, damping: 20 }}
              className="flex w-full min-h-[570px]"
            >
              <Login onToggle={handleToggle} />
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: 0 }}
              transition={{ type: "spring", stiffness: 90, damping: 20 }}
              className="flex w-full min-h-[570px]"
            >
              <SignUp onToggle={handleToggle} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AuthLayout;
