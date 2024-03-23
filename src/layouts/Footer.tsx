import {AcmeLogo} from "../custom/ui/icons/AcmeLogo.tsx";
import {Link} from "@nextui-org/react";
import {NavLink} from "react-router-dom";

export default function Footer() : JSX.Element {
	
	
	return (
		<footer className="rounded-lg shadow  m-4">
			<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
				<div className="flex flex-col items-center justify-between lg:flex-row gap-y-2">
					<a href="#" className="flex items-center mb-4 sm:mb-0 space-x-2 rtl:space-x-reverse">
						<AcmeLogo />
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Showspotter</span>
					</a>
					<ul className="flex flex-wrap items-center justify-between mb-6 text-sm font-medium text-white/80 sm:mb-0 dark:text-gray-400">
						<li>
							<a href="#" className="hover:underline me-4 md:me-6">About</a>
						</li>
						<li>
							<a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
						</li>
						<li>
							<NavLink to="/contact" className="hover:underline">Contact</NavLink>
						</li>
					</ul>
					<div className="group flex flex-nowrap justify-end items-center gap-x-4">
						<Link href="#" className="hover:scale-105 transition-all duration-500">
							<svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24">
								<path fill="#FFF" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
							</svg>
						</Link>
						<Link href="#" className="hover:scale-105 transition-all duration-500">
							<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 16 16">
								<path fill="#FFF" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"></path>
							</svg>
						</Link>
						<Link href="#" className="hover:scale-105 transition-all duration-500">
							<svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24">
								<path fill="#FFF" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
							</svg>
						</Link>

					</div>
				</div>
				<div className="border-b-0.1 border-b-gray-400 my-5" />
				<span className="block text-sm text-gray-400 text-center">© 2024 <NavLink to="/" className="hover:underline">showspotter™</NavLink>. All Rights Reserved.</span>
			</div>
		</footer>
		
	);
}