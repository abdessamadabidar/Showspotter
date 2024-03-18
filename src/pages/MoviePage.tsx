import NavbarRender from "../layouts/NavbarRender.tsx";
import {BreadcrumbItem, Breadcrumbs, Card, CardFooter, Chip, Image, Pagination, Tooltip, User} from "@nextui-org/react";
import {Link} from "react-router-dom";
import ClockIcon from "../custom/ui/icons/clock-icon.tsx";
import CalendarIcon from "../custom/ui/icons/calendar-icon.tsx";
import SolidStarIcon from "../custom/ui/icons/solid-star-icon.tsx";
import LanguageIcon from "../custom/ui/icons/language-icon.tsx";
import HeartIcon from "../custom/ui/icons/heart-icon.tsx";
import BookmarkIcon from "../custom/ui/icons/bookmark-icon.tsx";
import StarIcon from "../custom/ui/icons/star-icon.tsx";
import CheckCircleIcon from "../custom/ui/icons/check-circle-icon.tsx";
import {useState} from "react";
import SolidHeartIcon from "../custom/ui/icons/solid-heart-icon.tsx";
import SolidBookmarkIcon from "../custom/ui/icons/solid-bookmark-icon.tsx";
import CheckCircleIconSolid from "../custom/ui/icons/check-circle-icon-solid.tsx";
import PlusCircleSolidIcon from "../custom/ui/icons/plus-circle-solid-icon.tsx";
import AddReviewModal from "../custom/ui/AddReviewModal.tsx";
import {useDispatch} from "react-redux";
import {toggleOpening} from "../state/modal/addReviewModalSlice.ts";
import EmblaCarousel from "../components/ui/EmblaCarousel.tsx";
import {EmblaOptionsType} from "embla-carousel";



export default function MoviePage() : JSX.Element {

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
			<NavbarRender />
			<section className="w-screen min-h-screen pt-6">
				<div className="min-h-screen px-5 md:px-60">
					<div className={"mb-6"}>
						<Breadcrumbs  radius={"full"} size={"sm"} variant="solid" underline={"active"} classNames={{
							list: "bg-transparent"
						}} itemClasses={{
							item: "text-smooth-gray data-[current=true]:text-white ",
							separator: "text-white/40 mx-2",
						}}
						>
							<BreadcrumbItem>Home</BreadcrumbItem>
							<BreadcrumbItem>Movies</BreadcrumbItem>
							<BreadcrumbItem>Wednesday</BreadcrumbItem>
						</Breadcrumbs>
					</div>
					<div className={"flex flex-col md:flex-row gap-x-10 mb-5 items-center"}>
						<Card className="lg:w-[190px] lg:h-[240px] w-[100px] h-[140px] mb-4" key={1}>
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
							<SolidStarIcon width={20} height={20} color={"#ffd819"} />
							<span className={"text-white text-lg font-semibold"}>7.8</span>
							<span className={"text-xs font-medium self-end"}>by<span className={"text-purple-700 ms-1"}>IMDB</span></span>
						</div>
						<div className={"h-1 px-3.5 py-3 flex gap-x-5  justify-center"}>
							<Tooltip size="sm"  content={isFavorite ? "Remove this movie from your favorite list": "Add this movie to your favorite list"} classNames={ToolTipStyle}>
								{
									isFavorite ?
										(
											<button onClick={handleFavoriteClick} className={"hover:scale-95 transition-all duration-200"}>
												<SolidHeartIcon width={24} height={24} color={"#FF002B"} />
											</button>
										) :
										(
											<button onClick={handleFavoriteClick} className={"hover:scale-95 transition-all duration-200"}>
												<HeartIcon width={24} height={24} color={"#FFFFFF"} />
											</button>
										)
								}
							</Tooltip>
							<Tooltip size="sm" content={isOnWatchlist ? "Remove this movie from your watch list" : "Add this movie to your watch list"} classNames={ToolTipStyle}>
								{
									isOnWatchlist ?
										(
											<button onClick={handleAddToWatchlistClick} className={"hover:scale-95 transition-all duration-200"}>
												<SolidBookmarkIcon width={24} height={24} color={"#1d4ed8"} />
											</button>
										) :
										(
											<button onClick={handleAddToWatchlistClick} className={"hover:scale-95 transition-all duration-200"}>
												<BookmarkIcon width={24} height={24} color={"#FFFFFF"} />
											</button>
										)
								}
							</Tooltip>
							<Tooltip size="sm" content={isRated ? "Rerate this movie" : "Rate this movie"} classNames={ToolTipStyle}>
								{
									isRated ?
										(
											<button onClick={handleRatedClick} className={"hover:scale-95 transition-all duration-200"}>
												<SolidStarIcon width={24} height={24} color={"#C77DFF"} />
											</button>
										) :
										(
											<button onClick={handleRatedClick} className={"hover:scale-95 transition-all duration-200"}>
												<StarIcon width={24} height={24} color={"#FFFFFF"} />
											</button>
										)
								}

							</Tooltip>
							<Tooltip size="sm"  content={isWatched ? "Remove this movie from your watched list" : "Add this movie to your watched list"} classNames={ToolTipStyle}>
								{
									isWatched ?
										(
											<button onClick={handleWatchedClick} className={"hover:scale-95 transition-all duration-200"}>
												<CheckCircleIconSolid width={24} height={24} color={"#2dc653"} />
											</button>
										) :
										(
											<button onClick={handleWatchedClick} className={"hover:scale-95 transition-all duration-200"}>
												<CheckCircleIcon width={24} height={24} color={"#FFFFFF"} />
											</button>
										)
								}
							</Tooltip>
						</div>
					</div>
					<div className={"mt-16 flex flex-col"}>
						<div className={"mb-8 flex items-center justify-between"}>
							<h3 className={"text-2xl text-white/80 font-semibold"}>Reviews</h3>
							<Tooltip size="sm" content="Add review" classNames={ToolTipStyle}>
								<button onClick={() => {dispatch(toggleOpening())}} className={"hover:scale-95 transition-all duration-200"}>
									<PlusCircleSolidIcon width={24} height={24} color={"#1d4ed8"} />
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
			<AddReviewModal />
		</>
	);
}