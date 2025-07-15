import type { FC } from "react"
import type { LearnPathway } from "../Types/LanguageLearnPathType"
import { MdAccessTime } from "react-icons/md"
const LanguageLearnPathwayCard: FC<LearnPathway> = ({ title, des, comingSoon, icon: Icon }) => {
    return (
        <div
            className={`w-full  shadow-lg border border-logo/30 rounded-2xl transition-all duration-300 flex flex-col justify-between p-3 sm:p-5 md:p-6 cursor-pointer relative overflow-hidden
                ${comingSoon ? 'bg-gradient-to-r from-logo/10 to-primary/10 pointer-events-none' : 'bg-white hover:shadow-2xl hover:scale-[1.03] hover:border-logo/60 focus:outline-none focus:ring-2 focus:ring-logo/40 '}`}
            tabIndex={0}
            aria-label={comingSoon ? 'Coming Soon' : title}
        >
            {comingSoon && (
                <span className="absolute top-2 right-2 font-medium flex items-center gap-1 px-2 py-0.5 rounded-full bg-transparent animate-pulse bg-gradient-to-r from-logo to-primary  text-white text-xs sm:text-sm shadow-sm   border-logo/10 z-10">
                    <MdAccessTime className="text-xs sm:text-sm" />
                    <span className="tracking-tight bg-gradient-to-r from-white to-logo bg-clip-text text-transparent">Coming Soon</span>
                </span>
            )}
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-logo/10 to-logo/30 mb-2 sm:mb-3 md:mb-4 shadow-md transition-transform duration-300 group-hover:scale-110">
                <Icon className="text-logo text-xl sm:text-2xl md:text-3xl transition-colors duration-300 group-hover:text-primary" />
            </div>
            <div className="">
                <h4 className={`text-primary text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 tracking-tight ${comingSoon != true && "hover:underline"}`}>{title}</h4>
                <p className="text-primary/60 text-xs sm:text-sm md:text-base leading-relaxed">{des}</p>
            </div>
        </div>
    )
}

export default LanguageLearnPathwayCard