import { useRef } from "react";
import { countriesData } from "../Types/countriesTypes";

function CountriesFlags() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.7; // Scroll by 70% of container width
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="mt-16 overflow-hidden relative flex items-center gap-2">
            {/* Left Button (hidden on mobile) */}
            <button
                className="hidden md:flex  cursor-pointer  z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100 transition"
                onClick={() => scroll('left')}
                aria-label="Scroll left"
                type="button"
            >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
            </button>
            {/* Scrollable Flags */}
            <div
                ref={scrollRef}
                className="flex items-center gap-5 overflow-x-auto hide-scrollbar px-2 md:px-10 scroll-smooth snap-x snap-mandatory"
                style={{ scrollBehavior: 'smooth' }}
            >
                {countriesData.map((country) => (
                    <div
                        key={country.id}
                        className="flex-shrink-0 w-1/4 md:w-32 lg:w-40 xl:w-48 flex flex-col items-center snap-start"
                    >
                        <div className="w-[64px] h-[64px] md:w-[96px] md:h-[96px] rounded-full overflow-hidden flex items-center justify-center shadow-lg border border-gray-200 bg-white p-1">
                            <img
                                src={country.flagImage}
                                alt={country.name}
                                className="w-full h-full object-cover rounded-full"
                                loading="lazy"
                            />
                        </div>
                        <h4 className="mt-2 text-center text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">
                            {country.name}
                        </h4>
                    </div>
                ))}
            </div>
            {/* Right Button (hidden on mobile) */}
            <button
                className="hidden md:flex cursor-pointer   z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100 transition"
                onClick={() => scroll('right')}
                aria-label="Scroll right"
                type="button"
            >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
        </div>
    );
}

export default CountriesFlags