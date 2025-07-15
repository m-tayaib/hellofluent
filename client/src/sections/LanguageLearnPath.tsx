
import LanguageLearnPathwayCard from "../components/LanguageLearnPathwayCard";
import { learnPathways } from "../Types/LanguageLearnPathType"


function LanguageLearnPath() {
    return (
        <section className="p-8 md:p-16  bg-gray-50  ">
            <h2
                className="
                    text-xl
                    sm:text-2xl
                    md:text-3xl
                    lg:text-4xl
                    xl:text-5xl
                    font-bold
                    bg-gradient-to-r
                    from-logo
                    to-primary
                    bg-clip-text
                    text-transparent
                    text-center
                    w-full
                    mb-4
                    sm:mb-6
                    md:mb-8
                    leading-tight
                "
            >
                Learning Pathways
            </h2>

            <div className="grid mt-5 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {learnPathways.map((path) => (
                    <LanguageLearnPathwayCard
                        key={path.title}
                        title={path.title}
                        des={path.des}
                        icon={path.icon}
                        comingSoon={path.comingSoon}
                    />
                ))}
            </div>
        </section>
    )
}

export default LanguageLearnPath