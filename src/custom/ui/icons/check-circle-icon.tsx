interface Props {
	width: number;
	height: number;
	color: string;
}

export default function CheckCircleIcon({width, height, color}: Props) {
	return (
		<svg width={`${width}px`} height={`${height}px`} strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color={color}><path d="M7 12.5L10 15.5L17 8.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
	);
}