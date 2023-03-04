interface Video {
	url: string;
	bestThumbnail: {
		width: number;
		height: number;
		url: string;
	};
	author: {
		bestAvatar: {
			url: string;
		};
		name: string;
	};
	uploadedAt: string;
	type: string;
	title: string;
	views: number;
}
interface Channel {
	bestAvatar: title;
	name: title;
	descriptionShort: title;
	videos: number;
	url: string;
}

interface Shelf {
	type: string;
	title: string;
	items: {
		[0]: any;
		bestThumbnail: {
			url: string;
		};
	};
}

interface Playlist {
	url: string;
	firstVideo: {
		bestThumbnail: {
			url: string;
		};
	};
	type: string;
	title: string;
	owner: {
		name: string;
	};
}
