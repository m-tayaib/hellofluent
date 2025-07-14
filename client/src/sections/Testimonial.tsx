import TestmonialCard from "../components/TestmonialCard";
import {TestmonialData as testimonialData} from "../Types/TestmonialType"


function Testimonial() {
  return (
    <section className="p-4 sm:p-8 md:p-16 flex flex-col bg-gray-50 w-full">
      <h4 className="text-2xl font-bold mb-2 md:text-left text-center">
        Hear from Our Global Learners
      </h4>
      <p className="mb-8 text-gray-600 md:text-left text-center max-w-2xl">
        Real stories from learners around the world who are improving fluency, building daily habits, and reaching their language goals.
      </p>

      <div className="grid gap-6 w-full max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch justify-items-center">
        {testimonialData.map((fdb, idx) => (
          <TestmonialCard key={idx} {...fdb} />
        ))}
      </div>
    </section>
  )
}

export default Testimonial