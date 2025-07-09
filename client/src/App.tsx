import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const Navbar = lazy(() => import("./components/Navbar"))
const Home = lazy(() => import("./Pages/Home"));
const Languages = lazy(() => import("./Pages/Languages"))
const About = lazy(() => import("./Pages/About"))
// Add more lazy imports as needed

function App() {
  return (
    <>
    <Navbar />
    <div className="pt-16  ">
       
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/languages" element={<Languages />} />
            <Route path="/about" element={<About />} />
            {/* Add more routes here */}
          </Routes>
        </Suspense>
       
    </div>
  </>
  );
}

export default App;