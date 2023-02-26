import React, { SVGProps } from "react";

type Props = {
	title: string;
	Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element | any;
	extraClasses?: string;
};

const SidebarColumn = ({ Icon, title, extraClasses }: Props) => {
	return (
		<div className="flex space-x-2 items-center hover:bg-[red] transition-all duration-200 ease-in-out cursor-pointer group py-3 px-4 mr-4  rounded-full">
			<Icon
				className={
					!extraClasses ? "h-6 text-[red] group-hover:text-white" : extraClasses
				}
			/>
			<h4 className="text-lg ">{title}</h4>
		</div>
	);
};

export default SidebarColumn;
