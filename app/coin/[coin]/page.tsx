"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import "./style.css";

type CoinT = {
	name: string;
	symbol: string;
	market_data: {
		current_price: {
			usd: number;
		};
		price_change_percentage_24h: number;
	};
	image: {
		large: string;
	};
	description: {
		en: string;
	};
	market_cap_rank: number;
};

function numberWithCommas(x: number) {
	return x
		.toFixed(2)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function CoinPage() {
	const path = usePathname();
	const [coin, setCoin] = useState<CoinT | null>(null);

	const coinName = path.split("/").pop();
	useEffect(() => {
		axios
			.get(`https://api.coingecko.com/api/v3/coins/${coinName}`)
			.then((response) => {
				setCoin(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		coin && (
			<section
				id="home"
				className="bg-gradient-to-t from-black/30 to-[#130749]/70 items-center w-screen min-h-screen justify-center flex flex-col  text-h1 font-bold"
			>
				<div className="sm:w-[80%] md:w-[70%] ml-auto mr-auto absolute top-[5%] mt-[10%]  sm:mt-[7%] md:mt-[8.5%] flex flex-col gap-5 lg:flex-row items-center  ">
					<div className="flex flex-col items-center gap-3 w-[32vw] sm:w-[100%]">
						<Image
							src={coin.image.large}
							alt={coin.name}
							width={220}
							height={220}
						/>
						<h1 className="text-4xl font-bold capitalize">{coin.name}</h1>
						<h2 className="text-2xl  capitalize font-medium">
							Rank: #{coin.market_cap_rank}
						</h2>
					</div>
					<div className="h-[2px] w-full lg:h-[300px] lg:w-[2px]   bg-white mx-5" />
					<div className="flex flex-col items-center gap-5 lg:w-[40vw] w-[90%]">
						<div className="flex flex-row items-center justify-around lg:justify-between w-full">
							<h1 className="text-lg capitalize font-medium">
								24h Change:{" "}
								<span
									className={`${
										coin.market_data.price_change_percentage_24h <= 0
											? "text-red-600"
											: "text-green-400"
									}`}
								>
									{coin.market_data.price_change_percentage_24h.toFixed(2)}%
								</span>
							</h1>
							<h1 className="text-lg capitalize font-medium">
								Price:{" "}
								<span className={`text-green-400`}>
									${numberWithCommas(coin.market_data.current_price.usd)}
								</span>
							</h1>
							<h1 className="text-lg capitalize font-medium">
								Symbol:{" "}
								<span className="lowercase">{coin.symbol.toLowerCase()}</span>
							</h1>
						</div>
						<div className="w-full overflow-y-scroll h-[20rem]" id="container">
							<p
								className="text-lg select-none font-medium"
								dangerouslySetInnerHTML={{
									__html: DOMPurify.sanitize(coin.description.en),
								}}
							></p>
						</div>
					</div>
				</div>
			</section>
		)
	);
}
