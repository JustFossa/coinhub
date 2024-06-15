"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { TbBrandDiscord, TbBrandGithub } from "react-icons/tb";

export default function Navbar() {
	const [sticky, setSticky] = useState<boolean>(false);

	const handleScroll = () => {
		if (window.scrollY > 100) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};

	const goTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`
			 w-screen  top-0 fixed  bg-secondary-bg/5  text-h2 px-[3rem] py-[2rem] flex items-center justify-center`}
		>
			<div className="w-[70%] flex flex-row items-center justify-between">
				<h2 onClick={goTop} className="text-3xl font-bold cursor-pointer">
					<Link className="uppercase" href="/">
						Coinhub
					</Link>
				</h2>
				<ul className="flex flex-row gap-[4rem] font-bold  text-[1.3em]">
					<li>
						<Link
							className="hover:navbar-text-hover transition-all duration-300 ease-in-out"
							href="#home"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className="hover:navbar-text-hover transition-all duration-300 ease-in-out"
							href="#market"
						>
							Market
						</Link>
					</li>
					<li>
						<Link
							className="hover:navbar-text-hover transition-all duration-300 ease-in-out"
							href="#choose-us"
						>
							Choose Us
						</Link>
					</li>
					<li>
						<Link
							className="hover:navbar-text-hover transition-all duration-300 ease-in-out"
							href="#join"
						>
							Join
						</Link>
					</li>
				</ul>
				<div className="flex flex-row gap-[2rem]">
					<TbBrandDiscord className="text-3xl cursor-pointer" />
					<TbBrandGithub className="text-3xl cursor-pointer" />
				</div>
			</div>
		</nav>
	);
}
