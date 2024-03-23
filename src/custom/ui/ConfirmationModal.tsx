import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store.ts";
import {toggleOpening} from "../../state/modal/confirmationModalSlice.ts";
import WarningTriangleSolidIcon from "./icons/warning-triangle-solid-icon.tsx";


interface Props {
	title: string,
	message: string
}
export default function ConfirmationModal({title, message}: Props) : JSX.Element {

	const  isOpen: boolean = useSelector((state: RootState) => state.confirmationModal.isOpen);
	const dispatch = useDispatch();

	return (
		<>
			<Modal
				backdrop="opaque"
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
						<ModalHeader className="flex flex-nowrap gap-2 text-red-500  items-center">
							<WarningTriangleSolidIcon width={16} height={16} color={"#ef4444"} />
							{title}
						</ModalHeader>
						<ModalBody>
							<p className="italic font-open-sans">
								{message}
							</p>
						</ModalBody>
						<ModalFooter>
							<Button color="default" size="sm" radius="full" variant="bordered" className="text-smooth-gray border border-smooth-gray hover:bg-gray-800 hover:border-white hover:text-white font-medium" onPress={() => {dispatch(toggleOpening())}}>
								No
							</Button>
							<Button color="default" radius="full" size="sm" variant="flat" onPress={() => {console.log('do some actions')}} className="font-medium uppercase bg-red-500/80 text-white/80 hover:bg-red-500 hover:text-white">
								Yes
							</Button>
						</ModalFooter>
					</>
				</ModalContent>
			</Modal>
		</>
	);
}