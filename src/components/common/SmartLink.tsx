"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
    className?: string;
    href: string;
    onClick?: () => void;
    children: React.ReactNode;
};

export default function SmartLink({ className, href, children, onClick }: Props) {
    const pathname = usePathname() || "";

    if (href.startsWith("http")) {
        return <Link href={href}>{children}</Link>;
    }

    const cleanHref = href.startsWith("/") ? href : `/${href}`;

    // Always use the clean root href. Do not rewrite links to `/dark`.
    const finalHref = cleanHref;

    return <Link className={className} href={finalHref} onClick={onClick}>{children}</Link>;
}
