"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type CoinT = {
	name: string;
	id: string;
	symbol: string;
	current_price: number;
	image: string;
	price_change_percentage_24h: number;
	market_cap: number;
};

function numberWithCommas(x: number) {
	return x
		.toFixed(2)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function MarketTable() {
	const [loadCoins, setLoadCoins] = useState<CoinT[]>([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const router = useRouter();
	useEffect(() => {
		axios
			.get("https://api.coingecko.com/api/v3/coins/markets", {
				params: {
					vs_currency: "usd",
					order: "market_cap_desc",
					per_page: 10,
					page,
					sparkline: false,
				},
			})
			.then((res) => {
				setLoadCoins(res.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [page]);

	return (
		<section id="market" className="w-full p-10 md:p-20">
			<div className="flex flex-col items-center ml-auto mr-auto max-w-[130rem] px-0 lg:px-20">
				<div className="flex w-full">
					<h1 className="font-bold text-3xl sm:text-5xl">Market Update</h1>
				</div>
				<div className="flex w-full flex-col mt-6 overflow-x-auto">
					<div className="min-w-[1200px] w-full flex flex-col">
						<div className="flex flex-row gap-4 bg-gradient-to-r from-[#2600fc] to-[#ff00ea] py-2 px-4 rounded-t-md justify-between">
							<p className="text-2xl font-semibold text-left w-[25%]">Coin</p>
							<p className="text-2xl font-semibold text-right w-[25%]">Price</p>
							<p className="text-2xl font-semibold text-right w-[25%]">
								24h Change
							</p>
							<p className="text-2xl font-semibold text-right w-[25%]">
								Market Cap
							</p>
						</div>
						{loading ? (
							<span className="loading loading-infinity w-[150px] self-center"></span>
						) : (
							loadCoins.map((coin) => {
								return (
									<div
										key={coin.id}
										className="flex flex-row gap-0 md:gap-4 items-center hover:bg-secondary-bg/75 cursor-pointer py-5 px-4 justify-between border-b"
										onClick={() => router.push(`coin/${coin.id.toLowerCase()}`)}
									>
										<p className="flex items-center gap-5 text-2xl font-semibold flex-row  w-[25%]">
											<Image
												src={coin.image}
												alt={coin.name}
												width={50}
												height={50}
											/>
											{coin.name}
										</p>
										<p className="text-2xl font-semibold text-right w-[25%]">
											${numberWithCommas(coin.current_price)}
										</p>
										<p
											className={`${
												coin.price_change_percentage_24h <= 0
													? "text-red-600"
													: "text-green-400"
											} text-2xl font-semibold text-right w-[25%]`}
										>
											{coin.price_change_percentage_24h.toFixed(2)}%
										</p>
										<p className="text-2xl font-semibold text-right w-[25%]">
											${numberWithCommas(coin.market_cap)}
										</p>
									</div>
								);
							})
						)}
					</div>
				</div>
				<div className="flex flex-row gap-4 mt-4 self-center">
					{[1, 2, 3, 4, 5].map((num) => {
						return (
							<div
								key={num}
								className={`${
									page === num
										? "bg-gradient-to-r from-[#2600fc] to-[#ff00ea] text-white"
										: "bg-white text-black"
								} cursor-pointer px-4 py-2 rounded-full`}
								onClick={() => {
									setPage(num);
								}}
							>
								{num}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
