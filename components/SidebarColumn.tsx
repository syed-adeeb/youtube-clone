import { useRouter } from "next/router";
import React, { SVGProps, useEffect, useState } from "react";

type Props = {
	title: string;
	Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element | any;
	extraClasses?: string;
};

const SidebarColumn = ({ Icon, title, extraClasses }: Props) => {
	const router = useRouter();

	return (
		<div
			className="flex space-x-2 items-center hover:bg-[red] transition-all duration-200 ease-in-out cursor-pointer group py-3 px-4 mr-4  rounded-full"
			onClick={(e) => {
				e.preventDefault();
				localStorage.setItem("title", `${title}`);
				router.push("/");
			}}>
			<Icon
				className={
					!extraClasses
						? "h-6 text-[red] group-hover:text-white object-cover"
						: extraClasses
				}
			/>
			<h4 className="text-lg truncate">{title}</h4>
		</div>
	);
};

export default SidebarColumn;
