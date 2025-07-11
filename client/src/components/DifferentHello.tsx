
import type { DifferentHelloTypes } from "../Types/DifferentHello"
// import bonjour from "../assets/banjour.png"
function DifferentHello(props: DifferentHelloTypes) {
    return (
        <div className="relative z-50 bg-logo w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] rounded-full  ">
            <img src={props.personImage} alt={props.language} className="bg-red-600 w-full h-full object-cover  rounded-full" />
            <div className="z-50 absolute font-[Inter] h-[38px] sm:h-[55px] bg-white left-[80%]    top-[-5px] sm:top-[-10px]  flex rounded-full sm:px-7 py-2 px-3 text-sm sm:text-[24px] font-semibold text-black whitespace-nowrap">
                <p>{props.greeting}</p>
            </div>
            <div className="w-[20px] h-[20px] absolute bottom-0 left-0 sm:w-[32px] sm:h-[32px] rounded-full  ">
                <img src={props.flagImage} alt="flag-image " className="rounded-full  w-full h-full object-cover" />
            </div>
        </div>
    )
}

export default DifferentHello