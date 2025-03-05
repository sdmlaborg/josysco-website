"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

interface ScrollLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
}

export function ScrollLink({ href, children, className }: ScrollLinkProps) {
    const router = useRouter();

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) => {
        e.preventDefault();

        if (href.startsWith("#")) {
            // 同じページ内リンクの場合
            const id = href.replace("#", "");
            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }

            // URLを更新（オプション）
            window.history.pushState(null, "", href);
        } else {
            // 別ページへのリンクの場合
            router.push(href);
        }
    };

    return (
        <a href={href} onClick={handleClick} className={className}>
            {children}
        </a>
    );
}
