import CountriesFlags from "../components/CountriesFlags"
import ShowSupport from "../components/ShowSupport"


function Supported() {
    return (
        <section className="md:px-16 px-8 bg-bgSecondary py-10">
            <ShowSupport />
            <CountriesFlags />
        </section>
    )
}

export default Supported