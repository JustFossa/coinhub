"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Coin from "./Coin";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

type CoinT = {
	name: string;
	id: string;
	symbol: string;
	current_price: number;
	image: string;
	price_change_percentage_24h: number;
};

export default function Header() {
	const [loadCoins, setLoadCoins] = useState<CoinT[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get("https://api.coingecko.com/api/v3/coins/markets", {
				params: {
					vs_currency: "usd",
					order: "market_cap_desc",
					per_page: 3,
					page: 1,
					sparkline: false,
				},
			})
			.then((response) => {
				setLoadCoins(response.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<section
			id="home"
			className="bg-gradient-to-t from-black/30 h-screen to-[#130749]/70 items-center justify-center flex flex-col text-white font-bold"
		>
			<div className="flex flex-col items-center absolute lg:top-[10%] translate-y-[50%] top-0 ">
				<h1 className="uppercase text-center select-none text-h1 ">
					Track and trade <br className="lg:block md:hidden" />
					<span className="uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2600fc] to-[#ff00ea]">
						crypto currencies
					</span>
				</h1>
				<div className=" sm:flex hidden flex-row gap-[4rem] font-bold text-[1.3em] flex-wrap justify-center">
					{loading ? (
						<span className="loading loading-infinity w-[150px]"></span>
					) : (
						loadCoins.map((coin) => {
							return <Coin key={coin.symbol} {...coin} />;
						})
					)}
				</div>
				<Link
					className="sm:hidden flex flex-row items-center gap-2 bg-gradient-to-r from-[#2600fc] to-[#ff00ea] px-3 py-2 rounded-full mt-[10%]"
					href="#market"
				>
					See prices <IoIosArrowDown />
				</Link>
			</div>
		</section>
	);
}
