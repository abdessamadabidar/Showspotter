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
			<div className="flex items-center justify-between pb-3 border-b-0.1 border-b-smooth-gray">
				<h6 className="text-xl font-bold">{name}</h6>
				<Link to="#" className="text-blue-700 hover:text-blue-600 font-semibold flex flex-nowrap items-center gap-x-1 group ">
					More
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 22" strokeWidth={1.5} stroke="currentColor" className="size-4 group-hover:translate-x-1 transition-all duration-500">
						<path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
					</svg>
				</Link>
			</div>
			<div className={`gap-x-2 gap-y-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-7 ${appIsLoading && "animate-pulse"} `}>
				{links.map((link : string, index: number) =>
					(
						<div key={index}>
							<Card className="bg-gray-800 sm:w-[115px] sm:h-[171px] md:w-[178px] md:h-[267px] lg:w-[314px] lg:h-[475px] xl:w-[150px] xl:h-[225px] hover:scale-105 transition-all duration-500 mb-1.5"  isPressable>
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
							<p className="text-sm px-1 font-open-sans leading-tight">lorem ipsum harvered map</p>
						</div>
					)
				)}
			</div>
		</section>
	);

}