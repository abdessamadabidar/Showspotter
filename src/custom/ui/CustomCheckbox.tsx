
import {useCheckbox, Chip, VisuallyHidden, tv} from "@nextui-org/react";
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



	//ts-expect-error
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
				startContent={isSelected ?
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-white">
						<path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
					</svg>
					: null}
				variant="faded"
				{...getLabelProps()}
			>
				{children ? children : isSelected ? "Enabled" : "Disabled"}
			</Chip>
		</label>
	);
}
