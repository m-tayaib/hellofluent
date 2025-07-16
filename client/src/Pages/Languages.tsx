import { lazy, Suspense } from "react";
import LanguageHero from "../sections/LanguageHero";

const LanguagePick = lazy(() => import("../sections/LanguagePick"));
const LanguageLearnPath = lazy(() => import("../sections/LanguageLearnPath"));

const Languages = () => {
  return (
    <div>
      <LanguageHero />
      <Suspense fallback={<div className="text-center py-6">Loading sections...</div>}>
        <LanguagePick />
        <LanguageLearnPath />
      </Suspense>
    </div>
  );
};

export default Languages;
