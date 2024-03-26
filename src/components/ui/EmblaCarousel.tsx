import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
	PrevButton,
	NextButton,
	usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import ShowCard from "../../custom/ui/ShowCard.tsx";

type PropType = {
	slides: number[]
	options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { options } = props
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
	const link : string = "https://c4.wallpaperflare.com/wallpaper/462/216/45/movies-dark-wednesday-addams-wednesday-tv-series-movie-poster-hd-wallpaper-preview.jpg";


	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick
	} = usePrevNextButtons(emblaApi)

	return (
		<section className="max-w-[50rem] min-w-full flex flex-col">

			<div className="w-full overflow-hidden" ref={emblaRef}>
				<div className="flex gap-x-2">
					<ShowCard link={link} />
					<ShowCard link={link} />
					<ShowCard link={link} />
					<ShowCard link={link} />
					<ShowCard link={link} />
					<ShowCard link={link} />
					<ShowCard link={link} />
					<ShowCard link={link} />
					<ShowCard link={link} />
					<ShowCard link={link} />
				</div>
			</div>

			<div className="flex flex-nowrap items-center gap-x-3 self-end mt-5">
				<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
				<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
			</div>
		</section>
	)
}

export default EmblaCarousel
