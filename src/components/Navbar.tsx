"use client";

import React, { useState } from "react";
import { HoveredLink, Menu } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ThemeToggler } from "./Theme-toggle";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 items-center",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex items-center">
          <HoveredLink href="/">Home</HoveredLink>
          <HoveredLink href="/todos">Todos</HoveredLink>
          <HoveredLink href="/create-todo">Create-Todo</HoveredLink>
          <div className="sm:pl-52 pl-5">
            <ThemeToggler />
          </div>
          <div className="ml-4 lg:pl-4">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </Menu>
    </div>
  );
}
