import type { CardPortofolioProps } from "../types/card"

const CardPortofolio = ({ image, category, title, description }: CardPortofolioProps) => {
    return (
        <div className="flex flex-col w-full border border-gray-200 hover:border-primary transition duration-300 bg-white rounded-lg">
            <img className="w-full rounded-t-lg h-64 object-fill" src={image} alt={title} />
            <div className='p-5 flex flex-col space-y-1.5'>
                <span className='text-sm text-gray-400 font-light'>{category}</span>
                <h3 className='font-semibold text-primary text-lg'>{title}</h3>
                <p className='text-secondary text-sm'>{description}</p>
            </div>
        </div>
    )
}

export default CardPortofolio