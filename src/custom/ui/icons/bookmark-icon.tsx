interface Props {
	width: number;
	height: number;
	color: string;
}

export default function BookmarkIcon({width, height, color}: Props) {
	return (
		<svg width={`${width}px`} height={`${height}px`} strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color={color}><path d="M5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L13.0815 17.1953C12.4227 16.7717 11.5773 16.7717 10.9185 17.1953L5 21Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
	);
}