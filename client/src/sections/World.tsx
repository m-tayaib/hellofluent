import { motion } from "framer-motion";
import DifferentHello from "../components/DifferentHello";
import { differentHelloData } from "../Types/DifferentHello";

function World() {
    const fullList = [...differentHelloData, ...differentHelloData]; // duplicate for smooth infinite scroll
    const reversedList = [...fullList].reverse();

    return (
        <section className="relative md:min-h-[70vh]  px-4 sm:px-8 md:px-16 overflow-hidden"
            style={{
                backgroundImage: `url(/assets/world_map4.jpg)`,
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/10 backdrop-blur-sm" />

            <div className="relative z-10 p-4 sm:p-8 w-full flex flex-col items-center   mt-8 sm:mt-16">
                <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-4">
                    Discover <span className="bg-gradient-to-r from-accent to-logo bg-clip-text text-transparent">Global</span> Language Paths
                </h1>
                <p className="text-gray-100 text-lg text-center mb-6">
                    Explore content and practice tasks by language, culture, or region — tailored for your learning goals.
                </p>
            </div>

            <div >
                {/* Row 1: scrolls left */}
                <div className="w-full   py-4  ">
                    <motion.div
                        className="flex md:gap-64 gap-48"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 20,
                        }}
                    >
                        {fullList.map((data, idx) => (
                            <div key={`r1-${idx}`} className="flex-shrink-0">
                                <DifferentHello {...data} />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: scrolls right */}
                <div className="w-full    py-4">
                    <motion.div
                        className="flex flex-row-reverse md:gap-64 gap-48"
                        animate={{ x: ["0%", "50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 20,
                        }}
                    >
                        {reversedList.map((data, idx) => (
                            <div key={`r2-${idx}`} className="flex-shrink-0">
                                <DifferentHello {...data} />
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

export default World;
