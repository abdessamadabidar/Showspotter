import {Card, CardFooter, Chip, Image} from "@nextui-org/react";

interface Props {
	link: string;
}

export default function ShowCard({link}: Props) {
	return (
		<Card className="lg:w-[190px] lg:h-[240px] w-[100px] h-[140px] mb-4" key={1}>
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
			</CardFooter>
		</Card>
	);
}