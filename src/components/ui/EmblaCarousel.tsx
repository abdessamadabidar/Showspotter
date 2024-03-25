import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
	PrevButton,
	NextButton,
	usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import "./embla.css"
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

			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					<div className="embla__slide" >
						<ShowCard link={link} />
					</div>
					<div className="embla__slide" >
						<ShowCard link={link} />
					</div>
					<div className="embla__slide" >
						<ShowCard link={link} />
					</div>
					<div className="embla__slide" >
						<ShowCard link={link} />
					</div>
					<div className="embla__slide" >
						<ShowCard link={link} />
					</div>
					<div className="embla__slide" >
						<ShowCard link={link} />
					</div>
					<div className="embla__slide" >
						<ShowCard link={link} />
					</div>
					<div className="embla__slide" >
						<ShowCard link={link} />
					</div>
				</div>
			</div>

			<div className="flex flex-nowrap items-center gapx-3 self-end">
				<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
				<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
			</div>
		</section>
	)
}

export default EmblaCarousel
