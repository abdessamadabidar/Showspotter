

import { spiral } from 'ldrs'




const LoadingProgress = () : JSX.Element => {
	spiral.register()
	return (
		<div className={"w-screen h-screen grid place-content-center"}>
			<l-spiral
				size="100"
				speed="0.9"
				color="white"
			></l-spiral>
		</div>
	);
}

export default LoadingProgress;