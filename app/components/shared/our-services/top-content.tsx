import React from "react";
import { Title } from "../reuses-components/title";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
}

export const TopContent: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex justify-between items-center border-y border-[#E1E1E1] py-3 max-sm:block  max-sm:border-b-0 ",
        className
      )}
    >
      <span className="text-[40px] leading-11 text-[#A59DFF] max-sm:border-b max-sm:border-[#E1E1E1] max-sm:w-full max-sm:block">
        1.0
      </span>
      <Title text="Наши услуги" size="xl" />
      <div className="w-[30px]"></div>
    </div>
  );
};
