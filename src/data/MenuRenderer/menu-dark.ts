import type { Metadata } from "next";
import { MenuItem } from "@/types/menu-dt";

export const metadata: Metadata = {
    title: "Red Shadow Designs — 3D CAD & Web Development",
    description: "Red Shadow Designs is a dark 3D CAD modeling, product visualization, and web development studio.",
};

export const darkMenu: MenuItem[] = [
    { id: 1, type: "dropdown", label: "Home", href: "/" },
    { id: 2, type: "dropdown", label: "About Us", href: "/about-us" },
    { id: 3, type: "dropdown", label: "Portfolio", href: "/portfolio" },
    { id: 4, type: "dropdown", label: "Services", href: "/service" },
    { id: 5, type: "dropdown", label: "Contact", href: "/contact-us" },
];
