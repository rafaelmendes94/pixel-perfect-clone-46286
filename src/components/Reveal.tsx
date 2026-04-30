import { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "h2" | "p";
  animation?: "fade-up" | "fade-in" | "scale-in" | "blur-in";
}

export const Reveal = ({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  animation = "fade-up",
}: RevealProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      style={{
        animationDelay: visible ? `${delay}ms` : undefined,
        animationFillMode: "both",
      }}
      className={`${visible ? `animate-${animation}` : "opacity-0"} ${className}`}
    >
      {children}
    </Tag>
  );
};
