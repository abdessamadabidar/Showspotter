interface Props {
	width: number;
	height: number;
	color: string;
}

export default function ArrowRightIcon({width, height, color}: Props) {
	return (
		<svg width={`${width}px`} height={`${height}px`} strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color={color}><path d="M9 6L15 12L9 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
);
}