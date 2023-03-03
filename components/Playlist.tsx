import Image from "next/legacy/image";
import { useRouter } from "next/router";
import React from "react";
import { BsArrowBarRight } from "react-icons/bs";

type Props = {
	playlist: any;
};

const Playlist = ({ playlist }: Props) => {
	const router = useRouter();

	return (
		<div>
			<div
				className="cursor-pointer flex flex-col"
				onClick={() => router.push(playlist.url)}>
				<div className="">
					<Image
						src={playlist.firstVideo.bestThumbnail.url}
						width={516}
						height={289}
						alt={playlist.type}
						className="rounded-xl "
					/>
				</div>
				<div className="flex my-4">
					<div className="flex flex-col">
						<h4 className="ml-2 font-semibold  whitespace-normal">
							Playlist • {playlist.title}
						</h4>
						<h4 className="ml-2  text-sm text-gray-300">
							{playlist.owner.name}
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Playlist;
