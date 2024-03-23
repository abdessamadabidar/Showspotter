import NavbarRender from "../layouts/NavbarRender.tsx";
import {Card, CardFooter, Chip, Image, Tab, Tabs} from "@nextui-org/react";
import BookmarkIcon from "../custom/ui/icons/bookmark-icon.tsx";
import CheckCircleIcon from "../custom/ui/icons/check-circle-icon.tsx";
import HeartIcon from "../custom/ui/icons/heart-icon.tsx";
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
										<HeartIcon width={18} height={18} color={"#FFF"}/>
										<span>Favorites</span>
										<span className={"font-semibold"}>15</span>
									</div>
								}

							>
								<div className="lg:p-5">
									<div className="gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6 ">
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
								</div>
							</Tab>
							<Tab
								key="music"
								title={
									<div className="flex items-center space-x-2">
										<BookmarkIcon width={18} height={18} color={"#FFF"}/>
										<span>Watchlist</span>
										<span className={"font-semibold"}>7</span>
									</div>
								}
							>
								<div className="lg:p-5">
									<div className="gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6">
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
								</div>
							</Tab>
							<Tab
								key="videos"
								title={
									<div className="flex items-center space-x-2">
										<CheckCircleIcon width={18} height={18} color={"#FFF"}/>
										<span>Completed</span>
										<span className={"font-semibold"}>20</span>
									</div>
								}
							>
								<div className="lg:p-5">
									<div className="gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6">
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