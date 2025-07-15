

function LanguageHero() {
    return (
        <section
            className="relative w-full   h-[70%] md:min-h-screen px-2 xs:px-4 sm:px-8 md:px-16 flex items-center justify-center bg-cover   bg-bottom "
            style={{
                backgroundImage: `url('/assets/language_hero_img.jpg')`,
            }}
        >
            {/* Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "linear-gradient(to bottom, rgba(25,23,22,0.85) 0%, rgba(25,23,22,0.7) 60%, rgba(25,23,22,0.4) 100%)"
                }}
            />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-2 xs:px-4 py-10 sm:py-20 w-full">
                <h1
                    className="text-xs xs:text-base sm:text-3xl text-shadow-2xs bg-gradient-to-r from-white to-logo bg-clip-text text-transparent   md:text-6xl lg:text-7xl font-extrabold capitalize leading-tight mb-4 sm:mb-6"
                >
                    Start Learning a Language Today
                </h1>
                <p
                    className="text-xs xs:text-sm sm:text-base text-shadow-2xs   md:text-2xl max-w-xs sm:max-w-2xl text-white drop-shadow-md"
                >
                    Choose your language and begin practicing with real content.
                </p>
            </div>
        </section>
    );
}

export default LanguageHero;