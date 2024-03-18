import ProfileCircleIcon from "./icons/profile-circle-icon.tsx";
import {Link} from "react-router-dom";
import {toggleChangePasswordModalOpening} from "../../state/modal/changePasswordModalSlice.ts";
import LockIcon from "./icons/lock-icon.tsx";
import BellIcon from "./icons/bell-icon.tsx";
import ListIcon from "./icons/list-icon.tsx";
import {toggleOpening} from "../../state/modal/confirmationModalSlice.ts";
import {TrashIcon} from "./icons/trash-icon.tsx";
import {useDispatch} from "react-redux";


export default function ProfileSidebar() : JSX.Element {
	const dispatch = useDispatch();

	return (
		<div className={"hidden md:flex md:flex-col items-start justify-start w-1/4 border-smooth-gray rounded-xl backdrop-blur-xl bg-gray-700/30 shadow-2xl flex-shrink-0 h-[75vh] pb-4"}>
			<h3 className="px-6 py-4 w-full font-open-sans italic text-white/50 text-sm font-light">Account</h3>
			<div className={"px-6 py-3.5 w-full flex items-center flex-nowrap hover:bg-white/5 gap-x-2 "}>
				<ProfileCircleIcon width={24} height={24} color={"#FFFFFF"} />
				<Link to={"/profile"} className={"text-white/80 hover:text-white text-sm w-full font-light"}>Profile</Link>
			</div>

			<div className={"px-6 py-3.5 w-full flex items-center flex-nowrap gap-x-2 hover:bg-white/5"}>
				<BellIcon width={24} height={24} color={"#FFFFFF"} />
				<Link to={"#"} className={"text-white/80 text-sm font-light w-full whitespace-nowrap hover:text-white"}>Notifications</Link>
			</div>
			<div className={"px-6 py-3.5 w-full flex items-center flex-nowrap gap-x-2 hover:bg-white/5"}>
				<ListIcon width={24} height={24} color={"#FFFFFF"} />
				<Link  to={"/profile/lists"} className={"text-white/80 text-sm font-light w-full whitespace-nowrap hover:text-white"}>My lists</Link>
			</div>
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