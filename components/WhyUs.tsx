import Image from "next/image";
import { ReactNode } from "react";
import { IoIosLock, IoIosRocket } from "react-icons/io";
import { IoSpeedometer } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { AiOutlineStock } from "react-icons/ai";
import { BsCollection } from "react-icons/bs";
import LockIcon from "@/public/lock.png";

export default function WhyUs() {
	return (
		<section
			id="choose-us"
			className="w-full flex flex-col items-center h-full justify-center select-none"
		>
			<h1 className="text-[3em] sm:text-[5em] text-3xl font-bold text-white uppercase ">
				Why{" "}
				<span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#2600fc] to-[#ff00ea]">
					Choose Us
				</span>
			</h1>
			<div className=" flex flex-col lg:flex-row gap-5 mt-[5%]  items-center lg:translate-x-0 translate-x-[6%]">
				<div className="flex flex-col gap-5">
					{WhyUsItem(
						"CONNECT YOUR WALLET",
						"Use Trust Wallet, Metamask or to connect to the app.",
						<FaWallet className="text-5xl " />
					)}
					{WhyUsItem(
						"SELECT YOUR QUANTITY",
						"Upload your crypto and set a title, description and price.",
						<MdModeEditOutline className="text-5xl " />
					)}
					{WhyUsItem(
						"CONFIRM TRANSACTION",
						"Earn by selling your crypto on our marketplace.",
						<IoCheckmarkDone className="text-5xl " />
					)}
				</div>
				<Image className="" src={LockIcon} alt="Why Us" width={400} />
				<div className="flex flex-col gap-5">
					{WhyUsItem(
						"RECEIVE YOUR OWN NFTS",
						"Invest all your crypto at one place on one platform.",
						<GiReceiveMoney className="text-5xl " />
					)}
					{WhyUsItem(
						"TAKE A MARKET TO SELL",
						"Discover, collect the right crypto collections to buy or sell",
						<AiOutlineStock className="text-5xl " />
					)}
					{WhyUsItem(
						"DRIVE YOUR COLLECTION",
						"We make it easy to Discover, Invest and manage.",
						<BsCollection className="text-5xl " />
					)}
				</div>
			</div>
		</section>
	);
}

function WhyUsItem(title: string, description: string, icon: ReactNode) {
	return (
		<div className="flex flex-row gap-4 bg-secondary-bg/50 p-5 rounded-2xl border-gray-800 border select-none w-[90%] lg:w-[22rem] items-center">
			<span className=" bg-gradient-to-tr  from-[#2600fc] to-[#ff00ea]  p-2 rounded-xl mb-auto">
				{icon}
			</span>
			<div className="flex flex-col">
				<h1 className="text-2xl font-bold uppercase">{title}</h1>
				<p className="text-lg">{description}</p>
			</div>
		</div>
	);
}
