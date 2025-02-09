import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { HeaderBurgerMenu } from "./header-burger-menu";
interface Props {
  className?: string;
}

export const HeaderButtons: React.FC<Props> = ({ className }) => {
  return (
    <>
      <button className={cn("flex items-center gap-4 max-sm:hidden", className)}>
        <span className="text-[16px] leading-6 text-[#151515]">Вход</span>
        <Image src="/Exclude.png" alt="" width={28} height={28} />
      </button>
      <HeaderBurgerMenu className="md:hidden"/>
    </>
  );
};
