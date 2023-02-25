import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { fetchFromAPI } from "../utils/fetchFromApi";
import axios from "axios";
type Props = {
	data: YoutubeSearchData[];
};

const Home = ({  }: Props) => {
	return (
		<div className="">
			<Navbar />
			<div className="flex ">
				{/* {data.map((a) => {
					return <h1>{a.originalQuery}</h1>;
				})} */}
			</div>
		</div>
	);
};

export default Home;

