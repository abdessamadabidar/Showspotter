import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";
import {AcmeLogo} from "../custom/ui/icons/AcmeLogo.tsx";
import {Link} from "react-router-dom";
import {toggleOpening} from "../state/modal/categoriesModalSlice.ts";
import {useDispatch} from "react-redux";
import CategoriesModal from "../custom/ui/CategoriesModal.tsx";

export default function NavbarRender() {
	const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
	const isOnline : boolean = false;
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
                            <Link to={"/profile"}>
	                            <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF">
		                            <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
		                            <path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
		                            <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
								</svg>
                            </Link>
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
