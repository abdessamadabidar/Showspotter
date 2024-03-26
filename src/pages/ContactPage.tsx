import {useSelector} from "react-redux";
import {RootState} from "../state/store.ts";
import LoadingProgress from "../custom/ui/LoadingProgress.tsx";
import {Input, Link, Textarea} from "@nextui-org/react";
import {NavLink} from "react-router-dom";




export default function ContactPage() : JSX.Element {

	const InputCustomStyle = {
		label: ["text-smooth-gray"],
		inputWrapper: [
			"bg-slate-900",
			"border-gray-700",
			"border-1",
		],
	}


	const  appIsLoading: boolean = useSelector((state: RootState) => state.applicationLoading.isLoading);

	if (appIsLoading) {
		return (
			<LoadingProgress />
		);
	}

	return (
		<section className="grid place-items-center h-screen">
			<div className="w-11/12 lg:w-1/3 ">
				<h1 className="font-bold text-5xl mb-10 relative text-center w-full ">
					Contact Us
				</h1>
				<form className="w-full mb-8">
					<Input type="text" variant={"faded"} label="Name"  className='mb-4' classNames={InputCustomStyle}/>
					<Input
						type="email"
						variant={"faded"}
						label="Email"
						className="mb-4"
						classNames={InputCustomStyle}
						endContent={
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9CA3AF" className="size-5 relative -top-2">
								<path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
								<path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
							</svg>

						}
					/>
					<Textarea
						label="Message"
						variant="faded"
						placeholder="Enter your message here"
						minRows={10}

						classNames={{
							label: ["text-smooth-gray"],
							inputWrapper: [
								"bg-slate-900",
								"border-gray-700",
								"border-1"
							],
							input: "resize-y min-h-[40px]"
						}}
					/>
				</form>
				<div className="flex flex-col md:flex-row items-center justify-between px-3 gap-y-8">
					<div className="group flex flex-nowrap justify-center items-center gap-x-4">
						<Link href="#" className="hover:scale-105 transition-all duration-500">
							<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
								<path fill="#FFF" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
							</svg>
						</Link>
						<Link href="#" className="hover:scale-105 transition-all duration-500">
							<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 16 16">
								<path fill="#FFF" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"></path>
							</svg>
						</Link>
						<Link href="#" className="hover:scale-105 transition-all duration-500">
							<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
								<path fill="#FFF" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
							</svg>
						</Link>

					</div>
					<NavLink  className="flex items-center justify-between gap-x-1 group md:-order-1 text-sm text-primary" to={"/"}>
						Go home
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-all duration-500">
							<path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
						</svg>

					</NavLink>
				</div>
			</div>
		</section>
	);

}