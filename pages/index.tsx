import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { fetchFromAPI } from "../utils/fetchFromApi";
import axios from "axios";
import { getSession } from "next-auth/react";
import Sidebar from "../components/Sidebar";
type Props = {
	data: YoutubeSearchData[];
	session: any;
};

const Home = ({ session }: Props) => {
	return (
		<div className="">
			<Navbar />
			<main className="flex ">
				<Sidebar />
			</main>
		</div>
	);
};

export default Home;

export async function getServerSideProps(context: any) {
	const session = await getSession(context);
	return {
		props: {
			session,
		},
	};
}
