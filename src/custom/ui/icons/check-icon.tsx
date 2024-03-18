import {SVGProps} from "react";
import { JSX } from "react/jsx-runtime";

export const CheckIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>)  =>
	(
		<svg
			aria-hidden="true"
			fill="none"
			focusable="false"
			height="1em"
			stroke="#FFFFFF"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			viewBox="0 0 24 24"
			width="1em"
			{...props}
		>
			<polyline points="20 6 9 17 4 12" />
		</svg>
	);
