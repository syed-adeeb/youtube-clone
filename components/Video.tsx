import Image from "next/legacy/image";
import { useRouter } from "next/router";
import React from "react";

type Props = { video: Video };

const Video = ({ video }: Props) => {
	const formatter = Intl.NumberFormat("en", { notation: "compact" });
	const views = formatter.format(video.views);
	const router = useRouter();
	return (
		<div className=" flex justify-center items-center">
			<div
				className="cursor-pointer flex flex-col"
				onClick={() => router.push(video.url)}>
				<Image
					src={video.bestThumbnail.url}
					width={video.bestThumbnail.width}
					height={video.bestThumbnail.height}
					alt={video.type}
					className="rounded-xl mx-auto"
				/>
				<div className="flex my-4">
					<div className="w-[45px] h-7  object-cover max-w-auto ml-2">
						<Image
							src={video.author.bestAvatar.url}
							width={516}
							height={516}
							objectFit="cover"
							className="rounded-full border border-white/80"
						/>
					</div>
					<div className="flex flex-col ml-4">
						<h4 className="ml-2 font-semibold truncate whitespace-normal">
							{video.title}
						</h4>
						<h4 className="ml-2 truncate text-sm text-gray-300">
							{video.author.name}
						</h4>
						<h4 className="ml-2 truncate text-sm text-gray-300">
							{`${views} views • ${video.uploadedAt}`}
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Video;
