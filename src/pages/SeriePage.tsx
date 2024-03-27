import Header from "../layouts/Header.tsx";
import {
	BreadcrumbItem,
	Breadcrumbs,
	Card,
	CardFooter,
	Chip,
	Image,
	Pagination, Tab,
	Tabs,
	Tooltip,
	User
} from "@nextui-org/react";
import {Link} from "react-router-dom";
import ClockIcon from "../custom/ui/icons/clock-icon.tsx";
import CalendarIcon from "../custom/ui/icons/calendar-icon.tsx";
import LanguageIcon from "../custom/ui/icons/language-icon.tsx";
import {useState} from "react";
import AddReviewModal from "../custom/ui/AddReviewModal.tsx";
import {useDispatch} from "react-redux";
import {toggleOpening} from "../state/modal/addReviewModalSlice.ts";
import EmblaCarousel from "../components/ui/EmblaCarousel.tsx";
import {EmblaOptionsType} from "embla-carousel";
import Footer from "../layouts/Footer.tsx";
import EpisodeCard from "../custom/ui/EpisodeCard.tsx";



export default function SeriePage() : JSX.Element {

	const OPTIONS: EmblaOptionsType = { align: 'start', slidesToScroll: 'auto' }
	const SLIDE_COUNT = 5
	const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

	const dispatch = useDispatch();

	const [isFavorite, setIsFavorite] = useState<boolean>();
	const [isRated, setIsRated] = useState<boolean>();
	const [isOnWatchlist, setIsOnWatchlist] = useState<boolean>();
	const [isWatched, setIsWatched] = useState<boolean>();


	const handleFavoriteClick = () => {
		setIsFavorite(!isFavorite);
	}

	const handleAddToWatchlistClick = () => {
		setIsOnWatchlist(!isOnWatchlist);
	}

	const handleRatedClick = () => {
		setIsRated(!isRated);
	}

	const handleWatchedClick = () => {
		setIsWatched(!isWatched)
	}

	const ToolTipStyle = {
		content: ["bg-gray-800 border-0.1 border-smooth-gray"]
	}

	const link : string = "https://c4.wallpaperflare.com/wallpaper/462/216/45/movies-dark-wednesday-addams-wednesday-tv-series-movie-poster-hd-wallpaper-preview.jpg";
	return (
		<>
			<Header />
			<section className="pt-6">
				<div className="min-h-screen px-4 lg:w-9/12 mx-auto">
					<div className={"mb-6"}>
						<Breadcrumbs  radius={"full"} size={"sm"} variant="solid" underline={"active"} classNames={{
							list: "bg-transparent"
						}} itemClasses={{
							item: "text-smooth-gray data-[current=true]:text-white ",
							separator: "text-white/40 mx-2",
						}}
						>
							<BreadcrumbItem>Home</BreadcrumbItem>
							<BreadcrumbItem>Series</BreadcrumbItem>
							<BreadcrumbItem>Wednesday</BreadcrumbItem>
						</Breadcrumbs>
					</div>
					<div className={"flex flex-col md:flex-row gap-x-10 mb-5 items-center"}>
						<Card className="md:w-[190px] md:h-[240px]  w-[100px] h-[140px] mb-4" key={1}>
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover"
								src={link}
							/>
							<CardFooter className="flex justify-between overflow-hidden py-1 absolute bottom-1 w-[calc(100%_-_8px)] ml-1 z-10">
								<Chip
									className={"bg-gray-700"}
									variant="shadow"
									size="sm"
									classNames={{
										base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
										content: "drop-shadow shadow-black text-white",
									}}
								>
									New
								</Chip>
							</CardFooter>
						</Card>

						{/*Movie Infos*/}
						<div className={"py-2"}>
							<h1 className={"font-semibold text-4xl md:mb-2 mb-4 md:text-start brightness-150 text-center"}>Wednesday</h1>
							<div className={"flex items-center gap-x-5 mb- flex-wrap gap-y-4 mb-4"}>
								<Chip size="sm" className="bg-transparent border-0.1 border-white/80 text-white/80 font-medium">+18</Chip>
								<div className="flex gap-x-1 items-center text-white/80 font-open-sans text-sm ">
									<Link className={"hover:text-white hover:underline whitespace-nowrap"} to={"#"}>Animation</Link>,
									<Link className={"hover:text-white hover:underline whitespace-nowrap"} to={"#"}>Short film</Link>,
									<Link className={"hover:text-white hover:underline whitespace-nowrap"}  to={"#"}>Family</Link>,
									<Link className={"hover:text-white hover:underline whitespace-nowrap"} to={"#"}>Science fiction</Link>
								</div>
								<div className="flex gap-x-2 items-center text-white/80 flex-nowrap">
									<ClockIcon width={16} height={16} color={"#1d4ed8"} />
									<span className={"font-open-sans text-sm whitespace-nowrap"}>55 min</span>
								</div>
								<div className="flex gap-x-2 items-center text-white/80 flex-nowrap">
									<CalendarIcon width={16} height={16} color={"#1d4ed8"} />
									<span className={"font-open-sans text-sm "}>2024</span>
								</div>
								<div className="flex gap-x-2 items-center text-white/80 flex-nowrap">
									<LanguageIcon width={16} height={16} color={"#1d4ed8"} />
									<span className={"font-open-sans text-sm "}>English</span>
								</div>
							</div>
							<div className="flex flex-col gap-y-2 mb-6">
								<span className="text-sm text-smooth-gray">Overview</span>
								<p className={"text-sm white leading-relaxed"}>Stannis Baratheon's fleet and army arrive at King's Landing and the battle for the city begins. Cersei plans for her and her children's future.</p>
							</div>
							<div className={"flex items-center gap-x-6 flex-wrap gap-y-5"}>
								<div className={"flex flex-col text-xs font-open-sans gap-y-2"}>
									<span className={"text-smooth-gray"}>Director</span>
									<span className={"whitespace-nowrap"}>Neil Marshall</span>
								</div>
								<div className={"flex flex-col text-xs font-open-sans gap-y-2"}>
									<span className={"text-smooth-gray"}>Writer</span>
									<span className={"whitespace-nowrap"}>George R.R. Martin, David Benioff, D.B. Weiss</span>
								</div>
								<div className={"flex flex-col text-xs font-open-sans gap-y-2"}>
									<span className={"text-smooth-gray "}>Actors</span>
									<span className={"whitespace-nowrap"}>Peter Dinklage, Lena Headey, Charles Dance</span>
								</div>
							</div>
						</div>
					</div>
					<div className={"flex flex-col md:flex-row gap-y-5 gap-x-10"}>
						<div className={"flex gap-x-3 items-center justify-center  px-3.5 py-2.5 backdrop-blur-xl bg-gray-700/30 rounded-lg "}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-600">
								<path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
							</svg>

							<span className={"text-white text-lg font-semibold"}>7.8</span>
							<span className={"text-xs font-medium self-end"}>by<span className={"text-purple-400 ms-1"}>IMDB</span></span>
						</div>
						<div className={"h-1 px-3.5 py-3 flex gap-x-5  justify-center"}>
							<Tooltip size="sm"  content={isFavorite ? "Remove this movie from your favorite list": "Add this movie to your favorite list"} classNames={ToolTipStyle}>
								{
									isFavorite ?
										(
											<button onClick={handleFavoriteClick} className={"hover:scale-95 transition-all duration-200"}>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500">
													<path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
												</svg>
											</button>
										) :
										(
											<button onClick={handleFavoriteClick} className={"hover:scale-95 transition-all duration-200"}>
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
													<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
												</svg>
											</button>
										)
								}
							</Tooltip>
							<Tooltip size="sm" content={isOnWatchlist ? "Remove this movie from your watch list" : "Add this movie to your watch list"} classNames={ToolTipStyle}>
								{
									isOnWatchlist ?
										(
											<button onClick={handleAddToWatchlistClick} className={"hover:scale-95 transition-all duration-200"}>
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
													<path strokeLinecap="round" strokeLinejoin="round" d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5" />
												</svg>
											</button>
										) :
										(
											<button onClick={handleAddToWatchlistClick} className={"hover:scale-95 transition-all duration-200"}>
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
													<path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
												</svg>
											</button>
										)
								}
							</Tooltip>
							<Tooltip size="sm" content={isRated ? "Rerate this movie" : "Rate this movie"} classNames={ToolTipStyle}>
								{
									isRated ?
										(
											<button onClick={handleRatedClick} className={"hover:scale-95 transition-all duration-200"}>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
													<path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
												</svg>
											</button>
										) :
										(
											<button onClick={handleRatedClick} className={"hover:scale-95 transition-all duration-200"}>
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
													<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
												</svg>
											</button>
										)
								}

							</Tooltip>
							<Tooltip size="sm"  content={isWatched ? "Remove this movie from your watched list" : "Add this movie to your watched list"} classNames={ToolTipStyle}>
								{
									isWatched ?
										(
											<button onClick={handleWatchedClick} className={"hover:scale-95 transition-all duration-200"}>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500">
													<path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
												</svg>

											</button>
										) :
										(
											<button onClick={handleWatchedClick} className={"hover:scale-95 transition-all duration-200"}>
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
													<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
												</svg>
											</button>
										)
								}
							</Tooltip>
						</div>
					</div>
					<div className="mt-16 ">
						<Tabs variant="underlined" classNames={{
							tabList: "relative rounded-none p-0 border-b border-divider",
							tabContent: "group-data-[selected=true]:text-primary",
							cursor: "w-full bg-primary",
						}}>
							<Tab key="season1" title="Season 1">
								<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-7 gap-x-2 gap-y-3">
									<EpisodeCard />
									<EpisodeCard />
									<EpisodeCard />
									<EpisodeCard />
									<EpisodeCard />
									<EpisodeCard />
									<EpisodeCard />
									<EpisodeCard />
								</div>
							</Tab>
							<Tab key="season2" title="Season 2">
								<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-7 gap-x-2 gap-y-3">
									<EpisodeCard />
									<EpisodeCard />
									<EpisodeCard />
									<EpisodeCard />
									<EpisodeCard />
									<EpisodeCard />
									<EpisodeCard />
								</div>
							</Tab>
							<Tab key="season3" title="Season 3">
								<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-7 gap-x-2 gap-y-3">
									<EpisodeCard />
									<EpisodeCard />
									<EpisodeCard />
									<EpisodeCard />
									<EpisodeCard />
									<EpisodeCard />
								</div>
							</Tab>
						</Tabs>
					</div>
					<div className={"mt-16 flex flex-col "}>
						<div className={"mb-8 flex items-center justify-between"}>
							<h3 className={"text-2xl text-white/80 font-semibold"}>Reviews</h3>
							<Tooltip size="sm" content="Add review" classNames={ToolTipStyle}>
								<button onClick={() => {dispatch(toggleOpening())}} className={"hover:scale-95 transition-all duration-200"}>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
										<path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
									</svg>
								</button>
							</Tooltip>
						</div>
						<div className={"flex flex-col gap-y-3"}>
							<div className={"pb-10 border-b-0.1 border-b-gray-700 mb-8"}>
								<User
									name="Jane Doe"
									description="October 4th, 2021 at 11:11 am"
									avatarProps={{
										src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
									}}
									classNames={{
										description: "text-xs"
									}}

									className={"mb-4"}
								/>
								<p className={"text-sm text-white/80 font-light"} style={{fontStyle: "italic"}}>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme</p>
							</div>
							<div className={"pb-10 border-b-0.1 border-b-gray-700 mb-8"}>
								<User
									name="Yessin kaslp"
									description="October 12th, 2021 at 13:54 am"
									avatarProps={{
										src: "https://i.pravatar.cc/171?u=a04288114e29026702d"
									}}
									classNames={{
										description: "text-xs"
									}}
									className={"mb-4"}
								/>
								<p className={"text-sm text-white/80 font-light"} style={{fontStyle: "italic"}}>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme</p>
							</div>
							<div className={"pb-10  mb-8"}>
								<User
									name="John nigga"
									description="March 25th, 2024 at 00:54 am"
									avatarProps={{
										src: "https://i.pravatar.cc/171?u=a04288114e27926702d"
									}}
									classNames={{
										description: "text-xs"
									}}
									className={"mb-4"}
								/>
								<p className={"text-sm text-white/80 font-light"} style={{fontStyle: "italic"}}>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme</p>
							</div>
						</div>
						<div className={"self-center mb-5"}>
							<Pagination variant={"faded"} showControls total={10} initialPage={1} size={"sm"}
								classNames={{
									item: "text-white bg-transparent border-0 hover:text-black hover:bg-white/10",
									cursor: "bg-primary",
									next: "text-white bg-transparent",
									prev: "text-white bg-transparent",
								}}
							/>
						</div>
					</div>
					<div className={"my-14"}>
						<h3 className={"text-2xl text-white/80 font-semibold mb-5 pb-2 border-b-0.1 border-b-gray-700"}>Recommended</h3>
						<EmblaCarousel slides={SLIDES} options={OPTIONS} />
					</div>
				</div>
			</section>
			<Footer />
			<AddReviewModal />
		</>
	);
}