import React, {
	PropsWithChildren,
	useCallback,
	useEffect,
	useState
} from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import ArrowRightIcon from "../../custom/ui/icons/arrow-right-icon.tsx";
import ArrowLeftIcon from "../../custom/ui/icons/arrow-left-icon.tsx";

type UsePrevNextButtonsType = {
	prevBtnDisabled: boolean
	nextBtnDisabled: boolean
	onPrevButtonClick: () => void
	onNextButtonClick: () => void
}

export const usePrevNextButtons = (
	emblaApi: EmblaCarouselType | undefined,
	onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
	const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
	const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

	const onPrevButtonClick = useCallback(() => {
		if (!emblaApi) return
		emblaApi.scrollPrev()
		if (onButtonClick) onButtonClick(emblaApi)
	}, [emblaApi, onButtonClick])

	const onNextButtonClick = useCallback(() => {
		if (!emblaApi) return
		emblaApi.scrollNext()
		if (onButtonClick) onButtonClick(emblaApi)
	}, [emblaApi, onButtonClick])

	const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
		setPrevBtnDisabled(!emblaApi.canScrollPrev())
		setNextBtnDisabled(!emblaApi.canScrollNext())
	}, [])

	useEffect(() => {
		if (!emblaApi) return

		onSelect(emblaApi)
		emblaApi.on('reInit', onSelect)
		emblaApi.on('select', onSelect)
	}, [emblaApi, onSelect])

	return {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick
	}
}

type PropType = PropsWithChildren<
	React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	>
>

export const PrevButton: React.FC<PropType> = (props) => {
	const { children, ...restProps } = props

	return (
		<button
			type="button"
			{...restProps}
		>
			<ArrowLeftIcon width={26} height={26} color={"#FFFFFF"} />
			{children}
		</button>
	)
}

export const NextButton: React.FC<PropType> = (props) => {
	const { children, ...restProps } = props

	return (
		<button
			type="button"
			{...restProps}
		>
			<ArrowRightIcon width={26} height={26} color={"#FFFFFF"} />
			{children}
		</button>
	)
}
