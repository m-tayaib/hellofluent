import { Link } from "react-router-dom";

import type { LanguageOption as PickLanguageCardProps } from "../Types/LanguagePickCardType";

const PickLanguageCard: React.FC<PickLanguageCardProps> = ({ language, path, flagImage }) => {
    return (
        <div
            className="w-full  py-4 px-3    rounded-md shadow-md border border-gray-200 bg-white transition-transform duration-200 hover:scale-[1.025] hover:shadow-md group"
            style={{ minHeight: 100 }}
        >
            <div className="flex items-center gap-4  ">
                {/* Flag and Country Name */}
                <div className="flex items-center gap-3 pb-3 flex-1 min-w-0">
                    <img src={flagImage} alt={language + ' flag'} className="w-8 rounded-sm h-4 md:w-10 md:h-8 shadow-md object-cover    "  width={40} height={40}/>
                    <span className="text-lg md:text-xl font-semibold text-gray-800 truncate group-hover:bg-gradient-to-r from-logo to-primary bg-clip-text group-hover:text-transparent transition-colors duration-200">{language}</span>
                </div>
            </div>
            {/* Action Button */}
            <Link
                to={path}
                className=" block w-full mx-auto    px-5 py-2 rounded-md bg-gradient-to-r from-primary to-logo text-white font-bold shadow-sm hover:bg-primary hover:text-logo transition-colors duration-200 focus:outline-none   "
                tabIndex={0}
                aria-label={`Go to ${language}`}
            >
                Start Learning
            </Link>
        </div>
    );
};

export default PickLanguageCard;