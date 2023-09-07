import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Monster from "../pages/Monster";
import Item from "../pages/Item";
import Build from "../pages/Build";
import Error404 from "../pages/Error404";
import LayoutDefault from "../layouts/Default/Default";
import LayoutBlank from "../layouts/Blank/Blank";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutDefault />}>
          <Route path='/' element={<Home />} />
          <Route path='/monsters' element={<Monster />} />
          <Route path='/items' element={<Item />} />
          <Route path='/builds' element={<Build />} />
        </Route>

        <Route element={<LayoutBlank />}>
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
