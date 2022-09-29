import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../ApprRoutes/AppRoutes"
import Home from "../../pages/Home/Home";
import Converter from "../../pages/Converter/Converter";
import Rates from "../../pages/Rates/Rates";



const Routing = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Home} element={<Home/>} />
      <Route path={AppRoutes.Converter} element={<Converter/>} />
      <Route path={AppRoutes.Rates} element={<Rates/>} />
    </Routes>
  );
};

export default Routing;
