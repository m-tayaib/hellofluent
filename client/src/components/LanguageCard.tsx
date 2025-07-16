import React from "react";
import type { LanguageCard as LanguageCardProps } from "../Types/languageCard";

const LanguageCard: React.FC<LanguageCardProps> = React.memo(function LanguageCard({ img, username, fromLanguage, toLanguage, flagImage }) {
    return (
        <div
            className="font-[Inter] mx-auto cursor-pointer relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[320px] h-[220px] sm:h-[320px] md:h-[380px] rounded-3xl overflow-hidden gap-4 items-center group shadow-lg transition-transform duration-300 hover:scale-105 bg-white/80 backdrop-blur-md border border-gray-200"
            tabIndex={0}
            aria-label={`Language card for ${username}`}
        >
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-300 opacity-80 z-10 pointer-events-none"></div>
            {/* Flag Image */}
            <img
                alt={`Flag representing ${toLanguage}`}
                className="absolute left-3 top-3 sm:left-4 sm:top-4 z-30 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-white shadow-md bg-white"
                src={flagImage}
                width={56}
                height={56}
            />
            {/* Main Image */}
            <img
                alt={`Profile of ${username}`}
                className="h-full w-full text-transparent object-cover object-center transition-transform duration-300 group-hover:scale-105"
                src={`/assets/${img}`}
                width={100}
                height={100}
            />
            {/* Info Section */}
            <div className="p-2 sm:p-4 md:p-5 flex absolute   bottom-1 left-0 right-0 flex-col z-30">
                <div className="relative z-10">
                    <p className="text-white text-base sm:text-lg md:text-2xl font-bold drop-shadow mb-1">{username}</p>
                    <div className="flex gap-2 mb-2 flex-wrap">
                        <span className="min-w-[72px] sm:min-w-[96px] text-xs sm:text-base gap-2 py-1 px-2 sm:py-2 sm:px-4 rounded-full bg-white/90 text-gray-900 font-medium text-center flex items-center justify-center shadow-sm border border-gray-100">{fromLanguage}</span>
                        <span className="min-w-[72px] sm:min-w-[96px] text-xs sm:text-base gap-2 py-1 px-2 sm:py-2 sm:px-4 rounded-full bg-white/90 text-gray-900 font-medium text-center flex items-center justify-center shadow-sm border border-gray-100">{toLanguage}</span>
                    </div>
                    <div className="relative z-10 flex justify-center">
                        <a
                            className="w-full h-[40px] sm:h-[44px] bg-gradient-to-r from-primary to-logo text-center text-sm sm:text-base flex items-center justify-center rounded-full font-bold text-white shadow-md mt-2 transition-all duration-300 opacity-100  pointer-events-none group-hover:pointer-events-auto transform translate-y-4 group-hover:-translate-y-2 hover:from-logo hover:to-primary focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2"
                            href="#"
                            aria-label={`Learn more about ${username}`}
                        >
                            <span className="text-shadow-2xs text-accent">Learn more</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default LanguageCard;