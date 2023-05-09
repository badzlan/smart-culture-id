import Hero from "../Hero";
import { Icon } from "@iconify/react";

function Home() {
	return (
		<>
			<Hero />
			<div>
				<Icon icon="fluent:food-24-filled" className="text-3xl"/>
				<span>Food</span>
			</div>
		</>
	);
}

export default Home;
