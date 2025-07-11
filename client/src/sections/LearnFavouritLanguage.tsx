import LanguageCard from "../components/LanguageCard"
import { languageCard } from "../Types/languageCard"
function LearnFavouritLanguage() {
    return (
        <section className="md:p-16 p-8 bg-bgSecondary ">
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold leading-tight mb-4 transition-all duration-700 ease-in-out text-gray-900 drop-shadow-sm">
                Learn Your <span className="bg-gradient-to-r from-primary to-logo bg-clip-text text-transparent"> Favorite</span>  Language
            </h4>
            <h5 className="italic font-light text-base sm:text-lg md:text-xl text-gray-700">
                Practice every day in a way that fits your routine, builds fluency, and keeps you motivated.
            </h5>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {languageCard.map((card) => (
                    <LanguageCard key={card.id} {...card} />
                ))}
            </div>

        </section>
    )
}

export default LearnFavouritLanguage
