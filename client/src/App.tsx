import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const Home = lazy(() => import("./Pages/Home"));
// Add more lazy imports as needed
// const About = lazy(() => import("./Pages/About"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* Add more routes here */}
      </Routes>
    </Suspense>
  );
}

export default App;