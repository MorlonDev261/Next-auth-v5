"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode
  mode?: "modal" | "redirect"
}

export const LoginButton = ({ children, mode = "redirect" }: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/login");
  };

  if (mode === "modal") {
    return (
      <span>
        Modal
      </span>
    )
  }
  return  (
    <span onClick={onClick} className="cursor-pointer">
      { children }
    </span>
  )
}
