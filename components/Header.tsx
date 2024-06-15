"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Coin from "./Coin";

type CoinT = {
	name: string;
	symbol: string;
	current_price: number;
	image: string;
	price_change_percentage_24h: number;
};

export default function Header() {
	const [loadCoins, setLoadCoins] = useState<CoinT[]>([]);

	useEffect(() => {
		axios
			.get("https://api.coingecko.com/api/v3/coins/markets", {
				params: {
					vs_currency: "usd",
					order: "market_cap_desc",
					per_page: 10,
					page: 1,
					sparkline: false,
				},
			})
			.then((response) => {
				console.log(response.data);
				setLoadCoins(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<section
			id="home"
			className="bg-gradient-to-t from-black/30  h-screen to-[#130749]/70 items-center justify-center flex flex-col  text-white text-h1 font-bold"
		>
			<div className="flex flex-col items-center absolute top-[10%] translate-y-[50%] sm:top-[7%] md:top-[8.5%]">
				<h1 className="uppercase text-center">
					Track and trade <br />{" "}
					<span className="uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2600fc] to-[#ff00ea]">
						crypto currencies
					</span>
				</h1>
				<div className="flex flex-row gap-[4rem] font-bold  text-[1.3em]">
					{loadCoins &&
						loadCoins.slice(0, 4).map((coin) => {
							return <Coin key={coin.symbol} {...coin} />;
						})}
				</div>
			</div>
		</section>
	);
}
