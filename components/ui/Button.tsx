"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={clsx(
        "rounded-full px-7 py-4 font-semibold transition-all duration-300",
        variant === "primary"
          ? "bg-orange-500 text-white shadow-lg hover:bg-orange-600"
          : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100",
        className
      )}
    >
      {children}
    </motion.button>
  );
}