import React from "react";
import { HeaderLogo } from "./header-logo";
import { HeaderNavBar } from "./header-nav-bar";
import { HeaderButtons } from "./header-buttons";
import { Container } from "../reuses-components/container";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("mb-4 ", className)}>
      <Container className="flex justify-between">
        <HeaderLogo />
        <HeaderNavBar className="max-sm:hidden " />
        <HeaderButtons />
      </Container>
    </header>
  );
};
