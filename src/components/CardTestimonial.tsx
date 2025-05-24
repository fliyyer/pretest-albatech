import type { CardTestimonialProps } from "../types/card"


const CardTestimonial = ({ image, title, feedback, name, position }: CardTestimonialProps) => {
    return (
        <div className="flex flex-col">
            <h4 className="text-2xl md:text-3xl text-secondary font-semibold">{title}</h4>
            <p className="text-secondary my-2 text-base md:text-lg">{feedback}</p>
            <div className="flex items-center gap-3 mt-3">
                <img className="size-14 rounded-full" src={image} alt={name} />
                <div className="flex flex-col">
                    <h5 className="font-semibold">{name}</h5>
                    <p className="text-sm text-gray-400">{position}</p>
                </div>
            </div>
        </div>
    )
}

export default CardTestimonial