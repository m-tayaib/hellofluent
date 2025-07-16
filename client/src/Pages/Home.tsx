import Hero from "../sections/Hero";
import { lazy, Suspense } from "react";

const Supported = lazy(() => import("../sections/Supported"));
const SmartLanguageTag = lazy(() => import("../sections/SmartLanguageTag"));
const ConnectPeople = lazy(() => import("../sections/ConnectPeople"));
const World = lazy(() => import("../sections/World"));
const LearnFavouritLanguage = lazy(() => import("../sections/LearnFavouritLanguage"));
const Testimonial = lazy(() => import("../sections/Testimonial"));

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="text-center py-8">Loading content...</div>}>
        <Supported />
        <SmartLanguageTag />
        <ConnectPeople />
        <World />
        <LearnFavouritLanguage />
        <Testimonial />
      </Suspense>
    </>
  );
}
