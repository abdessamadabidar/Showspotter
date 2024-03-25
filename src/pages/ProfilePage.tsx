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


import {Link} from "react-router-dom";

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
				<div className="w-full flex flex-col gap-y-8 tracking-wider mt-10 lg:gap-x-14 px-6 lg:px-14">
					{/* content for Mobile only */}
					<div className="flex items-center justify-between md:hidden">
						<h2 className="text-2xl font-semibold">Profile</h2>
						<div className={""}>
							<Dropdown
								showArrow
								classNames={{
									base: "before:bg-default-200", // change arrow background
									content: "py-1 px-1 border border-smooth-gray bg-gray-800",
								}}

							>
								<DropdownTrigger>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
										<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
									</svg>
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
											startContent={
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
													<path d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" />
												</svg>

											}
										>
											<Link to={"/profile/lists"} className="">My lists</Link>
										</DropdownItem>

									</DropdownSection>
									<DropdownSection title="Settings">
										<DropdownItem
											key="new"
											description="Create a new file"
											startContent={
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 ">
													<path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
													<path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
												</svg>


											}
										>
											Change password
										</DropdownItem>
										<DropdownItem
											key="delete"
											className="text-danger"
											onClick={() => {dispatch(toggleOpening())}}
											color="danger"
											description="Permanently delete the file"
											startContent={
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
													<path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
												</svg>

											}
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
							<div className="w-40 mx-auto lg:m-0">
								<div className="size-40 rounded-full bg-gray-800 border-2 border-smooth-gray">
									<img src={"src/assets/avatars/9434619.jpg"} className={"w-full h-full object-cover rounded-full"} alt={""}/>
								</div>

								<button
									onClick={() => {dispatch(toggleSelectAvatarModalOpening())}}
									className={"bg-gray-800 p-2 rounded-full border border-white relative -top-9 -right-24"}>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
										<path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
									</svg>
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