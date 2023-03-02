import Image from "next/legacy/image";
import { useRouter } from "next/router";
import React from "react";

type Props = { video: any };

const Video = ({ video }: Props) => {
	const formatter = Intl.NumberFormat("en", { notation: "compact" });
	const views = formatter.format(video.views);
	const router = useRouter();
	return (
		<div>
			<div
				className="cursor-pointer flex flex-col"
				onClick={() => router.push(video.url)}>
				<Image
					src={video.bestThumbnail.url}
					width={video.bestThumbnail.width}
					height={video.bestThumbnail.height}
					alt={video.type}
					className="rounded-xl"
				/>
				<div className="flex my-4">
					<div className="w-14 h-7 sm:w-10 sm:h-10 relative object-contain max-w-auto">
						<Image
							src={video.author.bestAvatar.url}
							layout="fill"
							objectFit="contain"
							objectPosition={"center"}
							className="rounded-full border border-white/80"
						/>
					</div>
					<div className="flex flex-col">
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
