"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ScrollLink } from "./scroll-link";

export function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="bg-white shadow-md">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center py-4">
					<Link href="/" className="text-2xl font-bold text-[#e95512]">
						情シスコ
					</Link>
					<div className="hidden md:flex space-x-4">
						<Link href="/" className="text-slate-600 hover:text-[#e95512]">
							ホーム
						</Link>
						<ScrollLink
							href="#services"
							className="text-slate-600 hover:text-[#e95512]"
						>
							サービス
						</ScrollLink>
						<ScrollLink
							href="#pricing"
							className="text-slate-600 hover:text-[#e95512]"
						>
							料金
						</ScrollLink>
						<a
							href="/contact"
							target="_blank"
							rel="noopener noreferrer"
							className="text-slate-600 hover:text-[#e95512]"
						>
							お問い合わせ
						</a>
					</div>
					<div className="md:hidden">
						<Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
							<Menu />
						</Button>
					</div>
				</div>
				{isMenuOpen && (
					<div className="md:hidden py-4">
						<div className="flex flex-col space-y-2">
							<Link href="/" className="text-slate-600 hover:text-[#e95512]">
								ホーム
							</Link>
							<ScrollLink
								href="#services"
								className="text-slate-600 hover:text-[#e95512]"
							>
								サービス
							</ScrollLink>
							<ScrollLink
								href="#pricing"
								className="text-slate-600 hover:text-[#e95512]"
							>
								料金
							</ScrollLink>
							<a
								href="/contact"
								target="_blank"
								rel="noopener noreferrer"
								className="text-slate-600 hover:text-[#e95512]"
							>
								お問い合わせ
							</a>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
