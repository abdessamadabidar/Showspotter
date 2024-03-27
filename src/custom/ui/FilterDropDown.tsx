import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger} from "@nextui-org/react";

export default function FilterDropDown(): JSX.Element {

	return (

		<Dropdown
			className="rounded-xl"
			classNames={{
				base: "before:bg-slate-900",
				content: "py-1 px-1 bg-slate-900",
			}}
		>
			<DropdownTrigger>
				<Button  className="bg-slate-900 text-white border-1 border-gray-700" variant="faded" aria-label="Take a photo">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
						<path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
					</svg>
					Filter
				</Button>
			</DropdownTrigger>
			<DropdownMenu
				aria-label="Multiple selection example"
				variant="flat"
				closeOnSelect={false}
				// disallowEmptySelection
				selectionMode="multiple"
				selectedKeys={undefined}
				onSelectionChange={undefined}
			>
				<DropdownSection title="Media" classNames={{heading: "text-lg font-medium  text-white"}}>
					<DropdownItem  className="text-white/60 font-light data-[selected=true]:text-white" value="all" key="all">All</DropdownItem>
					<DropdownItem  className="text-white/60 font-light data-[selected=true]:text-white" value='movies' key="number">Movies</DropdownItem>
					<DropdownItem  className="text-white/60 font-light data-[selected=true]:text-white" value="series" key="series">TV Series</DropdownItem>
				</DropdownSection>
				<DropdownSection title="Languages" classNames={{heading: "text-lg font-medium  text-white"}}>
					<DropdownItem  className="text-white/60 font-light data-[selected=true]:text-white" value="english" key="english">English</DropdownItem>
					<DropdownItem  className="text-white/60 font-light data-[selected=true]:text-white" value='french' key="french">French</DropdownItem>
					<DropdownItem  className="text-white/60 font-light data-[selected=true]:text-white" value="dutch" key="dutch">Dutch</DropdownItem>
				</DropdownSection>
			</DropdownMenu>
		</Dropdown>


	);
}