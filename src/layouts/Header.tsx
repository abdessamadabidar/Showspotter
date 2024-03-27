import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Button,
	DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Dropdown
} from "@nextui-org/react";
import {AcmeLogo} from "../custom/ui/icons/AcmeLogo.tsx";
import {Link} from "react-router-dom";;
import {categories} from "../custom/data/categories.ts";
import {countries} from "../custom/data/countries.ts";
import {useDispatch} from "react-redux";
import {toggleOpeningSearchQueryModal} from "../state/modal/searchQueryModalSlice.ts";
import SearchQueryModal from "../custom/ui/SearchQueryModal.tsx";


export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
	const isOnline : boolean = false;
	const dispatch = useDispatch();

	return (
		<>
			<Navbar
				maxWidth="full"
				onMenuOpenChange={setIsMenuOpen} className= {"data-[menu-open=true]:bg-dark-purple/80 data-[menu-open=true]:backdrop-blur-md backdrop-blur-lg bg-transparent"}>

				{/* content 1 */}
				<NavbarContent justify="start">
					<NavbarMenuToggle
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						className="sm:hidden text-primary-gray"
					/>
					<Link to={"/"}>
						<NavbarBrand>
							<AcmeLogo />
							<p className="font-bold text-inherit uppercase">showspotter</p>
						</NavbarBrand>
					</Link>
				</NavbarContent>


				{/* content 2 */}
				<NavbarContent className="hidden sm:flex gap-4" justify="center">
					<NavbarItem>
						<Link className={"hover:text-white text-sm text-white/80"}  to="/movies">
							Movies
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link className={"hover:text-white text-sm text-white/80"}  to="/series">
							Series
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link className={"hover:text-white text-sm text-white/80"}  to="/anime">
							Anime
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Dropdown
							className="rounded-lg"
							classNames={{
								base: "before:bg-slate-900",
								content: "py-1 px-1 bg-slate-900",
							}}
						>
							<DropdownTrigger>
								<div className="flex flex-row gap-x-1 items-center hover:text-white text-sm text-white/80">
									Category
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 22" strokeWidth={1.5} stroke="currentColor" className="size-3">
										<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
									</svg>
								</div>
							</DropdownTrigger>
							<DropdownMenu variant="faded" aria-label="Dropdown menu with description"
							              itemClasses={{
								              description: "text-smooth-gray",
								              base: [
									              "border-0",
									              "data-[hover=true]:bg-black/60",
									              "data-[hover=true]:text-white",
								              ],
							              }}

							>
								<DropdownSection classNames={{group: "grid grid-cols-3"}}>
									{categories.map((category: string, index: number) => {
										return (
											<DropdownItem
												className="w-36 rounded-0"
												key={index}
												textValue={category}
												classNames={{
													base: ["rounded-md border-0", "data-[hover=true]:bg-slate-950 data-[hover=true]:text-white"],
													wrapper: "hover:bg-slate-950",
												}}
											>
												<Link to={"#"}>{category}</Link>
											</DropdownItem>
										);
									})}
								</DropdownSection>
							</DropdownMenu>
						</Dropdown>
					</NavbarItem>
					<NavbarItem>
						<Dropdown
							className="rounded-lg"
							classNames={{
								base: "before:bg-slate-900",
								content: "py-1 px-1 bg-slate-900",
							}}

						>
							<DropdownTrigger>
								<div className="flex flex-row gap-x-1 items-center hover:text-white text-sm text-white/80">
									Country
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 22" strokeWidth={1.5} stroke="currentColor" className="size-3">
										<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
									</svg>
								</div>
							</DropdownTrigger>
							<DropdownMenu variant="faded" aria-label="Dropdown menu with description"
							              itemClasses={{
								              description: "text-smooth-gray",
								              base: [
									              "border-0",
									              "data-[hover=true]:bg-black/60",
									              "data-[hover=true]:text-white",
								              ]
							              }}

							>
								<DropdownSection classNames={{group: "grid grid-cols-3"}}>
									{countries.map((country: string, index: number) => {
										return (
											<DropdownItem
												className="w-36 rounded-0"
												key={index}
												textValue={country}
												classNames={{
													base: [
														"rounded-md border-0",
														"data-[hover=true]:bg-slate-950 data-[hover=true]:text-white"
													],
												}}
											>
												<Link to={"#"}>{country}</Link>
											</DropdownItem>
										);
									})}
								</DropdownSection>
							</DropdownMenu>
						</Dropdown>
					</NavbarItem>
				</NavbarContent>



				{/* content 3 */}
				<NavbarContent justify="end" >
					<NavbarItem className="flex flex-row justify-end gap-x-2">
						<button
							onClick={() => {dispatch(toggleOpeningSearchQueryModal())}}
							className="w-40 border-1 bg-slate-900 border-gray-700 px-3 flex flex-nowrap items-center rounded-2xl cursor-pointer hover:bg-slate-900/80">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6 text-smooth-gray">
								<path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
							</svg>
							<input type="text" name="searchQuery"
							       className={"bg-transparent font-light w-full h-full ms-2 py-[0.5rem] !border-0 outline-0 cursor-pointer"}
							       placeholder={"search"}
							/>
						</button>
						{
							isOnline ? <div>
								<Dropdown
									className="rounded-xl"
									classNames={{
										base: "before:bg-slate-900",
										content: "py-1 px-1 bg-slate-900",
									}}

								>
									<DropdownTrigger>
										<div className="size-9 rounded-full border-3 border-purple-400">
											<img src="src/assets/avatars/7309700.jpg" className="w-full h-full object-cover rounded-full" alt=""/>
										</div>
									</DropdownTrigger>
									<DropdownMenu variant="faded" aria-label="Dropdown menu with description"
									              itemClasses={{
										              description: "text-smooth-gray",
										              base: [
											              "border-0",
											              "data-[hover=true]:bg-black/60",
											              "data-[hover=true]:text-white"
										              ]
									              }}
									>
										<DropdownSection title="Profile">

											<DropdownItem
												className="py-2"
												key="edit"
												startContent={
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
														<path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
													</svg>
												}
												classNames={{
													base: [
														"rounded-md border-0",
														"data-[hover=true]:bg-slate-950 data-[hover=true]:text-white"
													],
												}}
											>
												<Link to={"/"} className="w-full h-full  block ">Home</Link>
											</DropdownItem>
											<DropdownItem
												className="py-2"
												key="edit"
												startContent={
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
														<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
													</svg>
												}
												classNames={{
													base: [
														"rounded-md border-0",
														"data-[hover=true]:bg-slate-950 data-[hover=true]:text-white"
													],
												}}
											>
												<Link to={"/profile"} className="w-full h-full block">Your profile</Link>
											</DropdownItem>

										</DropdownSection>
										<DropdownSection title="General">
											<DropdownItem
												key="delete"
												className="text-danger py-2"
												startContent={
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
														<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
													</svg>
												}
												classNames={{
													base: [
														"rounded-md border-0",
														"data-[hover=true]:bg-slate-950 data-[hover=true]:text-white"
													],
												}}
											>
												<Link to={"#"} className="w-full h-full font-medium block">Log Out</Link>
											</DropdownItem>
										</DropdownSection>
									</DropdownMenu>
								</Dropdown>
							</div> :(
								<>
									<div >
										<Link to="/login">
											<Button size="sm" href="#" radius="full" variant="bordered" className="text-white">
												Sign In
											</Button>
										</Link>
									</div>
									<div className="hidden md:flex">
										<Link to={"/signup"} >
											<Button size="sm" href="#" radius="full" variant="flat" className="bg-gradient-to-r from-pink-500 to-violet-600 text-white">
												Sign Up
											</Button>
										</Link>
									</div>
								</>
							)
						}

					</NavbarItem>
				</NavbarContent>











				{/* Mobile Navbar */}
				<NavbarMenu className={"bg-dark-purple/80 backdrop-blur-md px-0 gap-0 "}>
					<NavbarMenuItem className={" ps-5 py-4 border-b-0.1 border-b-primary-gray hover:backdrop-blur-lg"}>
						<Link
							className="w-full text-white tracking-wider"
							to="/"
						>
							<span className="block">Home</span>
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem className={" ps-5 py-4 border-b-0.1 border-b-primary-gray hover:backdrop-blur-lg"}>
						<Link
							className="w-full text-white tracking-wider"
							to="/movies"
						>
							<span className="block">Movies</span>
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem className={" ps-5 py-4 border-b-0.1 border-b-primary-gray hover:backdrop-blur-lg"}>
						<Link
							className="w-full text-white tracking-wider"
							to="/series"
						>
							<span className="block">Series</span>
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem className={" ps-5 py-4 border-b-0.1 border-b-primary-gray hover:backdrop-blur-lg"}>
						<Link
							className="w-full text-white tracking-wider"
							to="/anime"
						>
							<span className="block">Anime</span>
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem className={" ps-5 py-4 border-b-0.1 border-b-primary-gray hover:backdrop-blur-lg"}>
						<Link
							className="w-full text-white tracking-wider"
							to="#"
						>
							<span className="block">Categories</span>
						</Link>
					</NavbarMenuItem>
				</NavbarMenu>


			</Navbar>
			<SearchQueryModal />
		</>
	);
}
