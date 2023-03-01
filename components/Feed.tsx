import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { url } from "../utils/fetchFromApi";
import Videos from "./Videos";
type Props = {};

const Feed = (props: Props) => {
	const router = useRouter();
	const [title, setTitle] = useState("New");
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		// Perform localStorage action
		const item = localStorage.getItem("title");
		setTitle(`${item}`);
	});

	useEffect(() => {
		fetchFromAPI(`${url}${title}`).then((data: any) => setVideos(data.items));
	}, [title]);

	return (
		<div className="p-4">
			<h4 className="text-2xl font-semibold mb-10">
				<span className="text-[red]">{title}</span> videos
			</h4>

			<Videos videos={videos} />
		</div>
	);
};

export default Feed;
