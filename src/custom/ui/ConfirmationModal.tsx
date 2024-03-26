import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store.ts";
import {toggleOpening} from "../../state/modal/confirmationModalSlice.ts";



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
				backdrop="blur"
				isOpen={isOpen}
				radius="lg"
				size={"sm"}
				placement="top"
				classNames={{
					body: "py-6",
					backdrop: "bg-transparent/50 ",
					base: "border-[#292f46] bg-slate-900 dark:bg-[#19172c] text-[#a8b0d3]",
					header: "border-b-[1px] border-[#292f46]",
					footer: "border-t-[1px] border-[#292f46]",
					closeButton: "hover:bg-white/5 active:bg-white/10 hidden",
				}}
			>
				<ModalContent>
					<>
						<ModalHeader className="flex flex-nowrap gap-2 text-red-500 uppercase  items-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 22" strokeWidth={1.5} stroke="currentColor" className="size-5">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
							</svg>

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