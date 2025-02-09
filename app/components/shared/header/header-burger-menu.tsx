"use client";

import { headerConstantsBurger } from "@/app/constants/header-constants";
import { cn } from "@/lib/utils";
import { ArrowLeft} from "lucide-react";
import Link from "next/link";
import React from "react";
import { useClickAway } from "react-use";
interface Props {
  className?: string;
}

export const HeaderBurgerMenu: React.FC<Props> = ({ className }) => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const ref = React.useRef(null);
  useClickAway(ref, () => {
    setOpenMenu(false);
  });

  return (
    <div className={cn("realtive z-50 h-full", className)}>
      <button
        className="w-full  active:opacity-50 px-2 py-1 h-[28px] bg-black text-white rounded-[4px]"
        onClick={() => setOpenMenu(!openMenu)}
      >
        Меню
      </button>

      <div
        ref={ref}
        className={cn(
          "absolute top-0 left-0 right-0 bg-[#FAFAFA] text-[#313130] transition-all ease-in-out duration-200   px-6 py-8 ",
          openMenu ? "translate-x-0" : "-translate-x-[200%]"
        )}
      >
        <div className=" border-b pb-[24px] border-[#313130] mb-[24px] ">
          <button
            className="w-[100%] block"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <ArrowLeft className="w-6 h-6 hover:text-[#796356] transition-all ease-in-out" />
          </button>
        </div>
        <nav>
          <ul className="flex flex-col ">
            {headerConstantsBurger.map((item, i) => (
              <li key={i}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
