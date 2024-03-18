import {CircularProgress} from "@nextui-org/react";



const LoadingCircularProgress = () : JSX.Element => {
	return (
		<div className={"w-screen h-screen grid place-content-center"}>
			<CircularProgress  classNames={{
				svg: "w-24 h-24 md:w-36 md:h-36 drop-shadow-md",
				indicator: "stroke-purple-400",
				track: "stroke-white/10",
			}}/>
		</div>
	);
}

export default LoadingCircularProgress;