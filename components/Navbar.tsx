"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { TbBrandDiscord, TbBrandGithub } from "react-icons/tb";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";

export default function Navbar() {
	const [sticky, setSticky] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>(false);
	const router = useRouter();

	const handleScroll = () => {
		if (window.scrollY > 150) {
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

	const toggleMenu = () => {
		setOpen(!open);
	};

	return (
		<>
			<nav
				className={`${sticky ? "bg-black" : "bg-secondary-bg/5"} 
			 w-screen  top-0 fixed   text-h2 px-[3rem] py-[2rem] flex items-center justify-center z-10`}
			>
				<div className="lg:w-[70%] md:w-[90%] w-full flex flex-row items-center justify-between">
					<h2 onClick={goTop} className="text-3xl font-bold cursor-pointer">
						<Link className="uppercase" href="/">
							Coinhub
						</Link>
					</h2>
					<ul className=" flex-row md:gap-[2rem] gap-[1rem] lg:gap-[4rem] font-bold md:text-lg lg:text-[1.3em] hidden md:flex">
						<li>
							<Link
								className="hover:navbar-text-hover transition-all duration-300 ease-in-out"
								href="/#home"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								className="hover:navbar-text-hover transition-all duration-300 ease-in-out"
								href="/#market"
							>
								Market
							</Link>
						</li>
						<li>
							<Link
								className="hover:navbar-text-hover transition-all duration-300 ease-in-out"
								href="/#choose-us"
							>
								Choose Us
							</Link>
						</li>
						<li>
							<Link
								className="hover:navbar-text-hover transition-all duration-300 ease-in-out"
								href="/#join"
							>
								Join
							</Link>
						</li>
					</ul>
					<div className="flex flex-row  gap-[1rem] sm:gap-[2rem]">
						<TbBrandDiscord className="text-3xl cursor-pointer" />
						<TbBrandGithub
							onClick={() =>
								router.replace("https://github.com/JustFossa/coinhub")
							}
							className="text-3xl cursor-pointer"
						/>
						<RxHamburgerMenu
							className="text-3xl cursor-pointer md:hidden"
							onClick={toggleMenu}
						/>
					</div>
				</div>
			</nav>
			<div
				className={`fixed w-full h-screen bg-white top-0 translate-x-[-100%] flex-col flex z-[999] transition-all duration-300 ease-out ${
					open && "translate-x-0"
				}`}
			>
				<RxCross2
					onClick={toggleMenu}
					className="text-black ml-auto text-5xl mt-[2%] mr-[2%] rounded-full cursor-pointer hover:bg-gray-400/10 p-1"
				/>
				<div className="flex flex-col items-center justify-center h-full gap-10 mb-[10%]">
					<Link
						className="text-black text-4xl font-semibold hover:navbar-text-hover transition-all duration-300 ease-in-out"
						href="/#home"
						onClick={toggleMenu}
					>
						Home
					</Link>
					<Link
						className="text-black text-4xl font-semibold hover:navbar-text-hover transition-all duration-300 ease-in-out"
						href="/#market"
						onClick={toggleMenu}
					>
						Market
					</Link>
					<Link
						className="text-black text-4xl font-semibold hover:navbar-text-hover transition-all duration-300 ease-in-out"
						href="/#choose-us"
						onClick={toggleMenu}
					>
						Choose Us
					</Link>
					<Link
						className="text-black text-4xl font-semibold hover:navbar-text-hover transition-all duration-300 ease-in-out"
						href="/#join"
						onClick={toggleMenu}
					>
						Join
					</Link>
				</div>
			</div>
		</>
	);
}
