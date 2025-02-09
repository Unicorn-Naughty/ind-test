import { OurServiceCard } from "@/app/constants/our-services-constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  className?: string;
  item: OurServiceCard;
}

export const OurServicesCard: React.FC<Props> = ({ className, item }) => {
  return (
    <article className={cn("relative p-6 bg-[#F0F0F0] min-h-[256px] rounded-[8px]", className)}>
      <Image className="mb-14" src={item.image} alt="" width={80} height={80} />
      <p className="text-[32px] leading-9 text-[#151515] text-balance">{item.title}</p>
      <Link
        className="before:content-[''] absolute inset-0"
        href={item.path}
      ></Link>
    </article>
  );
};
