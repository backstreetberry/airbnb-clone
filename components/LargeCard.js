import Image from "next/image";

const LargeCard = ({ img, title, description, buttonText }) => {
	return (
		<div className="relative py-16 cursor-pointer">
			<div className="relative h-[500px] min-w-[300px]">
				<Image src={img} fill style={{ objectFit: "cover" }} className="rounded-2xl" />
			</div>

			<div className="absolute top-32 left-12">
				<h3 className="text-4xl mb-3 w-64">{title}</h3>
				<p>{description}</p>

				<button className="text-sm text-white bg-gray-800 px-4 py-2 mt-5 rounded-lg">
					{buttonText}
				</button>
			</div>
		</div>
	);
};

export default LargeCard;
