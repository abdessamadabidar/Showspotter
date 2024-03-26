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
import {Link} from "react-router-dom";
import {toggleOpening} from "../state/modal/categoriesModalSlice.ts";
import {useDispatch} from "react-redux";
import CategoriesModal from "../custom/ui/CategoriesModal.tsx";

export default function NavbarRender() {
	const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
	const isOnline : boolean = true;
	const dispatch = useDispatch();

	return (
		<>
			<CategoriesModal />
			<Navbar onMenuOpenChange={setIsMenuOpen} className= {isMenuOpen ? "bg-dark-purple/80 backdrop-blur-md" : "backdrop-blur-lg bg-transparent w-full"}>
				<NavbarContent >
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

				<NavbarContent className="hidden sm:flex gap-4" justify="center">
					<NavbarItem>
						<Link className={"hover:text-white text-sm text-white/80"}  to="/">
							Home
						</Link>
					</NavbarItem>
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
						<Link className={"hover:text-white text-sm text-white/80"}  to="#" onClick={() => {dispatch(toggleOpening())}}>
							Categories
						</Link>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent justify="end" className="gap-2" >
					{
						isOnline ? <NavbarItem>
							<Dropdown
								showArrow
								classNames={{
									base: "before:bg-default-200", // change arrow background
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
									<DropdownSection title="Space">

										<DropdownItem
											className="py-3"
											key="edit"
											startContent={
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
													<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
												</svg>

											}
										>
											<Link to={"/profile"} className="">Your profile</Link>
										</DropdownItem>

									</DropdownSection>
									<DropdownSection title="Settings">
										<DropdownItem
											key="delete"
											className="text-danger py-3"
											startContent={
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
													<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
												</svg>

											}
										>
											<Link to={"#"} className="font-medium">Log Out</Link>
										</DropdownItem>
									</DropdownSection>
								</DropdownMenu>
							</Dropdown>
                        </NavbarItem> :(
							<>
								<NavbarItem >
									<Link to="/login">
										<Button size="sm" href="#" radius="full" variant="bordered" className="text-white">
											Sign In
										</Button>
									</Link>
								</NavbarItem>
								<NavbarItem className="hidden md:flex">
									<Link to={"/signup"} >
										<Button size="sm" href="#" radius="full" variant="flat" className="bg-gradient-to-r from-pink-500 to-violet-600 text-white">
											Sign Up
										</Button>
									</Link>
								</NavbarItem>
							</>
						)
					}

				</NavbarContent>
				<NavbarMenu className={"bg-dark-purple/80 backdrop-blur-md px-0 gap-0"}>
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
		</>

	);
}
