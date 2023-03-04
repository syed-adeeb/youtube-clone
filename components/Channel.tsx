import Image from "next/legacy/image";
import { useRouter } from "next/router";
import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

type Props = {
	channel: Channel;
};

const Channel = ({ channel }: Props) => {
	const router = useRouter();

	return (
		<div className="" onClick={() => router.push(channel.url)}>
			<div className="flex flex-col  md:w-[516px] md:h-[300px] bg-white/10 rounded-xl p-4">
				<div className="mx-auto">
					<Image
						src={channel.bestAvatar.url}
						width={80}
						height={80}
						className="rounded-full"
					/>
				</div>
				<div className="mx-auto ">
					<h2 className="text-center text-4xl ml-auto mr-auto flex items-center space-x-2 justify-center">
						{channel.name}
						<CheckCircleIcon className="w-5 h-5 mt-2 ml-2 text-gray-400" />
					</h2>

					<h4 className="text-center mt-4">{channel.descriptionShort}</h4>
				</div>
				<div className="mx-auto mt-auto">
					<h4>Videos: {channel.videos}</h4>
				</div>
			</div>
			<div className="mt-2 ml-4">
				<h4 className="capitalize text-lg font-semibold">Subscribe Now</h4>
			</div>
		</div>
	);
};

export default Channel;
