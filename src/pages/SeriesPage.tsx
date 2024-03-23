import {BreadcrumbItem, Breadcrumbs, Card, CardFooter, Chip, Image, Pagination} from "@nextui-org/react";
import {movies} from "../custom/data/movies.ts";
import NavbarRender from "../layouts/NavbarRender.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../state/store.ts";
import LoadingProgress from "../custom/ui/LoadingProgress.tsx";



export default function SeriesPage() : JSX.Element {

	const  appIsLoading: boolean = useSelector((state: RootState) => state.applicationLoading.isLoading);

	if (appIsLoading) {
		return (
			<LoadingProgress />
		);
	}
	return (
		<>
			<NavbarRender/>
			<section>
				<div className={"w-full px-5 xl:w-[85%] 2xl:w-[75%] mx-auto mb-5"}>
					<div className={"my-16"}>
						<Breadcrumbs radius={"full"} size={"sm"} variant="solid" underline={"active"} classNames={{
							list: "bg-transparent px-5 border-0.1"
						}} itemClasses={{
							item: "text-smooth-gray data-[current=true]:text-white ",
							separator: "text-white/40 mx-2",
						}}
						>
							<BreadcrumbItem>Home</BreadcrumbItem>
							<BreadcrumbItem>Series</BreadcrumbItem>
						</Breadcrumbs>
					</div>
					<div className="flex flex-col gap-y-8 ">
						<div
							className="flex flex-col items-center justify-center md:flex-row md:justify-between gap-5 pb-5 border-b-0.1 border-b-smooth-gray">
							<h2 className="font-semibold text-3xl">Series</h2>
							<div
								className=" border-1 bg-gray-800 border-smooth-gray ps-2 pe-3 flex flex-nowrap items-center rounded-lg ">
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
									<g fill="none" stroke="#9CA3AF">
										<circle cx="11" cy="11" r="6"/>
										<path strokeLinecap="round" d="m20 20l-3-3"/>
									</g>
								</svg>
								<input type="text" name="searchQuery"
								       className={"bg-transparent font-light w-full h-full ms-2 py-[0.5rem] !border-0 outline-0 "}
								       placeholder={"search"}/>
							</div>
						</div>
						<div className="gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-7 ">
							{movies.map((link: string, index: number) => (
									<Card
										className="sm:w-[115px] sm:h-[171px] md:w-[178px] md:h-[267px] lg:w-[314px] lg:h-[475px] xl:w-[150px] xl:h-[225px]"
										key={index} isPressable>
										<Image
											removeWrapper
											alt="Card background"
											className="z-0 w-full h-full object-cover"
											src={link}/>
										<CardFooter
											className="flex justify-between overflow-hidden py-1 absolute bottom-1 w-[calc(100%_-_8px)] ml-1 z-10">
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
											<Chip className="text-tiny text-white bg-black/70 font-medium" variant="flat"
											      color="default" radius="lg" size="sm">
												2024
											</Chip>

										</CardFooter>
									</Card>
								)
							)}
						</div>
						<div className={"self-center"}>
							<Pagination variant={"faded"} showControls total={10} initialPage={1} size={"sm"}
							            classNames={{
								            item: "text-white bg-transparent border-0 hover:text-black hover:bg-white/10",
								            cursor: "bg-primary",
								            next: "text-white bg-transparent",
								            prev: "text-white bg-transparent",
							            }}/>
						</div>
					</div>
				</div>
			</section>
		</>

	)
}