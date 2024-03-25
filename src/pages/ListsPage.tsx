import NavbarRender from "../layouts/NavbarRender.tsx";
import {Card, CardFooter, Chip, Image, Tab, Tabs} from "@nextui-org/react";
import {movies} from "../custom/data/movies.ts";
import ProfileSidebar from "../custom/ui/ProfileSidebar.tsx";
import ConfirmationModal from "../custom/ui/ConfirmationModal.tsx";
import ChangePasswordModal from "../custom/ui/ChangePasswordModal.tsx";

export default function ListsPage() : JSX.Element {



	return (
		<>
			<NavbarRender/>
			<section>
				<div className="flex items-start justify-center lg:gap-x-14 px-2 md:px-5 lg:px-14 mt-10">
					<div className="hidden w-1/3 lg:block min-h-full">
						<ProfileSidebar />
					</div>
					<div className="flex w-full flex-col">
						<Tabs
							aria-label="Options"
							color="primary"
							variant="underlined"
							classNames={{
								tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
								cursor: "w-full bg-[#22d3ee]",
								tab: "max-w-fit px-0 h-12",
								tabContent: "group-data-[selected=true]:text-[#06b6d4]"
							}}
						>
							<Tab
								key="photos"
								title={
									<div className="flex items-center space-x-2">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
										</svg>

										<span>Favorites</span>
										<span className={"font-semibold"}>15</span>
									</div>
								}

							>
								<div className="lg:p-4">
									<div className="gap-x-2 gap-y-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6 ">
										{movies.map((link: string, index: number) => (
											<div>
												<Card className="bg-gray-800 sm:w-[115px] sm:h-[171px] md:w-[178px] md:h-[267px] lg:w-[314px] lg:h-[475px] xl:w-[150px] xl:h-[225px] hover:scale-105 transition-all duration-500 mb-1.5" key={index} isPressable>
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
														<Chip className="text-tiny text-white bg-black/70 font-medium" variant="flat" color="default" radius="lg" size="sm">
															2024
														</Chip>

													</CardFooter>
												</Card>
												<p className="text-sm px-1 font-open-sans leading-tight">lorem ipsum harvered map</p>
											</div>
											)
										)}
									</div>
								</div>
							</Tab>
							<Tab
								key="music"
								title={
									<div className="flex items-center space-x-2">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
										</svg>
										<span>Watchlist</span>
										<span className={"font-semibold"}>7</span>
									</div>
								}
							>
								<div className="lg:p-4">
									<div className="gap-x-2 gap-y-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6">
										{movies.map((link: string, index: number) => (
											<div>
												<Card className="bg-gray-800 sm:w-[115px] sm:h-[171px] md:w-[178px] md:h-[267px] lg:w-[314px] lg:h-[475px] xl:w-[150px] xl:h-[225px] hover:scale-105 transition-all duration-500 mb-1.5" key={index} isPressable>
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
														<Chip className="text-tiny text-white bg-black/70 font-medium" variant="flat" color="default" radius="lg" size="sm">
															2024
														</Chip>

													</CardFooter>
												</Card>
												<p className="text-sm px-1 font-open-sans leading-tight">lorem ipsum harvered map</p>
											</div>
											)
										)}
									</div>
								</div>
							</Tab>
							<Tab
								key="videos"
								title={
									<div className="flex items-center space-x-2">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
										</svg>

										<span>Completed</span>
										<span className={"font-semibold"}>20</span>
									</div>
								}
							>
								<div className="lg:p-4">
									<div className="gap-x-2 gap-y-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6">
										{movies.map((link: string, index: number) => (
											<div>
												<Card className="bg-gray-800 sm:w-[115px] sm:h-[171px] md:w-[178px] md:h-[267px] lg:w-[314px] lg:h-[475px] xl:w-[150px] xl:h-[225px] hover:scale-105 transition-all duration-500 mb-1.5" key={index} isPressable>
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
														<Chip className="text-tiny text-white bg-black/70 font-medium" variant="flat" color="default" radius="lg" size="sm">
															2024
														</Chip>

													</CardFooter>
												</Card>
												<p className="text-sm px-1 font-open-sans leading-tight">lorem ipsum harvered map</p>
											</div>
											)
										)}
									</div>
								</div>
							</Tab>
						</Tabs>
					</div>
				</div>
			</section>
			<ConfirmationModal title={"Delete account"} message={'Are you sure you want to delete your account?'} />
			<ChangePasswordModal />
		</>

	);
}