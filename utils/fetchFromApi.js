const axios = require("axios");

const BASE_URL = "https://youtube-v31.p.rapidapi.com/search";

const options = {
	method: "GET",
	url: BASE_URL,
	params: { q: "justin+bieber" },
	headers: {
		"X-RapidAPI-Key": process.env.YOUTUBE_RAPID_API_KEY,
		"X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
	},
};

export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);
	return data;
};
