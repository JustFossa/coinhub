import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
	name: string;
	id: string;
	symbol: string;
	current_price: number;
	image: string;
	price_change_percentage_24h: number;
};

function numberWithCommas(x: number) {
	return x
		.toFixed(2)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function Coin(props: Props) {
	const router = useRouter();
	return (
		<div
			className="flex flex-col items-center gap-y-2 cursor-pointer sm:scale-75 md:scale-100"
			onClick={() => router.push(`coin/${props.id.toLowerCase()}`)}
		>
			<Image src={props.image} alt={props.name} width={90} height={90} />
			<div className="flex flex-row capitalize gap-2 items-center">
				<h1 className="text-2xl font-bold">{props.name}</h1>
				<h1
					className={`${
						props.price_change_percentage_24h <= 0
							? "text-red-600"
							: "text-green-400"
					} text-2xl font-bold`}
				>
					{props.price_change_percentage_24h.toFixed(2)}%
				</h1>
			</div>
			<h2 className="text-2xl">$ {numberWithCommas(props.current_price)}</h2>
		</div>
	);
}
