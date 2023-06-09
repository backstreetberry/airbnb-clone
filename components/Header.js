import Image from "next/image";
import {
	MagnifyingGlassIcon,
	GlobeAltIcon,
	UsersIcon,
	UserCircleIcon,
	Bars3Icon,
} from "@heroicons/react/24/solid";

const Header = () => {
	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
			{/* left */}
			<div className="relative flex items-center h-10 cursor-pointer my-auto">
				<Image
					src="https://links.papareact.com/qd3"
					fill
					style={{ objectFit: "contain", objectPosition: "left" }}
				/>
			</div>

			{/* middle - Search */}
			<div className="flex justify-between items-center md:border-2 rounded-full py-2 md:shadow-sm">
				<input
					className="pl-5 bg-transparent outline-none text-sm text-gray-500 placeholder-gray-400"
					type="text"
					placeholder="Start your Search"
				/>
				<MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-1 cursor-pointer mx-2" />
			</div>

			{/* right */}
			<div className="flex space-x-4 items-center justify-end text-gray-500">
				<p className="hidden md:inline cursor-pointer">Become a host</p>
				<GlobeAltIcon className="h-6 cursor-pointer" />
				<div className="flex items-center space-x-2 border-2 p-2 rounded-full">
					<Bars3Icon className="h-6" />
					<UserCircleIcon className="h-6" />
				</div>
			</div>
		</header>
	);
};

export default Header;
