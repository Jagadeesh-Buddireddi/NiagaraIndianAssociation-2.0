import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`glass rounded-[32px] p-8 ${className}`}
    >
      {children}
    </div>
  );
}