import {Card, CardBody, Image} from "@nextui-org/react";

export default function EpisodeCard() : JSX.Element {
	const link : string = "https://c4.wallpaperflare.com/wallpaper/462/216/45/movies-dark-wednesday-addams-wednesday-tv-series-movie-poster-hd-wallpaper-preview.jpg";
	return (
		<Card shadow="sm" className="backdrop-blur bg-gray-700/30 "  isPressable onPress={() => console.log("item pressed")}>
			<CardBody className="overflow-visible p-1 ">
				<Image
					shadow="sm"
					radius="lg"
					width="100%"
					alt={""}
					className="w-full object-cover h-[140px]"
					src={link}
				/>
			</CardBody>
			<div className="px-1.5 mb-3">
				<h3 className="text-lg font-bold text-purple-400 text-start">S1E01</h3>
				<p className="text-white text-xs text-start overflow-hidden overflow-ellipsis font-open-sans leading-tight">lorem ipsum harvered map dfgfj</p>
			</div>
		</Card>
	);
}