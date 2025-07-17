import { useNavigate } from "react-router-dom";
const features : string[] = [
    "Personalized learning pathways",
    "Real-life conversational practice",
    "Supportive community and resources",
  ];
function WhyWeBuildAbout() {
  const navigate = useNavigate();

  return (
    <section
      className="w-full font-[Poppins]  p-8 md:p-16 flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 md:gap-16 bg-bgSecondary"
      aria-label="Why we built this app"
    >
      {/* Image */}
      <figure className="w-full md:w-1/2 flex justify-start md:justify-center items-center">
        <img
          src="/assets/why_we_build_img.jpg"
          alt="People connecting and learning languages together"
          className="rounded-2xl shadow-2xl object-cover max-h-[400px] w-full  transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </figure>
      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left animate-fadeIn">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-logo to-primary bg-clip-text text-transparent drop-shadow-md">
          Why We Built This App
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-secondary mb-6 max-w-xl font-medium">
          We built this app to make language learning easy, accessible, and enjoyable for everyone.
        </p>
        <ul className="list-disc pl-5 text-secondary text-base sm:text-lg space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li className="font-semibold" key={idx}>{feature}</li>
          ))}
        </ul>
        <button
        onClick={() => navigate("/languages")}
          className="inline-block bg-gradient-to-r from-logo to-primary text-white font-bold px-8 py-3 rounded-full shadow-lg hover:from-orange-500 hover:to-logo transition-colors duration-100 cursor-pointer text-lg tracking-wide focus:outline-none focus:ring-1 focus:ring-logo focus:ring-offset-1"
        >
Get started now.          
        </button>
      </div>
    </section>
  );
}

export default WhyWeBuildAbout