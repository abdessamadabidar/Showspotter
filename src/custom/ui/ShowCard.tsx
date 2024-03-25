import {Card, CardFooter, Chip, Image} from "@nextui-org/react";

interface Props {
	link: string;
}

export default function ShowCard({link}: Props) {
	return (
		<div key={1}>
			<Card className="bg-gray-800 sm:w-[115px] sm:h-[171px] md:w-[178px] md:h-[267px] lg:w-[314px] lg:h-[475px] xl:w-[150px] xl:h-[225px] hover:scale-105 transition-all duration-500 mb-1.5" isPressable>
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
	);
}