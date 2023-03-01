export const url =
	"https://youtube-search-results.p.rapidapi.com/youtube-search/?q=";

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "dcf121d8a6msh39860e46abc92e6p16de67jsn5c076d32a581",
		"X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
	},
};

export const fetchFromAPI = async (url) => {
	const data = await fetch(url, options)
		.then((res) => res.json())
		.catch((err) => console.error("error:" + err));

	return data;
};
