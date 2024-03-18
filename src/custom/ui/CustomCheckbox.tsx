
import {useCheckbox, Chip, VisuallyHidden, tv} from "@nextui-org/react";
import {CheckIcon} from "./icons/check-icon.tsx";
import{ ReactNode} from "react";

const checkbox = tv({
	slots: {
		base: "bg-gray-800 border-smooth-gray hover:bg-gray-800/80",
		content: "text-white text-sm"
	},
	variants: {
		isSelected: {
			true: {
				base: "border-secondary-purple bg-secondary-purple hover:bg-secondary-purple/80 hover:border-secondary-purple/80",
				content: "text-primary-foreground pl-1"
			}
		},
		isFocusVisible: {
			true: {
				base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
			}
		}
	}
})

type Props = {
	children: ReactNode,
	isSelected?: boolean,
	isFocusVisible?: boolean,
	getBaseProps?: unknown,
	getLabelProps?: unknown,
	getInputProps?: unknown,
	value: string
}
export const CustomCheckbox = (props : Props) => {
	const {
		children,
		isSelected,
		isFocusVisible,
		getBaseProps,
		getLabelProps,
		getInputProps,
	} = useCheckbox({
		...props
	})

	const styles = checkbox({ isSelected, isFocusVisible })


	return (
		<label {...getBaseProps()}>
			<VisuallyHidden>
				<input {...getInputProps()} />
			</VisuallyHidden>
			<Chip
				size="sm"
				classNames={{
					base: styles.base(),
					content: styles.content(),
				}}
				color="primary"
				startContent={isSelected ? <CheckIcon className="ml-1" /> : null}
				variant="faded"
				{...getLabelProps()}
			>
				{children ? children : isSelected ? "Enabled" : "Disabled"}
			</Chip>
		</label>
	);
}
