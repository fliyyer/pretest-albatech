import { useRef, useState } from "react";
import { partnerData } from "../constant/dummyData";


const SliderPartner = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 5;
    const totalPages = Math.ceil(partnerData.length / itemsPerPage);

    const scrollToPage = (page: number) => {
        const container = containerRef.current;
        if (container) {
            const scrollAmount = container.offsetWidth * page;
            container.scrollTo({ left: scrollAmount, behavior: "smooth" });
            setCurrentPage(page);
        }
    };

    const handleScroll = () => {
        const container = containerRef.current;
        if (container) {
            const newPage = Math.round(container.scrollLeft / container.offsetWidth);
            setCurrentPage(newPage);
        }
    };
    return (
        <div className="w-full my-20">
            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="flex  gap-10 px-4 scroll-smooth snap-x snap-mandatory overflow-hidden"
            >
                {partnerData.map((partner, index) => (
                    <div
                        key={index}
                        className="min-w-[10%] flex-shrink-0 snap-center flex justify-center items-center"
                    >
                        <img
                            src={partner.image}
                            alt={partner.title}
                            className=" object-contain size-56 transition duration-300"
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-center space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToPage(index)}
                        className={`w-3 h-3 rounded-full ${index === currentPage ? "bg-yellow-400" : "bg-gray-300"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    )
}

export default SliderPartner