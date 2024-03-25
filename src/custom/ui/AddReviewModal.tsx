
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure, Textarea,
} from "@nextui-org/react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store.ts";
import {toggleOpening} from "../../state/modal/addReviewModalSlice.ts";


export default function AddReviewModal() {
	const {onOpenChange} = useDisclosure();
	const isOpen = useSelector((state: RootState) => state.addReviewModal.isOpen);
	const dispatch = useDispatch();

	return (
		<>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				size="sm"
				scrollBehavior={"outside"}
				backdrop={"blur"}
				className="shadow-xl bg-gray-900 border border-gray-800"
				hideCloseButton
				classNames={{
					body: "py-6",
					backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
					base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
					header: "border-b-[1px] border-[#292f46]",
					footer: "border-t-[1px] border-[#292f46]",
				}}
			>

				<ModalContent>
					<>
						<ModalHeader className="flex flex-nowrap items-center gap-x-1 text-white">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
							</svg>
							Add review
						</ModalHeader>
						<ModalBody className="text-white">
							<form>
								<Textarea
									label="Review"
									variant="faded"
									placeholder="Enter your review here"
									radius={"sm"}
									minRows={10}
									classNames={{
										label: ["text-smooth-gray"],
										inputWrapper: [
											"bg-gray-800",
											"border-primary-gray",
											"border-1"
										],
										input: "resize-y min-h-[40px]"
									}}
								/>
							</form>

						</ModalBody>
						<ModalFooter>
							<Button color="default" size="sm" radius="full" variant="bordered" className="text-smooth-gray border border-smooth-gray hover:bg-gray-800 hover:border-white hover:text-white font-medium" onPress={() => {dispatch(toggleOpening())}}>
								Close
							</Button>
							<Button color="default" radius="full" size="sm" variant="flat" onPress={() => {console.log('do some actions')}} className="font-medium uppercase bg-white/80 text-black/80 hover:bg-white hover:text-black">
								Add
							</Button>
						</ModalFooter>
					</>
				</ModalContent>
			</Modal>
		</>
	);
}
