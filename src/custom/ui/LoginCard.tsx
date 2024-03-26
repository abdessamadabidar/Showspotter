import {Meteors} from "../../components/ui/Meteors.tsx";
import {Button, Checkbox, Input, Link} from "@nextui-org/react";
import React from "react";
import {eyeIcon} from "./icons/eye-icon.tsx";
import {eyeClosedIcon} from "./icons/eye-closed-icon.tsx";
import {facebookIcon} from "./icons/facebook-icon.tsx";
import {googleIcon} from "./icons/google-icon.tsx";
import {LoginInputCustomStyle} from "../style/InputCustomStyle.ts";


export function LoginCard() : JSX.Element {

	const [isVisible, setIsVisible] = React.useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);


	return (
		<div className="w-full relative max-w-md">
			<div className="absolute  h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
			<div className="w-full  relative shadow-xl bg-slate-900 border border-gray-800  px-4 py-6 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
				<div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="h-2 w-2 text-gray-300"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
						/>
					</svg>
				</div>

				<h1 className="font-bold text-4xl text-white mb-5 relative text-center w-full">
					Sign In
				</h1>

				<form className="w-full mb-6">
					<Input
						type="email"
						variant={"faded"}
						label="Email"
						className="mb-4"
						classNames={LoginInputCustomStyle}
						endContent={
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9CA3AF" className="size-5 relative -top-2">
								<path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
								<path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
							</svg>

						}
					/>
					<Input
						label="Password"
						size="sm"
						variant="faded"
						endContent={
							<button className="focus:outline-none relative -top-2" type="button" onClick={toggleVisibility}>
								{isVisible ? (eyeIcon()) : (eyeClosedIcon())}
							</button>
						}
						type={isVisible ? "text" : "password"}
						className="mb-4"
						classNames={LoginInputCustomStyle}
					/>
					<Button color={"primary"} variant="bordered" className="uppercase font-medium w-full" size="lg">
						sign in
					</Button>
				</form>
				<div className="flex justify-between items-center w-full mb-6">
					<Checkbox defaultSelected size="sm" classNames={{
						label: [
							"text-[#9CA3AF]"
						]
					}}>Remember me</Checkbox>
					<Link href="#" size="sm">Forgot password?</Link>
				</div>
				<div className={"flex w-full items-center justify-center mb-6"}>
					<div className="border-b border-smooth-gray w-full "  />
					<span className="px-5 py-1 bg-gray-900 text-smooth-gray">or</span>
					<div className="border-b border-smooth-gray w-full"  />
				</div>
				<button className="w-full rounded-lg px-5 py-2.5 flex items-center justify-center gap-x-2 bg-transparent border border-[#9CA3AF] mx-auto mb-2 hover:bg-gray-800">
					{facebookIcon({width: 20, height: 20})}
					<span className="font-semibold text-sm text-smooth-gray">Connect with Facebook</span>
				</button>
				<button className="w-full rounded-lg px-5 py-2.5 flex items-center justify-center gap-x-2 bg-transparent border border-smooth-gray mx-auto hover:bg-gray-800 mb-5">
					{googleIcon({width: 20, height: 20})}
					<span className="font-semibold text-sm text-smooth-gray">Connect with Google</span>
				</button>
				<p className="text-sm font-light text-smooth-gray">Don't have an account yet? <Link href="#" size="sm">Sign up</Link></p>

				{/* Meaty part - Meteor effect */}
				<Meteors number={20} />
			</div>
		</div>
	);
}
