import CountriesFlags from "../components/CountriesFlags"
import ShowSupport from "../components/ShowSupport"
import TagLine from "../components/TagLine"


function Supported() {
    return (
        <section className="md:px-16 px-8 bg-bgSecondary py-10">
            <ShowSupport />
            <CountriesFlags />
            <TagLine/>
        </section>
    )
}

export default Supported