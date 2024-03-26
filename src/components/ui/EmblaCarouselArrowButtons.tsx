import React, {
	PropsWithChildren,
	useCallback,
	useEffect,
	useState
} from 'react'
import { EmblaCarouselType } from 'embla-carousel'


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
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:scale-105 transition-all duration-500 text-white cursor-pointer">
				<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
			</svg>

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
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:scale-105 transition-all duration-500 text-white cursor-pointer">
				<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
			</svg>

			{children}
		</button>
	)
}
