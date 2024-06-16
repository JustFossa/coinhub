"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Join from "@/components/Join";
import MarketTable from "@/components/Market";
import WhyUs from "@/components/WhyUs";

export default function Page() {
	return (
		<>
			<Header />
			<MarketTable />
			<WhyUs />
			<Join />
			<Footer />
		</>
	);
}
