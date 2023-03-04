import Image from "next/legacy/image";
import React from "react";

type Props = {
	shelf: Shelf;
};

const Shelf = ({ shelf }: Props) => {
	return (
		<div className="hidden 3xl:flex">
			<div className="cursor-pointer flex flex-col">
				<div className="">
					<Image
						src={shelf?.items[0]?.bestThumbnail?.url}
						width={516}
						height={289}
						alt={shelf.type}
						className="rounded-xl "
					/>
				</div>
				<div className="flex my-4">
					<div className="flex flex-col">
						<h4 className="ml-2 font-semibold text-center mx-auto  whitespace-normal">
							{shelf.title}
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shelf;
