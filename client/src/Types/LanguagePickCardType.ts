export type LanguageOption = {
    language: string;
    flag: string;  
    path: string;
    flagImage: string; // Add this line
};

export const languageOptions: LanguageOption[] = [
    {
        language: "Spanish",
        flag: "🇪🇸",
        path: "/languages/spanish",
        flagImage: "https://flagcdn.com/w80/es.png"
    },
    {
        language: "French",
        flag: "🇫🇷",
        path: "/languages/french",
        flagImage: "https://flagcdn.com/w80/fr.png"
    },
    {
        language: "German",
        flag: "🇩🇪",
        path: "/languages/german",
        flagImage: "https://flagcdn.com/w80/de.png"
    },
    {
        language: "Japanese",
        flag: "🇯🇵",
        path: "/languages/japanese",
        flagImage: "https://flagcdn.com/w80/jp.png"
    },
    {
        language: "Italian",
        flag: "🇮🇹",
        path: "/languages/italian",
        flagImage: "https://flagcdn.com/w80/it.png"
    },
    {
        language: "Chinese",
        flag: "🇨🇳",
        path: "/languages/chinese",
        flagImage: "https://flagcdn.com/w80/cn.png"
    }
];