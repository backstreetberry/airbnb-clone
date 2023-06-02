import Image from "next/image";

const Banner = () => {
	return (
		<div className="relative h-[300px] sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
			<Image src="https://links.papareact.com/0fm" fill style={{ objectFit: "cover" }} />

			<div className="absolute top-1/2 w-full text-center">
				<p className="text-sm sm:text-lg">Not sure where to go? Perfect</p>
				<button
					className="bg-white text-purple-500 font-bold px-5 py-2 
                shadow-md rounded-full my-2 hover:shadow-xl
                active:scale-90 transition duration-150"
				>
					I'm flexible
				</button>
			</div>
		</div>
	);
};

export default Banner;
