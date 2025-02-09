import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  className?: string;
}

export const HeaderLogo: React.FC<Props> = ({ className }) => {
  return (
    <Link href={"/"} className={cn("flex items-center gap-4", className)}>
      <Image src="/logo-big.png" alt="" width={28} height={28} />
      <span className="uppercase text-[16px] leading-6 text-[#151515] max-sm:hidden">
        stemps
      </span>
    </Link>
  );
};
