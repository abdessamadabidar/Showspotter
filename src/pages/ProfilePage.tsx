import Header from "../layouts/Header.tsx";
import {toggleSelectAvatarModalOpening} from "../state/modal/selectAvatarModalSlice.ts";
import {useDispatch} from "react-redux";
import {Button, Card, CardFooter, Chip, Image, Input, Tab, Tabs} from "@nextui-org/react";
import {movies} from "../custom/data/movies.ts";
import SelectAvatarModal from "../custom/ui/SelectAvatarModal.tsx";
import ConfirmationModal from "../custom/ui/ConfirmationModal.tsx";
import ChangePasswordModal from "../custom/ui/ChangePasswordModal.tsx";
import {toggleOpening} from "../state/modal/confirmationModalSlice.ts";
import {toggleChangePasswordModalOpening} from "../state/modal/changePasswordModalSlice.ts";

export default function ProfilePage()  {
	const InputCustomStyle = {
		label: ["text-smooth-gray"],
		input: ["placeholder:text-white/60"],
		inputWrapper: [
			"bg-slate-900/80",
			"border-gray-700",
			"border-[0.5px]"
		]
	}
	const dispatch = useDispatch();
	return (
		<>
			<section className="">
				<Header/>
				<div className="mt-10 px-4 md:px-5 lg:w-8/12 mx-auto">
					<div className="flex flex-col md:flex-row flex-wrap">
						<div className="mb-5 flex flex-wrap flex-row gap-x-5 justify-center items-center">
							<div className="w-40 mx-auto m-0">
								<div className="size-40 rounded-full bg-gray-800 border border-white">
									<img src={"src/assets/avatars/9434619.jpg"} className={"w-full h-full object-cover rounded-full"} alt={""}/>
								</div>
								<button
									onClick={() => {
										dispatch(toggleSelectAvatarModalOpening());
									}}
									className={"bg-gradient-to-r from-pink-500 to-violet-600 p-2 rounded-full border border-white relative -top-9 -right-24"}>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"/>
										<path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"/>
									</svg>
								</button>
							</div>
							<div className="flex flex-col items-center md:items-start">
								<h1 className="text-3xl font-semibold mb-4">Abdessamad Abidar</h1>
								<div className="flex flex-nowrap items-center gap-x-2">
									<Button size="sm"  variant="bordered" radius="full" className="text-white flex flex-nowrap items-center" onClick={() => {dispatch(toggleChangePasswordModalOpening())}}>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 26" fill="currentColor" className="size-4">
											<path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
											<path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
										</svg>
										Change password
									</Button>
									<Button size="sm" variant="solid" color="danger" radius="full" className="flex flex-nowrap items-center" onClick={() => {dispatch(toggleOpening())}}>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
											<path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
										</svg>
										Delete account
									</Button>
								</div>
							</div>
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
									key="infos"
									title={
										<div className="flex items-center space-x-2">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
												<path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
											</svg>
											<span>About</span>
										</div>
									}

								>
									<div className="lg:w-8/12 pt-6">
										<form className="flex flex-col flex-nowrap">
											<div className="flex flex-col gap-y-4 lg:flex-row gap-x-2">
												<div className="w-full">
													<label className={"text-smooth-gray text-xs"}>First name</label>
													<Input type="text" placeholder="abdessamad" variant={"faded"} size="sm" className={"mt-2.5"} classNames={InputCustomStyle}/>
												</div>
												<div className="w-full">
													<label className={"text-smooth-gray text-xs"}>Last name</label>
													<Input type="text" placeholder="abidar" variant={"faded"} size="sm" className={"mt-2.5"} classNames={InputCustomStyle}/>
												</div>
											</div>
											<div className="my-4">
												<label className={"text-smooth-gray text-xs"}>Email</label>
												<Input
													type="email"
													variant={"faded"}
													placeholder="abdessamad.abidar@hotmail.com"
													className=" mt-2"
													classNames={InputCustomStyle}
													endContent={
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9CA3AF" className="size-5 relative -top-0">
															<path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
															<path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
														</svg>

													}
												/>
											</div>
											<Button variant="bordered" disabled radius={"md"}  className="mt-4 px-10 border-1 text-medium border-gray-700 text-white/80 self-end">save</Button>
										</form>
									</div>
								</Tab>
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
										<div className="gap-x-3 gap-y-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6 ">
											{movies.map((link: string, index: number) => (
													<div key={index}>
														<Card className="bg-gray-800 w-[115px] h-[171px] md:w-[178px] md:h-[267px] lg:w-[314px] lg:h-[475px] xl:w-[150px] xl:h-[225px] hover:scale-105 transition-all duration-500 mb-1.5"  isPressable>
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
										<div className="gap-x-3 gap-y-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6">
											{movies.map((link: string, index: number) => (
													<div key={index}>
														<Card className="bg-gray-800 w-[115px] h-[171px] md:w-[178px] md:h-[267px] lg:w-[314px] lg:h-[475px] xl:w-[150px] xl:h-[225px] hover:scale-105 transition-all duration-500 mb-1.5" isPressable>
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
										<div className="gap-x-3 gap-y-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6">
											{movies.map((link: string, index: number) => (
													<div key={index}>
														<Card className="bg-gray-800 w-[115px] h-[171px] md:w-[178px] md:h-[267px] lg:w-[314px] lg:h-[475px] xl:w-[150px] xl:h-[225px] hover:scale-105 transition-all duration-500 mb-1.5" isPressable>
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
				</div>
			</section>
			<SelectAvatarModal />
			<ConfirmationModal title={"Delete account"} message={'Are you sure you want to delete your account?'} />
			<ChangePasswordModal />
		</>
	);
}