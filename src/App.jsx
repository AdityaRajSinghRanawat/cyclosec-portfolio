import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Base, ScrollToTop } from "./components";
import { Homepage, Aboutpage, Pricing, Login, Signup, Userprofile } from "./pages";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/userprofile" element={<Userprofile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
