import { lazy, Suspense } from "react"

const AboutHero = lazy(() => import("../sections/AboutHero"))
const WhyWeBuildAbout = lazy(() => import("../sections/WhyWeBuildAbout"))
const MeetCreator = lazy(() => import("../sections/MeetCreator"))
function About() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <AboutHero />
        <WhyWeBuildAbout />
        <MeetCreator/>
      </Suspense>
    </>
  )
}

export default About