import Link from "next/link";

export default function Join() {
	return (
		<section
			id="join"
			className="w-full text-white py-20 flex flex-col gap-5 items-center select-none"
		>
			<h1 className="uppercase text-center select-none text-h1 font-bold">
				Join us via <br className="lg:block md:hidden" />
				<span className="uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2600fc] to-[#ff00ea]">
					Discord
				</span>
			</h1>
			<p className="text-2xl text-center">
				Track and manage all your crypto in one place.
			</p>
			<Link
				className="bg-gradient-to-r from-[#2600fc] to-[#ff00ea] px-5 py-4 text-2xl font-semibold rounded-full"
				href="https://discord.gg/"
			>
				Join Via Discord{" "}
			</Link>
		</section>
	);
}
