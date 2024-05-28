import React from "react";

export type ContainerType = {
  className?: string;
  children: React.ReactNode;
};

export default function Container({
  className = "",
  children,
  ...props
}: ContainerType) {
  return (
    <main className={`flex-1 p-4 ${className}`} {...props}>
      {children}
    </main>
  );
}
