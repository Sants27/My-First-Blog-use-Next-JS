"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  action: () => void;
}

export default function Button({ action, ...props }: ButtonProps) {
  return <button onClick={() => action()} {...props} />;
}
