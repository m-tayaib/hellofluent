import World_Imag from "../assets/world.jpg"
function SmartLanguageTag() {
    return (
        <section className=" md:py-16 py-8 px-8 md:px-16  ">
            <div className="grid  grid-cols-1 md:grid-cols-2 items-center ">

                {/* content div  */}
                <div className="text-center md:text-left md:order-1 order-2">
                    <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-primary mb-2 transition-all duration-500 ease-in-out tracking-wide">
                        SMART LANGUAGE LEARNING
                    </h4>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl capitalize font-extrabold leading-tight mb-4 transition-all duration-700 ease-in-out text-gray-900 drop-shadow-sm">
                        Empower your{" "}
                        <span className="bg-gradient-to-r from-primary to-logo bg-clip-text text-transparent animate-gradient-x transition-all duration-700">
                            fluency
                        </span>
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-3 leading-relaxed transition-all duration-500 ease-in-out">
                        Practice  LANGUAGE  through daily prompts and exercises, designed to help you grow without pressure — anytime, anywhere.
                    </p>
                    <i className="font-light text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-500 transition-all duration-500 ease-in-out">
                        Built-in tools for review and pronunciation help you improve naturally.{" "}
                        <strong className="text-primary font-semibold animate-pulse">Coming soon</strong>
                    </i>
                </div>

                {/* image div  */}
                <div className="flex items-center justify-center mb-5 md:mb-0 md:justify-end bg-transparent md:order-2 order-1">
                    <img 
                        src={World_Imag} 
                        alt="world Image" 
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover bg-transparent" 
                        style={{ backgroundColor: "transparent" }}
                    />
                </div>

            </div>
        </section >
    )
}

export default SmartLanguageTag


