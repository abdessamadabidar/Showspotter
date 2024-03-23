
import {motion} from "framer-motion";
import {Button} from "@nextui-org/react";
import {useEffect, useRef, useState} from "react";
import GridSectionRender from "../custom/ui/GridSectionRender.tsx";
import NavbarRender from "../layouts/NavbarRender.tsx";
import {movies} from "../custom/data/movies.ts";
import Footer from "../layouts/Footer.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../state/store.ts";
import LoadingProgress from "../custom/ui/LoadingProgress.tsx";




export default function HomePage() : JSX.Element {

	const  appIsLoading: boolean = useSelector((state: RootState) => state.applicationLoading.isLoading);


	const homeRef = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const handleScroll = () => {
		if (homeRef) {
			homeRef.current?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
		}
	}


	useEffect(() => {
		setIsVisible(true);
	}, [])



	if (appIsLoading) {
		return (
			<LoadingProgress />
		);
	}
	return (
		<>
			<NavbarRender />
			<section className="mb-20">
				<div className={"mx-auto overflow-hidden px-5 mt-24 lg:px-8 "}>
					<div className={"flex flex-col items-center gap-y-5 md:w-2/3 mx-auto"}>
						<motion.div
							initial={{y: 20 }} // Initial state
							animate={{
								x: 0,
								y: 0,
								scale: 1,
								rotate: 0,
							}}
							transition={{ duration: 0.6 }}
						>
							{
								isVisible &&
                                <p
                                    className={"text-xl text-center text-white/80"}>
                                    Find, explore and share your next obsession today.
                                </p>
							}
						</motion.div>

						<motion.div
							initial={{y: 30 }} // Initial state
							animate={{
								x: 0,
								y: 0,
								scale: 1,
								rotate: 0,
							}}
							transition={{ duration: 0.8 }}
						>
							{
								isVisible &&
                                <p
                                    className={"text-5xl lg:text-[72px] font-semibold text-center  leading-tight mb-5"}>
                                    Journey Through the Cinematic Cosmos: Where Every Tale Awaits
                                </p>
							}
						</motion.div>

						<motion.div
							initial={{y: 30 }} // Initial state
							animate={{
								x: 0,
								y: 0,
								scale: 1,
								rotate: 0,
							}}
							transition={{ duration: 1 }}
						>
							{
								isVisible &&
                                <Button onClick={handleScroll}
                                        radius="full"
                                        className="bg-gradient-to-r from-pink-500 to-violet-600 font-medium md:font-semibold uppercase text-white shadow-sm py-6 w-[190px] text-md tracking-wider">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="9"/>
                                            <path d="m12 15l3-3m0 0l-3-3m3 3H9"/>
                                        </g>
                                    </svg>
                                    Spot Now
                                </Button>
							}
						</motion.div>
						<div className={"animate-bounce mt-8"}>
							<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12 20l6-6m-6 6l-6-6m6 6V9.5M12 4v2.5"/></svg></div>
					</div>
				</div>
				<div className={"h-[80px]"} ref={homeRef}></div>
				<div className={"w-full px-5 xl:w-[85%] 2xl:w-[75%] mx-auto"}>
					<div className="w-[95%] md:w-[40%] mx-auto relative border-1 bg-gray-800 border-smooth-gray ps-2 pe-3 flex flex-nowrap items-center rounded-lg mb-10">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="#9CA3AF"><circle cx="11" cy="11" r="6"/><path strokeLinecap="round" d="m20 20l-3-3"/></g></svg>
						<input type="text" name="searchQuery" className={"bg-transparent font-light w-full h-full ms-2 py-[0.75rem] !border-0 outline-0 "} placeholder={"search"} />
					</div>
					<div className={"flex flex-col gap-y-16"}>
						<GridSectionRender name={"Newest"} links={movies} />
						<GridSectionRender name={"Movies"} links={movies} />
						<GridSectionRender name={"Series"} links={movies} />
						<GridSectionRender name={"Anime"} links={movies} />
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}