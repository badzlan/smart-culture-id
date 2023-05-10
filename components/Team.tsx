const Team = () => {
	return (
		<>
			<div className="mt-40 mb-20 text-center">
				<h3 className="text-2xl md:text-5xl mb-10 font-semibold">Tim Kami</h3>
				<p className="text-gray-500 md:text-xl leading-normal">
					Figur di balik Smart Cuture ID
				</p>
			</div>
			<div className="grid md:grid-cols-3 gap-8">
				<div className="mb-6 lg:mb-0">
					<div className="relative block rounded-lg border border-slate-300 p-6">
						<div className="flex flex-col gap-3">
							<div className="grow-0 shrink-0 basis-auto w-full">
								<img
									src="/badzlan.jpg"
									alt="Trendy Pants and Shoes"
									className="w-full rounded-md mb-6 lg:mb-0"
								/>
							</div>
							<div className="grow-0 shrink-0 basis-auto w-full text-center">
								<h5 className="text-xl font-bold mb-2">Badzlan Nur Dhabith</h5>
								<p className="text-gray-500">Team Leader</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mb-6 lg:mb-0">
					<div className="relative block rounded-lg border border-slate-300 p-6">
						<div className="flex flex-col gap-3">
							<div className="grow-0 shrink-0 basis-auto w-full">
								<img
									src="/ridwan.jpg"
									alt="Trendy Pants and Shoes"
									className="w-full rounded-md mb-6 lg:mb-0"
								/>
							</div>
							<div className="grow-0 shrink-0 basis-auto w-full text-center">
								<h5 className="text-xl font-bold mb-2">Ridwan Alfarezi</h5>
								<p className="text-gray-500">Front-End Developer</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mb-6 lg:mb-0">
					<div className="relative block rounded-lg border border-slate-300 p-6">
						<div className="flex flex-col gap-3">
							<div className="grow-0 shrink-0 basis-auto w-full">
								<img
									src="https://mdbootstrap.com/img/new/avatars/2.jpg"
									alt="Trendy Pants and Shoes"
									className="w-full rounded-md mb-6 lg:mb-0"
								/>
							</div>
							<div className="grow-0 shrink-0 basis-auto w-full text-center">
								<h5 className="text-xl font-bold mb-2">Abiyyu Setya Mulya</h5>
								<p className="text-gray-500">Front-End Developer</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Team;
