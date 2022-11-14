import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingIcon from "./assets/puff.svg";

import "./index.css";
const Home = lazy(() => import( "./pages/Home"));
const Place = lazy(() => import("./pages/Place"));

const Loading = () => {
  return (
    <div className="grid place-items-center bg-black text-white h-screen">
      <img src={LoadingIcon} alt="" className="w-[10%]" />
    </div>
  );
};

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place" element={<Place />} />
      </Routes>
    </Suspense>
  );
}

export default App;
