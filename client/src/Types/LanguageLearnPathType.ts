import type { IconType } from "react-icons";
import { IoBookOutline } from "react-icons/io5";
import { PiGraduationCapFill } from "react-icons/pi";
import { IoMicOutline } from "react-icons/io5";

import { GrArticle } from "react-icons/gr";
import { FaHeadphonesSimple } from "react-icons/fa6";



export interface LearnPathway {
    icon: IconType;
    title: string;
    des: string;
    comingSoon?: Boolean
};

export const learnPathways: LearnPathway[] = [
    {
        icon: IoBookOutline,
        title: "Vocabulary",
        des: "Build your word bank."
    },
    {
        icon: PiGraduationCapFill,
        title: "Grammar",
        des: "Master language rules."
    },
    {
        icon: IoMicOutline,
        title: "Speaking",
        des: "Practice pronunciation",
        comingSoon: true
    },
    {
        icon: GrArticle,
        title: "Reading",
        des: "Develop professional reading skills."
    },
    {
        icon: FaHeadphonesSimple,
        title: "Listening",
        des: "Enhance understanding",
        comingSoon: true
    }


];