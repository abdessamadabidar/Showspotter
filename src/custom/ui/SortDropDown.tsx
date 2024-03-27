import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";

export default function SortDropDown(): JSX.Element {

	return (

		<Dropdown
			className="rounded-xl"
			classNames={{
				base: "before:bg-slate-900",
				content: "py-1 px-1 bg-slate-900",
			}}
		>
			<DropdownTrigger>
				<Button isIconOnly  className="bg-slate-900 text-white border-1 border-gray-700 flex items-center" variant="faded" aria-label="Take a photo">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" fill="currentColor" className="size-5">
						<path fillRule="evenodd" d="M2.25 4.5A.75.75 0 0 1 3 3.75h14.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 4.5A.75.75 0 0 1 3 8.25h9.75a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9Zm15-.75A.75.75 0 0 1 18 9v10.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V9a.75.75 0 0 1 .75-.75Zm-15 5.25a.75.75 0 0 1 .75-.75h9.75a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
					</svg>
				</Button>
			</DropdownTrigger>
			<DropdownMenu
				aria-label="Multiple selection example"
				variant="flat"
				closeOnSelect={false}
				// disallowEmptySelection
				selectionMode="single"
				selectedKeys={undefined}
				onSelectionChange={undefined}
			>
				<DropdownItem  className="text-white/60 font-light data-[selected=true]:text-white" value="all" key="all">Popularity</DropdownItem>
				<DropdownItem  className="text-white/60 font-light data-[selected=true]:text-white" value='movies' key="number">Most recent</DropdownItem>
				<DropdownItem  className="text-white/60 font-light data-[selected=true]:text-white" value="series" key="series">Alphabetic order</DropdownItem>
			</DropdownMenu>
		</Dropdown>


	);
}