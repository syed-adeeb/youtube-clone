import { FilmIcon } from "@heroicons/react/24/outline";
import {
	HomeIcon,
	CodeBracketIcon,
	MusicalNoteIcon,
	AcademicCapIcon,
	MicrophoneIcon,
	UserIcon,
} from "@heroicons/react/24/solid";
import { MdSportsEsports, MdSportsSoccer } from "react-icons/md";
import { RiLiveFill } from "react-icons/ri";
import { TbHanger } from "react-icons/tb";
import { CgGirl } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import React from "react";
import SidebarColumn from "./SidebarColumn";

type Props = {};

const Sidebar = (props: Props) => {
	return (
		<div className="flex-col  border-r border-white/20 w-[18%] h-[95vh] px-5 hidden xl:flex bg-gradient-to-br from-black to-gray-900/40">
			<div className="flex flex-col space-y-2 justify-between overflow-y-scroll scrollbar-hide ">
				<SidebarColumn Icon={HomeIcon} title={"New"} />
				<SidebarColumn Icon={UserIcon} title={"CodeWithHarry"} />
				<SidebarColumn Icon={CodeBracketIcon} title={"Coding"} />
				<SidebarColumn
					Icon={FaReact}
					title={"ReactJS"}
					extraClasses="w-7 h-7 -ml-1/2 text-[red] group-hover:text-white"
				/>
				<SidebarColumn
					Icon={SiNextdotjs}
					title={"NextJS"}
					extraClasses="w-7 h-7 -ml-1/2 text-[red] group-hover:text-white"
				/>
				<div className="border-b border-gray-100/40" />
				<SidebarColumn Icon={MusicalNoteIcon} title={"Music"} />
				<SidebarColumn Icon={AcademicCapIcon} title={"Education"} />
				<SidebarColumn Icon={MicrophoneIcon} title={"Podcast"} />
				<SidebarColumn Icon={FilmIcon} title={"Movie"} />

				<SidebarColumn
					Icon={MdSportsEsports}
					title={"Gaming"}
					extraClasses="w-7 h-7 -ml-1/2 text-[red] group-hover:text-white"
				/>
				<SidebarColumn
					Icon={RiLiveFill}
					title={"Live"}
					extraClasses="w-7 h-7 -ml-1/2 text-[red] group-hover:text-white"
				/>
				<SidebarColumn
					Icon={MdSportsSoccer}
					title={"Sports"}
					extraClasses="w-7 h-7 -ml-1/2 text-[red] group-hover:text-white"
				/>
				<SidebarColumn
					Icon={TbHanger}
					title={"Fashion"}
					extraClasses="w-7 h-7 -ml-1/2 text-[red] group-hover:text-white"
				/>
				<SidebarColumn
					Icon={CgGirl}
					title={"Beauty"}
					extraClasses="w-7 h-7 -ml-1/2 text-[red] group-hover:text-white"
				/>
			</div>
			<div className="flex justify-center mt-auto bg-transparent">
				<h4>
					Copyright 2023 -{" "}
					<a
						href="https://instagram.com/prokximus"
						target="0"
						className="underline">
						Prokximus
					</a>
				</h4>
			</div>
		</div>
	);
};

export default Sidebar;
