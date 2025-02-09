import { headerConstants } from "@/app/constants/header-constants";
import Link from "next/link";
import React from "react";
interface Props {
  className?: string;
}

export const HeaderNavBar: React.FC<Props> = ({ className }) => {
  return (
    <nav className={className}>
      <ul className="flex items-center gap-6">
        {headerConstants.map((item, i) => (
          <li key={i}>
            <Link
              className="text-[16px] leading-6 text-[#151515]"
              href={item.path}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
