"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "./login/page";
import SignUp from "./signup/page";
import Link from "next/link";

const AuthLayout = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => setIsLogin((prev) => !prev);

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
            <Link href="/auth/signup">
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
            </Link>
          ) : (
            <Link href="/auth/login">
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
            </Link>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AuthLayout;
