import { Icon } from "@iconify/react";

const Features = () => {
	return (
		<>
			<div className="my-20 text-center">
				<h3 className="text-2xl md:text-5xl mb-10 font-semibold">
					Kenapa Smart Culture ID?
				</h3>
				<p className="text-gray-500 md:text-xl leading-normal">
					Portal informasi yang memaparkan kekayaan budaya Indonesia dalam
					berbagai aspek, termasuk informasi umum, budaya, kuliner, dan
					destinasi wisata.
				</p>
			</div>
			<div className="grid md:grid-cols-2 gap-8">
				<div className="border hover:border-sky-400 p-8 rounded-lg">
					<div className="flex flex-col gap-5 mb-5">
						<Icon
							icon="material-symbols:info-outline-rounded"
							width="50"
							height="50"
							className="bg-slate-500 p-1 rounded-lg text-white"
						/>
						<span className="text-2xl md:text-4xl font-semibold">Informasi Umum</span>
					</div>
					<p className="text-slate-600 text-lg">
						Smart Culture ID memberikan gambaran lengkap
						tentang Indonesia, mulai dari sejarah, geografi, hingga
						keanekaragaman budaya.
					</p>
				</div>
				<div className="border hover:border-sky-400 p-8 rounded-lg">
					<div className="flex flex-col gap-5 mb-5">
						<Icon
							icon="healthicons:agriculture"
							width="50"
							height="50"
							className="bg-slate-500 p-1 rounded-lg text-white"
						/>
						<span className="text-2xl md:text-4xl font-semibold">Budaya</span>
					</div>
					<p className="text-slate-600 text-lg">
						Smart Culture ID mengajak pengunjung untuk menjelajahi
						ragam budaya Indonesia dari Sabang hingga Merauke.
					</p>
				</div>
				<div className="border hover:border-sky-400 p-8 rounded-lg">
					<div className="flex flex-col gap-5 mb-5">
						<Icon
							icon="mdi:food-fork-drink"
							width="50"
							height="50"
							className="bg-slate-500 p-1 rounded-lg text-white"
						/>
						<span className="text-2xl md:text-4xl font-semibold">Kuliner</span>
					</div>
					<p className="text-slate-600 text-lg">
						Smart Culture ID memberikan informasi mengenai kuliner
						Indonesia yang terkenal di berbagai belahan dunia.
					</p>
				</div>
				<div className="border hover:border-sky-400 p-8 rounded-lg">
					<div className="flex flex-col gap-5 mb-5">
						<Icon
							icon="icon-park-solid:tour-bus"
							width="50"
							height="50"
							className="bg-slate-500 p-1 rounded-lg text-white"
						/>
						<span className="text-2xl md:text-4xl font-semibold">Destinasi Wisata</span>
					</div>
					<p className="text-slate-600 text-lg">
						Smart Culture ID menyajikan berbagai informasi
						mengenai destinasi wisata Indonesia, mulai dari wisata alam,
						sejarah, hingga wisata kuliner.
					</p>
				</div>
			</div>
		</>
	);
};

export default Features;
