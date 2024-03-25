import {Link} from "react-router-dom";
import {toggleChangePasswordModalOpening} from "../../state/modal/changePasswordModalSlice.ts";
import {toggleOpening} from "../../state/modal/confirmationModalSlice.ts";
import {useDispatch} from "react-redux";


export default function ProfileSidebar() : JSX.Element {
	const dispatch = useDispatch();

	return (
		<div className={" md:flex md:flex-col items-start justify-start w-full border-smooth-gray rounded-xl backdrop-blur-xl bg-gray-700/30 shadow-2xl pb-4"}>
			<h3 className="px-6 py-4 w-full font-open-sans italic text-white/50 text-sm font-light">Account</h3>
			<Link to={"/profile"} className={"px-6 py-3.5 w-full flex items-center flex-nowrap hover:bg-white/5 gap-x-2 text-white/80 group"}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 group-hover:text-white">
					<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
				</svg>

				<p className={"group-hover:text-white text-sm font-light"}>Profile</p>
			</Link>
			<Link  to={"/profile/lists"} className={"px-6 py-3.5 w-full flex items-center flex-nowrap gap-x-2 hover:bg-white/5 group text-white/80"}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 group-hover:text-white">
					<path d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" />
				</svg>

				<p className="text-sm font-light whitespace-nowrap group-hover:text-white">My lists</p>
			</Link>
			<h3 className="px-6 py-4 w-full font-open-sans italic text-white/50 text-sm font-light ">Settings</h3>
			<button className={"px-6 py-3.5 w-full  flex items-center flex-nowrap hover:bg-white/5 gap-x-2 text-white/80 group"} onClick={() => {dispatch(toggleChangePasswordModalOpening())}}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 group-hover:text-white">
					<path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
					<path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
				</svg>

				<span className={"text-sm font-light whitespace-nowrap group-hover:text-white"}>Change password</span>
			</button>
			<button className={"px-6 py-3.5 w-full flex items-center flex-nowrap gap-x-2 hover:bg-white/5 text-red-500"} onClick={() => {dispatch(toggleOpening())}}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
					<path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
				</svg>

				<span  className={"text-sm font-medium  whitespace-nowrap"}>Delete account</span>
			</button>
		</div>
	);
}