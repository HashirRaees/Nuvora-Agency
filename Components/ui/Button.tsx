"use client";

import { useRef, ElementType, ReactNode, MouseEventHandler, Ref } from "react";
import gsap from "gsap";

type ButtonVariant = "primary" | "ghost" | "outline" | "danger" | "secondary";
type ButtonSize = "sm" | "md" | "lg";
type IconPosition = "left" | "right";

interface ButtonProps {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ElementType;
  iconPosition?: IconPosition;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[#3D0C99] to-[#00ADE0] text-white border-transparent shadow-lg shadow-[#3D0C99]/30",
  ghost:
    "bg-white/5 text-white/90 border-white/10 hover:bg-white/10 hover:border-[#00ADE0]/40 hover:text-white",
  outline:
    "bg-transparent text-[#00ADE0] border-[#3D0C99]/50 hover:bg-[#3D0C99]/10 hover:border-[#00ADE0]/50 hover:text-[#3D0C99]",
  danger:
    "bg-gradient-to-r from-[#3D0C99] to-[#00ADE0] text-white border-transparent",
  secondary:
    "bg-white/[0.08] text-white border-white/10 hover:bg-white/[0.12] hover:border-[#00ADE0]/40",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-2.5 text-sm gap-2",
  lg: "px-8 py-3.5 text-base gap-2.5",
};

const iconSizes: Record<ButtonSize, string> = {
  sm: "text-base",
  md: "text-lg",
  lg: "text-xl",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  onClick,
  type = "button",
  className = "",
  disabled = false,
  fullWidth = false,
  href,
  target,
  rel,
}: ButtonProps) {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const handleMouseEnter = () => {
    if (disabled) return;
    gsap.to(btnRef.current, {
      scale: 1.04,
      y: -2,
      duration: 0.22,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    gsap.to(btnRef.current, {
      scale: 1,
      y: 0,
      duration: 0.22,
      ease: "power2.out",
    });
  };

  const handleMouseDown = () => {
    if (disabled) return;
    gsap.to(btnRef.current, {
      scale: 0.96,
      duration: 0.1,
      ease: "power2.out",
    });
  };

  const handleMouseUp = () => {
    if (disabled) return;
    gsap.to(btnRef.current, {
      scale: 1.03,
      duration: 0.12,
      ease: "power2.out",
    });
  };

  const sharedClasses = [
    "inline-flex items-center justify-center font-semibold rounded-sm ",
    "transition-colors duration-200 cursor-pointer select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADE0]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? "w-full" : "",
    disabled ? "opacity-50 cursor-not-allowed" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        ref={btnRef as Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className={sharedClasses}
      >
        {Icon && iconPosition === "left" && <Icon className={iconSizes[size]} />}
        {children}
        {Icon && iconPosition === "right" && <Icon className={iconSizes[size]} />}
      </a>
    );
  }

  return (
    <button
      ref={btnRef as Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={sharedClasses}
    >
      {Icon && iconPosition === "left" && <Icon className={iconSizes[size]} />}
      {children}
      {Icon && iconPosition === "right" && <Icon className={iconSizes[size]} />}
    </button>
  );
}