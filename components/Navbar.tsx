import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";
import {
	MagnifyingGlassIcon,
	VideoCameraIcon,
	BellIcon,
	UserPlusIcon,
} from "@heroicons/react/24/outline";
import { fetchFromAPI } from "../utils/fetchFromApi";

import axios from "axios";

type Props = {};

const Navbar = ({}: Props) => {
	const [selectedCategory, setSelectedCategory] = useState("music");
	const [videos, setVideos] = useState([]);
	const axios = require("axios");

	return (
		<header>
			<section className="flex items-center justify-between px-8 py-2 space-x-2">
				{/* Left */}
				<div className="flex items-center">
					<div className="relative h-[28px] w-[60px] sm:hidden">
						<Image
							src="/logo.webp"
							layout="fill"
							alt="Logo"
							objectFit="contain"
						/>
					</div>
					<div className="hidden sm:inline-flex">
						<Image
							src="/logo-2.webp"
							width={120}
							height={56}
							alt="Logo"
							objectFit="contain"
						/>
					</div>
				</div>
				<div className="relative items-center shadow h-10 max-w-2xl w-full px-10 hidden sm:flex">
					<input
						type="text"
						placeholder="Search"
						className="px-4  py-2 bg-transparent outline-none border border-white/10 rounded-full focus:outline-blue-500 focus:border-none flex-grow"
					/>
					<div className="bg-[rgb(34,34,34)] absolute right-[38px] cursor-pointer  h-[42px] w-16 flex items-center justify-center rounded-r-full border border-white/10">
						<MagnifyingGlassIcon className="h-6 w-6 " />
					</div>
				</div>
				<div className="flex items-center space-x-2">
					<VideoCameraIcon className=" navButtons" />
					<div className="relative navButtons">
						<BellIcon className="" />
						<div className="absolute top-1 right-1 left-6 bg-red-600 rounded-full w-8 h-6 -px-1 cursor-pointer">
							<h4 className=" text-center mb-2">
								<span className="select-none">4+</span>
							</h4>
						</div>
					</div>
					<UserPlusIcon className=" navButtons " />
				</div>
			</section>
			<div className="relative items-center shadow h-10  w-full px-10  flex  mx-auto sm:hidden">
				<input
					type="text"
					placeholder="Search"
					className="px-4  py-2 bg-transparent outline-none border border-white/10 rounded-full focus:outline-blue-500 focus:border-none flex-grow"
				/>
				<div className="bg-[rgb(34,34,34)] absolute right-[38px] cursor-pointer  h-[42px] w-16 flex items-center justify-center rounded-r-full border border-white/10">
					<MagnifyingGlassIcon className="h-6 w-6 " />
				</div>
			</div>
		</header>
	);
};

export default Navbar;
