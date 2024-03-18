
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
	CheckboxGroup
} from "@nextui-org/react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store.ts";
import {toggleOpening} from "../../state/modal/categoriesModalSlice.ts";
import {CustomCheckbox} from "./CustomCheckbox.tsx";
import {categories} from "../data/categories.ts";

export default function CategoriesModal() {
	const {onOpenChange} = useDisclosure();
	const isOpen = useSelector((state: RootState) => state.categoriesModal.isOpen);
	const dispatch = useDispatch();

	return (
		<>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				size="xs"
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
							<ModalHeader className="flex flex-col gap-1 text-white">Choose your categories</ModalHeader>
							<ModalBody className="text-white">
								<form>
									<CheckboxGroup
										className="gap-1"
										orientation="horizontal"
										value={undefined}
										onChange={undefined}
									>
										{categories.map((category: string, index: number) => {
											return <CustomCheckbox key={index} value={category} >{category}</CustomCheckbox>
										})}
									</CheckboxGroup>
								</form>

							</ModalBody>
							<ModalFooter>
								<Button color="default" size="sm" radius="full" variant="bordered" className="text-smooth-gray border border-smooth-gray hover:bg-gray-800 hover:border-white hover:text-white font-medium" onPress={() => {dispatch(toggleOpening())}}>
									Close
								</Button>
								<Button color="default" radius="full" size="sm" variant="flat" onPress={() => {console.log('do some actions')}} className="font-medium uppercase bg-white/80 text-black/80 hover:bg-white hover:text-black">
									get
								</Button>
							</ModalFooter>
						</>
				</ModalContent>
			</Modal>
		</>
	);
}
