import React from "react";

type Props = {
	videos: any;
};

const Videos = ({ videos }: Props) => {
	return (
		<div className="flex flex-wrap -m-4">
			{videos?.map((video: any, i: number) => (
				<div className="p-4 md:w-1/3" key={i}>
					<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
						<img
							className="lg:h-48 md:h-36 w-full object-cover object-center"
							src={
								video?.bestThumbnail?.url ||
								video?.items?.bestThumbnail?.url ||
								video?.firstVideo?.bestThumbnail.url
								// video?.bestAvatar?.url
							}
							alt={video.type}
						/>
						<div className="p-6">
							<p className="leading-relaxed mb-3">{video.title}</p>
							<div className="flex items-center flex-wrap ">
								<a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
									Learn More
								</a>
								<span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
									1.2K
								</span>
								<span className="text-gray-400 inline-flex items-center leading-none text-sm">
									6
								</span>
							</div>
						</div>
					</div>
				</div>
			))}
			{!videos && (
				<h4 className="p-4 text-red-500 animate-pulse text-2xl text-center flex">
					Daily Limit Exceed! Please try again later.
				</h4>
			)}
		</div>
	);
};

export default Videos;
