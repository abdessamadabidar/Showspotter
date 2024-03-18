interface Props {
	width: number;
	height: number;
	color: string;
}


export default function LockIcon({width, height, color}: Props) {

	return (
		<svg width={`${width}px`}  height={`${height}px`}  strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color={color}><path d="M16 12H17.4C17.7314 12 18 12.2686 18 12.6V19.4C18 19.7314 17.7314 20 17.4 20H6.6C6.26863 20 6 19.7314 6 19.4V12.6C6 12.2686 6.26863 12 6.6 12H8M16 12V8C16 6.66667 15.2 4 12 4C8.8 4 8 6.66667 8 8V12M16 12H8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>	
	);
}