import PickLanguageCard from "../components/PickLanguageCard"
import { languageOptions } from "../Types/LanguagePickCardType"

function LanguagePick() {
    return (
        <section className=" p-8 md:p-16 ">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 ">
                {languageOptions.map((langaue) => (
                    <PickLanguageCard
                        key={langaue.flag}
                        language={langaue.language}
                        flag={langaue.flag}
                        path={langaue.path}
                        flagImage={langaue.flagImage}
                    />
                ))}
            </div>
        </section>
    )
}

export default LanguagePick