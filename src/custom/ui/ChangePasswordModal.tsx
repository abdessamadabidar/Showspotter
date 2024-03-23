import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store.ts";
import {Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {toggleChangePasswordModalOpening} from "../../state/modal/changePasswordModalSlice.ts";
import {eyeIcon} from "./icons/eye-icon.tsx";
import {eyeClosedIcon} from "./icons/eye-closed-icon.tsx";
import {ChangePasswordInputCustomStyle} from "../style/InputCustomStyle.ts";
import {useState} from "react";


export default function ChangePasswordModal() {
	const [newPasswordIsVisible, setNewPasswordIsVisible] = useState(false);
	const [confirmNewPasswordIsVisible, setConfirmNewPasswordIsVisible] = useState(false);
	const toggleNewPasswordVisibility = () => setNewPasswordIsVisible(!newPasswordIsVisible);
	const toggleConfirmNewPasswordVisibility = () => setConfirmNewPasswordIsVisible(!confirmNewPasswordIsVisible);

	const isOpen = useSelector((state: RootState) => state.changePasswordModal.isOpen);
	const dispatch = useDispatch();

	return (
		<>
			<Modal
				backdrop="blur"
				isOpen={isOpen}
				radius="lg"
				size={"sm"}
				placement="top"
				classNames={{
					body: "py-6",
					backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
					base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
					header: "border-b-[1px] border-[#292f46]",
					footer: "border-t-[1px] border-[#292f46]",
					closeButton: "hover:bg-white/5 active:bg-white/10 hidden",
				}}
			>
				<ModalContent>
					<>
						<ModalHeader className="flex flex-col gap-1">Change password</ModalHeader>
						<ModalBody>
							<form className="w-full ">
								<Input
									label="Old password"
									size="sm"
									variant="faded"
									type={"password"}
									className="mb-4"
									classNames={ChangePasswordInputCustomStyle}
								/>
								<Input
									label="New Password"
									size="sm"
									variant="faded"
									endContent={
										<button className="focus:outline-none relative -top-2" type="button" onClick={toggleNewPasswordVisibility}>
											{newPasswordIsVisible ? (eyeIcon()) : (eyeClosedIcon())}
										</button>
									}
									type={newPasswordIsVisible ? "text" : "password"}
									className="mb-4"
									classNames={ChangePasswordInputCustomStyle}
								/>
								<Input
									label="Confirm new password"
									size="sm"
									variant="faded"
									endContent={
										<button className="focus:outline-none relative -top-2" type="button" onClick={toggleConfirmNewPasswordVisibility}>
											{confirmNewPasswordIsVisible ? (eyeIcon()) : (eyeClosedIcon())}
										</button>
									}
									type={confirmNewPasswordIsVisible ? "text" : "password"}
									className="mb-4"
									classNames={ChangePasswordInputCustomStyle}
								/>
							</form>
						</ModalBody>
						<ModalFooter>
							<Button color="default" size="sm" radius="full" variant="bordered" className="text-smooth-gray border border-smooth-gray hover:bg-gray-800 hover:border-white hover:text-white font-medium" onPress={() => {dispatch(toggleChangePasswordModalOpening())}}>
								Close
							</Button>
							<Button color="default" radius="full" size="sm" variant="flat" onPress={() => {console.log('do some actions')}} className="font-medium uppercase bg-white/80 text-black/80 hover:bg-white hover:text-black">
								save
							</Button>
						</ModalFooter>
					</>
				</ModalContent>
			</Modal>
		</>
	);




}