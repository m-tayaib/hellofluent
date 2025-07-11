import world_map from "../assets/world_map4.jpg"
import DifferentHello from "../components/DifferentHello"
import { differentHelloData } from "../Types/DifferentHello"
function World() {
    return (
        <section
            className="relative flex flex-col items-center justify-center min-h-[70vh] h-screen px-4 sm:px-8 md:px-16 overflow-hidden"
            style={{
                backgroundImage: `url(${world_map})`,
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            {/* Gradient overlay for smoothness and readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/10 backdrop-blur-sm transition-all duration-500" aria-hidden="true" />
            <div className="relative z-10 p-4 sm:p-8  w-full   flex flex-col items-center mt-8 sm:mt-16    ">
                <div>
                    <h1 className="text-white text-shadow-2xs text-2xl xs:text-3xl md:text-4xl font-bold text-center mb-4 transition-all duration-300">
                        Discover <span className="bg-gradient-to-r from-accent to-logo bg-clip-text text-transparent drop-shadow-lg">Global</span> Language Paths
                    </h1>
                    <p className="text-gray-100 text-base xs:text-lg md:text-xl text-center font-medium drop-shadow transition-all duration-300">
                        Explore content and practice tasks by language, culture, or region — tailored for your learning goals.
                    </p>
                </div>
                <div className="relative w-full  ">
                    <div className="flex justify-evenly  ">
                        {differentHelloData.map((data, idx) => (
                            <DifferentHello key={idx} {...data} />
                        ))}
                    </div>


                </div>

            </div>
        </section>
    )
}

export default World