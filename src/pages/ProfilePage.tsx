import CameraIcon from "../custom/ui/icons/camera-icon.tsx";
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownSection,
	DropdownTrigger,
	Input
} from "@nextui-org/react";
import NavbarRender from "../layouts/NavbarRender.tsx";
import SettingsIcon from "../custom/ui/icons/settings-icon.tsx";
import LockIcon from "../custom/ui/icons/lock-icon.tsx";

import {TrashIcon} from "../custom/ui/icons/trash-icon.tsx";

import {Link} from "react-router-dom";
import ListIcon from "../custom/ui/icons/list-icon.tsx";
import ConfirmationModal from "../custom/ui/ConfirmationModal.tsx";
import {useDispatch} from "react-redux";
import {toggleOpening} from "../state/modal/confirmationModalSlice.ts";
import ChangePasswordModal from "../custom/ui/ChangePasswordModal.tsx";

import {toggleSelectAvatarModalOpening} from "../state/modal/selectAvatarModalSlice.ts";
import SelectAvatarModal from "../custom/ui/SelectAvatarModal.tsx";
import ProfileSidebar from "../custom/ui/ProfileSidebar.tsx";


export default function ProfilePage() {

	const InputCustomStyle = {
		label: ["text-smooth-gray"],
		input: ["placeholder:text-white"],
		inputWrapper: [
			"bg-gray-800",
			"border-primary-gray",
			"border-1"
		]
	}


	const dispatch = useDispatch();


	return (
		<>
			<NavbarRender/>
			<section>
				<div className="w-full flex flex-col gap-y-8 tracking-wider mt-10 lg:gap-x-14 px-14">
					{/* content for Mobile only */}
					<div className="flex items-center justify-between md:hidden">
						<h2 className="text-2xl font-semibold mb-3">Profile</h2>
						<div className={""}>
							<Dropdown
								showArrow
								classNames={{
									base: "before:bg-default-200", // change arrow background
									content: "py-1 px-1 border border-smooth-gray bg-gray-800",
								}}

							>
								<DropdownTrigger>
									<button>
										<SettingsIcon width={26} height={26} color={"#FFFFFF"} />
									</button>
								</DropdownTrigger>
								<DropdownMenu variant="faded" aria-label="Dropdown menu with description"
									itemClasses={{
									description: "text-smooth-gray",
									base: [
										"border-0",
										"data-[hover=true]:bg-black/60",
										"data-[hover=true]:text-white"
									]
									}}
								>
									<DropdownSection title="Space">

										<DropdownItem
											key="edit"
											description="Allows you to edit the file"
											startContent={<ListIcon width={24} height={24} color={"#FFFFFF"}  />}
										>
											<Link to={"/profile/lists"} className="">My lists</Link>
										</DropdownItem>

									</DropdownSection>
									<DropdownSection title="Settings">
										<DropdownItem
											key="new"
											description="Create a new file"
											startContent={<LockIcon width={24} height={24} color={"#FFFFFF"}  />}
										>
											Change password
										</DropdownItem>
										<DropdownItem
											key="delete"
											className="text-danger"
											onClick={() => {dispatch(toggleOpening())}}
											color="danger"
											description="Permanently delete the file"
											startContent={<TrashIcon width={24} height={24} color={"#F31260"}  />}
										>
											Delete account
										</DropdownItem>
									</DropdownSection>
								</DropdownMenu>
							</Dropdown>
						</div>
					</div>

					<div className="h-full flex items-start justify-center lg:gap-x-14 ">
						<div className="hidden w-1/3 md:block min-h-full">
							<ProfileSidebar />
						</div>
						<div className={"w-full md:px-14"}>
							<div className="self-center">
								<div className="size-40 rounded-full bg-gray-800 border-2 border-smooth-gray">
									<img src={"src/assets/avatars/9434619.jpg"} className={"w-full h-full object-cover rounded-full"} alt={""}/>
								</div>

								<button
									onClick={() => {dispatch(toggleSelectAvatarModalOpening())}}
									className={"bg-gray-800 p-2 rounded-full border border-white relative -top-9 -right-24"}>
									<CameraIcon width={24} height={24} color={"#FFFFFF"}/>
								</button>
							</div>
							<form>
								<div className={"flex flex-col gap-y-4 md:flex-row gap-x-2"}>
									<div className="w-full">
										<label className={"text-smooth-gray "}>Your first name</label>
										<Input type="text" variant={"faded"} size="sm" className={"mt-2.5"} classNames={InputCustomStyle}/>
									</div>
									<div className="w-full">
										<label className={"text-smooth-gray "}>Your last name</label>
										<Input type="text" variant={"faded"} size="sm" className={"mt-2.5"} classNames={InputCustomStyle}/>
									</div>
								</div>
								<div className="my-4">
									<label className={"text-smooth-gray "}>Email</label>
									<Input type="email" variant={"faded"} size="sm" className={"mt-2.5 lg:w-2/3"} classNames={InputCustomStyle}/>
								</div>
								<Button variant="faded" radius={"sm"}  className="mt-3 px-10 text-medium font-medium">save</Button>
							</form>
						</div>
					</div>
				</div>
			</section>
			<ConfirmationModal title={"Delete account"} message={'Are you sure you want to delete your account?'} />
			<ChangePasswordModal />
			<SelectAvatarModal />
		</>
	);
}