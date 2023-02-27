import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

const Feed = (props: Props) => {
	const router = useRouter();
	const [title, setTitle] = useState("New");
	useEffect(() => {
		// Perform localStorage action
		const item = localStorage.getItem("title");
		setTitle(`${item}`);
	});

	return (
		<div className="p-4">
			<h4 className="text-2xl font-semibold">
				<span className="text-[red]">{title}</span> videos
			</h4>
		</div>
	);
};

export default Feed;
