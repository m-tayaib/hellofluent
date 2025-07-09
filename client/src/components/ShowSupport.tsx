import { statsSectionData } from "../Types/SupportedTypes"
import { FaGlobe, FaComments, FaRegCalendarCheck } from "react-icons/fa";

const icons = [
  FaGlobe,              // For Global Learners
  FaComments,           // Fluency Over Perfection (conversation/practice)
  FaRegCalendarCheck    // Practice Anytime (calendar/time)
];

function ShowSupport() {

    return (
        <div className="flex justify-between items-center">
            <div className="   w-full flex flex-col md:flex-row justify-between     ">
                {statsSectionData.map((data, idx) => {
                    const Icon = icons[idx];
                    return (
                        <div
                            key={data.id}
                            className={`
                                flex-1 flex flex-col items-center justify-center
                                ${idx !== statsSectionData.length - 1 ? "md:border-r md:border-accent" : ""}
                                mb-6 md:mb-0
                            `}
                        >
                            <Icon className="text-3xl mb-2" />
                            <h4 className="font-bold text-xl md:text-2xl bg-gradient-to-r from-primary to-logo bg-clip-text text-transparent  text-center mb-3 transition-colors duration-300">
                                {data.title}
                            </h4>
                            <p className="font-normal  capitalize text-base md:text-lg text-primary text-center transition-colors duration-300">
                                {data.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ShowSupport