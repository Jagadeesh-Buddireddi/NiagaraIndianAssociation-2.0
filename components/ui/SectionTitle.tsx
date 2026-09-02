"use client";

import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      className="text-center max-w-4xl mx-auto"
    >
      <p className="uppercase tracking-[5px] text-orange-500 font-semibold">

        {eyebrow}

      </p>

      <h2 className="mt-5 text-5xl lg:text-6xl font-display font-bold">

        {title}

      </h2>

      <p className="mt-6 text-slate-500 leading-8">

        {subtitle}

      </p>

    </motion.div>
  );
}