import ProfileCircleIcon from "./icons/profile-circle-icon.tsx";
import {Link} from "react-router-dom";
import {toggleChangePasswordModalOpening} from "../../state/modal/changePasswordModalSlice.ts";
import LockIcon from "./icons/lock-icon.tsx";
import ListIcon from "./icons/list-icon.tsx";
import {toggleOpening} from "../../state/modal/confirmationModalSlice.ts";
import {TrashIcon} from "./icons/trash-icon.tsx";
import {useDispatch} from "react-redux";


export default function ProfileSidebar() : JSX.Element {
	const dispatch = useDispatch();

	return (
		<div className={" md:flex md:flex-col items-start justify-start w-full border-smooth-gray rounded-xl backdrop-blur-xl bg-gray-700/30 shadow-2xl pb-4"}>
			<h3 className="px-6 py-4 w-full font-open-sans italic text-white/50 text-sm font-light">Account</h3>
			<Link to={"/profile"} className={"px-6 py-3.5 w-full flex items-center flex-nowrap hover:bg-white/5 gap-x-2 "}>
				<ProfileCircleIcon width={24} height={24} color={"#FFFFFF"} />
				<p className={"text-white/80 hover:text-white text-sm font-light"}>Profile</p>
			</Link>
			<Link  to={"/profile/lists"} className={"px-6 py-3.5 w-full flex items-center flex-nowrap gap-x-2 hover:bg-white/5"}>
				<ListIcon width={24} height={24} color={"#FFFFFF"} />
				<p className="text-white/80 text-sm font-light whitespace-nowrap hover:text-white">My lists</p>
			</Link>
			<h3 className="px-6 py-4 w-full font-open-sans italic text-white/50 text-sm font-light">Settings</h3>
			<button className={"px-6 py-3.5 w-full  flex items-center flex-nowrap hover:bg-white/5 gap-x-2"} onClick={() => {dispatch(toggleChangePasswordModalOpening())}}>
				<LockIcon width={24} height={24} color={"#FFFFFF"} />
				<span className={"text-white/80 text-sm font-light whitespace-nowrap hover:text-white"}>Change password</span>
			</button>
			<button className={"px-6 py-3.5 w-full flex items-center flex-nowrap gap-x-2 hover:bg-white/5 "} onClick={() => {dispatch(toggleOpening())}}>
				<TrashIcon width={18} height={18} color={"#dc2626"} />
				<span  className={"text-red-600 text-sm font-medium  whitespace-nowrap"}>Delete account</span>
			</button>
		</div>
	);
}