import {Card, CardFooter, Chip, Image} from "@nextui-org/react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../state/store.ts";

interface Props {
	name: string,
	links: string[]
}


export  default function GridSectionRender({name, links}: Props) : JSX.Element {

	const appIsLoading = useSelector((state: RootState) => state.applicationLoading.isLoading);

	return (
		<section className="flex flex-col gap-y-5">
			<div className="flex items-center justify-between pb-5 border-b-0.1 border-b-smooth-gray">
				<span>{name}</span>
				<Link to="#" >
					<span className={"flex items-center gap-x-1 text-blue-700 hover:text-blue-600"}>
						<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256"><path fill="#1d4ed8" d="M220 128a4 4 0 0 1-4 4h-84v84a4 4 0 0 1-8 0v-84H40a4 4 0 0 1 0-8h84V40a4 4 0 0 1 8 0v84h84a4 4 0 0 1 4 4"/></svg>
						<span className={"text-sm "}>More</span>
					</span>
				</Link>
			</div>
			{/* TODO - remove '!' below */}
			<div className={`gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-7 ${!appIsLoading && "animate-pulse"} `}>
				{links.map((link : string, index: number) =>
					(
						<Card className="bg-gray-800  sm:w-[115px] sm:h-[171px] md:w-[178px] md:h-[267px] lg:w-[314px] lg:h-[475px] xl:w-[150px] xl:h-[225px]" key={index} isPressable>
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover"
								src={link}
							/>
							<CardFooter className="flex justify-between overflow-hidden py-1 absolute bottom-1 w-[calc(100%_-_8px)] ml-1 z-10">
								<Chip
									className={"bg-gray-700"}
									variant="shadow"
									size="sm"
									classNames={{
										base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
										content: "drop-shadow shadow-black text-white",
									}}
								>
									New
								</Chip>
								<Chip className="text-tiny text-white bg-black/70 font-medium" variant="flat" color="default" radius="lg" size="sm">
									2024
								</Chip>

							</CardFooter>
						</Card>
					)
				)}
			</div>
		</section>
	);

}