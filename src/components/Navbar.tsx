"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ThemeToggler } from "./Theme-toggle";

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 items-center", className)}
        >
            <Menu setActive={setActive}>
                <div className="flex items-center">
                    <HoveredLink href="/">Home</HoveredLink>
                    <HoveredLink href="/todos">Todos</HoveredLink>
                    <HoveredLink href="/create-todo">Create-Todo</HoveredLink>
                    <div className="pl-52">
                        <ThemeToggler />
                    </div>
                </div>
            </Menu >
        </div >
    );
}
