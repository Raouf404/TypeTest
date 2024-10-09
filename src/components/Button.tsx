import React, { ReactNode } from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children?: ReactNode;
  variant?: "brown" | "beige";
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  children,
  variant = "brown",
}) => {
  const baseClasses =
    "flex items-center px-6 py-4 rounded-2xl text-base font-medium transition-colors duration-200";
  const variantClasses =
    variant === "brown"
      ? "text-white bg-brown hover:bg-brown-hover active:bg-brown-active"
      : "text-darkGray bg-beige border border-darkGray hover:bg-beige-hover active:bg-beige-active";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
    >
      {label}
      {children}
    </button>
  );
};

export default Button;
