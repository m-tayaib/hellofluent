import connect_people from "../assets/connectPeople.webp"

function ConnectPeople() {
    return (
        <section className=" md:py-16 py-8 px-8 md:px-16 bg-bgSecondary  ">
            <div className="grid gap-12 grid-cols-1 md:grid-cols-2 items-center   ">
                {/* image div  */}
                <div className="flex items-center justify-center mb-5 md:mb-0 md:justify-start bg-transparent md:order-1 order-2 ">
                    <img
                        src={connect_people}
                        alt="world Image"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover bg-transparent"
                        style={{ backgroundColor: "transparent" }}
                    />
                </div>


                <div className="text-center md:text-left md:order-2 order-1 ">
                    <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-primary mb-2 transition-all duration-500 ease-in-out tracking-wide">
                        Write. Speak. Repeat. & Grow
                    </h4>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl capitalize font-extrabold leading-tight mb-4 transition-all duration-700 ease-in-out text-gray-900 drop-shadow-sm">
                        <span className="bg-gradient-to-r from-primary to-logo bg-clip-text text-transparent animate-gradient-x transition-all duration-700">    Practice {" "}
                        </span>
                        Your Way

                    </h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-3 leading-relaxed transition-all duration-500 ease-in-out">
                        Choose how you practice — daily prompts help you build real skills your way.
                    </p>

                </div>


            </div>
        </section >
    )
}

export default ConnectPeople