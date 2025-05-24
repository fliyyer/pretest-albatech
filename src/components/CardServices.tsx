import type { CardServicesProps } from "../types/card";

const CardServices = ({ image, title, description }: CardServicesProps) => {
    return (
        <div className="flex flex-col items-start justify-center rounded-lg bg-white py-6 px-4 border cursor-pointer border-gray-200 shadow-lg hover:border-primary transition-ease duration-300">
            <img className="object-contain w-12 h-14" src={image} alt={title} />
            <h3 className="mt-2 mb-1 font-semibold text-primary">{title}</h3>
            <p className="text-sm text-secondary">{description}</p>
        </div>
    );
};

export default CardServices;
