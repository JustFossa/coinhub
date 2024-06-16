import Link from "next/link";
import {
	TbBrandFacebook,
	TbBrandTwitter,
	TbBrandDiscord,
	TbBrandYoutube,
} from "react-icons/tb";

export default function Footer() {
	return (
		<footer className="w-full  text-white py-10 flex flex-col gap-5 items-center select-none">
			<div className="flex flex-row gap-5">
				<Link href="https://facebook.com">
					<TbBrandFacebook className="text-4xl" />
				</Link>
				<Link href="https://twitter.com">
					<TbBrandTwitter className="text-4xl" />
				</Link>
				<Link href="https://discord.gg/">
					<TbBrandDiscord className="text-4xl" />
				</Link>
				<Link href="https://youtube.com">
					<TbBrandYoutube className="text-4xl" />
				</Link>
			</div>
			<div className="flex flex-row gap-5 text-lg items-center">
				<Link href="/#home">Privacy</Link>
				<Link href="/#home">Terms of Use</Link>
			</div>
		</footer>
	);
}
