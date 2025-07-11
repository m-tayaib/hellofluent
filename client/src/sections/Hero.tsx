function Hero() {
    return (
        <section className="md:min-h-[50vh] px-8 md:px-16 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center  ">
                {/* text content container  */}
                <div className="md:order-1  order-2 text-center md:text-left">
                    <h1 className="text-3xl    sm:text-5xl md:text-6xl lg:text-8xl font-extrabold capitalize  leading-tight text-gray-900 mb-4 drop-shadow-sm transition-all duration-300">
                    Fluency starts with<br />
                        <span className="  bg-gradient-to-r from-primary to-logo bg-clip-text text-transparent">effort</span>
                    </h1>
                    <p className="text-base   sm:text-lg md:text-xl text-gray-600 mb-6 max-w-xl leading-relaxed transition-all duration-300">
                        Grow your fluency with consistent practice — one word, one phrase, one day at a time.
                    </p>
                    <button className="py-3 px-6 rounded-lg mt-2 bg-white/70 text-primary font-semibold shadow-lg hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out cursor-pointer backdrop-blur-sm border border-primary/20">
                        Start Learning
                    </button>
                </div>
                {/* image content container  */}
                <div className="md:order-2 flex justify-end items-center order-1 md:w-full md:h-full w-[250px] h-[350px] mx-auto">
                    <img src={"/assets/hero_image.webp"} alt="HelloFluent-worldImage" loading="lazy" className="object-cover"  />
                </div>

            </div>
        </section>
    )
}

export default Hero