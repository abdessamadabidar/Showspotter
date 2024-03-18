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
		value: ["text-white"],
		label: ["text-smooth-gray"],
		selectorIcon: ["text-smooth-gray"],
		trigger: ["bg-gray-800 border-primary-gray border-1"],
		popoverContent: ["bg-gray-800 text-smooth-gray"]
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
		<div className="w-full relative">
			<div className="absolute  h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
			<div className="md:w-[500px] lg:w-[550px] relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-6 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
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
					<Input type="email" variant={"faded"} label="Email" size="sm" className="mb-4" classNames={InputCustomStyle}/>
					<Input
						label="Password"
						size="sm"
						variant={"faded"}
						endContent={
							<button className="focus:outline-none " type="button" onClick={toggleVisibility}>
								{isVisible ? (eyeIcon()) : (eyeClosedIcon())}
							</button>
						}
						type={isVisible ? "text" : "password"}
						className="mb-4"
						classNames={InputCustomStyle}
					/>
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