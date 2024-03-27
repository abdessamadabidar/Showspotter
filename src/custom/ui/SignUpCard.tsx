import {Button, Input, Link, Select, SelectItem} from "@nextui-org/react";
import {eyeIcon} from "./icons/eye-icon.tsx";
import {eyeClosedIcon} from "./icons/eye-closed-icon.tsx";
import {facebookIcon} from "./icons/facebook-icon.tsx";
import {googleIcon} from "./icons/google-icon.tsx";
import {Meteors} from "../../components/ui/Meteors.tsx";
import React, {ChangeEvent, useState} from "react";
import {years} from "../data/years.ts";
import {months} from "../data/months.ts";



export default function SignUpCard() : JSX.Element {
	const [isVisible, setIsVisible] = React.useState(false);
	const [year, setYear] = useState<number>();
	const [month, setMonth] = useState<number>();
	const toggleVisibility = () => setIsVisible(!isVisible);

	const InputCustomStyle = {
		label: ["text-smooth-gray"],
		inputWrapper: [
			"bg-gray-800",
			"border-primary-gray",
			"border-1"
		]
	}

	const SelectCustomStyle = {
		label: ["text-smooth-gray"],
		selectorIcon: ["text-smooth-gray"],
		trigger: ["bg-gray-800 border-primary-gray border-1"],
		popoverContent: ["bg-gray-800 text-smooth-gray"]
	}

	const computePasswordStrength = (password: string) => {
		let strengthIndicator = -1;

		if (/[a-z]/.test(password)) strengthIndicator++;
		if (/[A-Z]/.test(password)) strengthIndicator++;
		if (/\d/.test(password)) strengthIndicator++;
		if (/[^a-zA-Z0-9]/.test(password)) strengthIndicator++;

		if (password.length >= 16) strengthIndicator++;

		return passwordStrengthStates[strengthIndicator];
	};

	const [passwordStrengthState, SetPasswordStrengthState] = useState<string>("");
	const passwordStrengthStates : string[] = ["weak", "medium", "medium", "strong"];
	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
		SetPasswordStrengthState(computePasswordStrength(e.target.value))
		console.log(passwordStrengthState)
	}


	const handleMonthSelectionChange = (e: ChangeEvent<HTMLSelectElement>) : void => {
		setMonth(Number(e.target.value))
	}

	const handleYearSelectionChange = (e: ChangeEvent<HTMLSelectElement>) : void => {
		setYear(Number(e.target.value));

	}

	const generateDays = (): number[] => {
		return Array.from({length: new Date(year as number, month as number, 0).getDate()}, (_, i) => i + 1);
	}



	return (
		<div className="w-full relative max-w-lg">
			<div className="absolute  h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
			<div className="w-full relative shadow-xl bg-slate-900 border border-gray-800  px-4 py-6 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
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
					Sign Up
				</h1>
				<div className="flex items-center justify-between w-full gap-x-2 mb-5">
					<button className="flex-1 rounded-lg px-5 py-2.5 flex items-center justify-center gap-x-2 bg-transparent border border-smooth-gray mx-auto hover:bg-gray-800">
						{facebookIcon({width: 20, height: 20})}
						<span className="font-semibold text-sm text-smooth-gray">Connect with Facebook</span>
					</button>
					<button className="flex-1 rounded-lg px-5 py-2.5 flex items-center justify-center gap-x-2 bg-transparent border border-smooth-gray mx-auto hover:bg-gray-800">
						{googleIcon({width: 20, height: 20})}
						<span className="font-semibold text-sm text-smooth-gray">Connect with Google</span>
					</button>
				</div>
				<div className={"flex w-full items-center justify-center mb-5"}>
					<div className="border-b border-smooth-gray w-full "  />
					<span className="px-5 py-1 bg-gray-900 text-smooth-gray">or</span>
					<div className="border-b border-smooth-gray w-full"  />
				</div>
				<form className="w-full mb-6">
					<div className="flex items-center justify-between gap-x-2 mb-4">
						<Input type="text" variant={"faded"} label="First name" size="sm" classNames={InputCustomStyle}/>
						<Input type="text" variant={"faded"} label="Last name" size="sm" classNames={InputCustomStyle}/>
					</div>
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
					<div className="mb-4">
						<Input
							label="Password"
							size="sm"
							variant={"faded"}
							endContent={
								<button className="focus:outline-none relative -top-2" type="button" onClick={toggleVisibility}>
									{isVisible ? (eyeIcon()) : (eyeClosedIcon())}
								</button>
							}
							type={isVisible ? "text" : "password"}
							classNames={InputCustomStyle}
							className="mb-2"
							onChange={handlePasswordChange}
						/>
						<div className="flex flex-nowrap items-center justify-center gap-x-1 px-1 mb-1">
							<div className={`flex-1 h-1 rounded-full ${
									passwordStrengthState === 'weak' ? 'bg-red-500' : 
										(passwordStrengthState === 'medium' ? 'bg-orange-500' : 
											(passwordStrengthState === 'strong' ? 'bg-green-500': 'bg-gray-800'))
							}`} />
							<div className={`flex-1 h-1 rounded-full ${
									passwordStrengthState === 'weak' ? 'bg-gray-800' :
										(passwordStrengthState === 'medium' ? 'bg-orange-500' : 
											(passwordStrengthState === 'strong' ? 'bg-green-500': 'bg-gray-800'))
							}`} />
							<div className={`flex-1 h-1 rounded-full ${
									passwordStrengthState === 'weak' ? 'bg-gray-800' :
										(passwordStrengthState === 'medium' ? 'bg-gray-800' :
											(passwordStrengthState === 'strong' ? 'bg-green-500': 'bg-gray-800'))
							}`} />
						</div>
						<p className="text-xs text-smooth-gray px-1 italic font-sans">{passwordStrengthState}</p>
					</div>
					<div className="flex items-center justify-between gap-x-4 mb-4" >
						<Select
							label="Year"
							className="max-w-xs text-smooth-gray"
							size="sm"
							variant={"faded"}
							classNames={SelectCustomStyle}
							onChange={handleYearSelectionChange}
						>
							{years.map((year) => (
								<SelectItem key={year.value} value={year.value} textValue={year.value.toString()}>
									{year.label}
								</SelectItem>
							))}
						</Select>
						<Select
							label="Month"
							className="max-w-xs"
							size="sm"
							variant={"faded"}
							classNames={SelectCustomStyle}
							onChange={handleMonthSelectionChange}
						>
							{months.map((month : string, index : number) => (
								<SelectItem key={index + 1} value={month} textValue={month}>
									{month}
								</SelectItem>
							))}
						</Select>
						<Select
							label="Day"
							className="max-w-xs"
							size="sm"
							variant={"faded"}
							classNames={SelectCustomStyle}

						>
							{generateDays().map((day: number) => (
								<SelectItem key={day.toString()} value={day} textValue={day.toString()}>
									{day}
								</SelectItem>
							))}
						</Select>
					</div>

					<Button color={"primary"} variant="bordered" className="uppercase font-medium w-full" size="lg">
						Create an account
					</Button>
				</form>
				<p className="text-sm font-light text-smooth-gray">Don't have an account yet? <Link href="#" size="sm">Sign up</Link></p>

				{/* Meaty part - Meteor effect */}
				<Meteors number={20} />
			</div>
		</div>

	);
}