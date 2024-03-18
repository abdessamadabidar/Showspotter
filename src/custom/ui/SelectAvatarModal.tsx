
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store.ts";
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader, Radio, RadioGroup
} from "@nextui-org/react";
import {toggleSelectAvatarModalOpening} from "../../state/modal/selectAvatarModalSlice.ts";
import {cn} from "../../utils/cn.ts";
import Avatar, {avatars} from "../data/avatars.ts";


export default function SelectAvatarModal() {



	const isOpen = useSelector((state: RootState) => state.selectAvatarModal.isOpen);
	const dispatch = useDispatch();

	return (
		<>
			<Modal
				backdrop="blur"
				isOpen={isOpen}
				radius="lg"
				size={"5xl"}
				placement="bottom"
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
						<ModalHeader className="flex flex-col gap-1">Select your avatar</ModalHeader>
						<ModalBody>
							<RadioGroup
								className="gap-1"
								orientation="horizontal"
								value={undefined}
								onChange={undefined}
							>

								<div className="flex flex-wrap gap-6">
									{
										avatars.map((avatar : Avatar, index: number) => {
											return (
												<Radio
													classNames={{
														base: cn(
															"max-w-md",
															"rounded-full",
															"cursor-pointer rounded-lg   border border-smooth-gray",
															"data-[selected=true]:border-4",
															"data-[selected=true]:border-primary-purple",
														),
														wrapper: "relative top-7 -right-11 hidden"
													}}
													className={`bg-cover bg-no-repeat size-20 rounded-full`}
													style={{backgroundImage: `url('${avatar.url}')`}}
													color="secondary"
													value={`${avatar.url}`}
													key={index}
												/>
											);
										})
									}

								</div>


							</RadioGroup>
						</ModalBody>
						<ModalFooter className={"border-0"}>
							<Button color="default" size="sm" radius="full" variant="bordered"
							className="text-smooth-gray border border-smooth-gray hover:bg-gray-800 hover:border-white hover:text-white font-medium"
							onPress={() => {dispatch((toggleSelectAvatarModalOpening()))}}>
								Close
							</Button>
							<Button color="default" radius="full" size="sm" variant="flat" onPress={() => {
								console.log('do some actions')
							}}
							className="font-medium uppercase bg-white/80 text-black/80 hover:bg-white hover:text-black">
								save
							</Button>
						</ModalFooter>
					</>
				</ModalContent>
			</Modal>
		</>
	);
}