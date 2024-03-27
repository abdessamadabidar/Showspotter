import {Modal, ModalBody, ModalContent, ModalHeader} from "@nextui-org/react";
import {useSelector} from "react-redux";
import {RootState} from "../../state/store.ts";
import {Link} from "react-router-dom";


export default function SearchQueryModal() : JSX.Element {

	const  isOpen: boolean = useSelector((state: RootState) => state.searchQueryModal.isOpen);

	return (
		<>
			<Modal
				backdrop="blur"
				isOpen={isOpen}
				isDismissable
				radius="lg"
				size={"lg"}
				placement="top"
				className="border-1 border-gray-700"
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
					<ModalHeader className={"p-0"}>
						<div
							className=" w-full bg-transparent px-3 flex flex-nowrap items-center rounded-2xl ">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6 text-smooth-gray">
								<path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
							</svg>
							<input type="text" name="searchQuery"
							       className={"bg-transparent font-light text-medium w-full h-full ms-2 py-[1rem] !border-0 outline-0"}
							       placeholder={"search"}

							/>
							<div className="border-1 border-gray-700 p-1 text-xs font-normal uppercase rounded-md">
								esc
							</div>
						</div>
					</ModalHeader>
					<ModalBody className="px-3">
						<div className="flex flex-col gap-y-3">
							<Link className="px-6 py-4 text-sm font-open-sans rounded-xl bg-transparent border-1 flex items-center justify-between border-gray-700 hover:bg-slate-950" to={"#"}>
								La casa del papel
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
									<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
								</svg>
							</Link>
							<Link className="px-6 py-4 text-sm font-open-sans rounded-xl bg-transparent border-1 flex items-center justify-between border-gray-700 hover:bg-slate-950" to={"#"}>
								The walking dead
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
									<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
								</svg>
							</Link>
						</div>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}