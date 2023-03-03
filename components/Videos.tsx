import React from "react";
import Channel from "./Channel";
import Playlist from "./Playlist";
import Shelf from "./Shelf";
import Video from "./Video";

type Props = {
	videos: any;
};

const Videos = ({ videos }: Props) => {
	console.log(videos);

	return (
		<div className="flex flex-wrap ">
			{videos?.map((video: any, i: number) => (
				<div className="p-4 md:w-1/3" key={i}>
					{video.type === "channel" && <Channel channel={video} />}
					{video.type === "video" && <Video video={video} />}
					{video.type === "playlist" && <Playlist playlist={video} />}
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
