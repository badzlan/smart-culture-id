const Hero = () => {
	return (
		<div className="container my-20">
			<h1 className="text-4xl md:text-8xl mb-10 font-bold leading-tight">
				Selamat datang di
				<span className="primary block">Smart Culture ID</span>
			</h1>
			<p className="text-lg md:text-xl mb-10 text-gray-500">
				Platform digital yang memuat informasi tentang budaya dan tradisi dari
				setiap provinsi di Indonesia. Platform ini bertujuan untuk
				memperkenalkan, mempromosikan, dan melestarikan kekayaan budaya
				Indonesia kepada masyarakat Indonesia dan dunia.
			</p>
			<a
				href="#"
				className="bg-sky-500 text-white px-5 py-4 text-lg rounded-lg tracking-wider font-semibold hover:text-slate-300"
			>
				Ayo Eksplor
			</a>
		</div>
	);
};

export default Hero;
