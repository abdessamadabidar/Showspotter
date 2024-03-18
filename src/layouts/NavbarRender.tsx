import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";
import {AcmeLogo} from "../custom/ui/icons/AcmeLogo.tsx";
import {Link} from "react-router-dom";
import {toggleOpening} from "../state/modal/categoriesModalSlice.ts";
import {useDispatch} from "react-redux";
import CategoriesModal from "../custom/ui/CategoriesModal.tsx";
import LoginIcon from "../custom/ui/icons/login-icon.tsx";

export default function NavbarRender() {
	const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
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
					<NavbarBrand>
						<AcmeLogo />
						<p className="font-bold text-inherit">ACME</p>
					</NavbarBrand>
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
				<NavbarContent justify="end" >
					<NavbarItem className="hidden lg:flex">
						<Link to="/login" className="hover:text-white text-sm text-white/80 flex items-center gap-x-1">
							<LoginIcon width={19} height={19} color={"#FFFFFF"} />
							Login
						</Link>
					</NavbarItem>
					{
						isMenuOpen ||
						<NavbarItem>
	                        <Button size="sm" href="#" radius="full" variant="flat" className="bg-gradient-to-r from-pink-500 to-violet-600 text-white">
	                            Sign Up
	                        </Button>
	                    </NavbarItem>
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
