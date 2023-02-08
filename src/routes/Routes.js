import { Routes, Route, Navigate } from "react-router-dom";

import { ROUTES } from "./routeNames";

import HomePageContainer from "../pages/HomePage/containers/HomePageContainer";
import DetailsPageContainer from "../pages/DetailsPage/containers/DetailsPageContainer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME_PAGE} element={<HomePageContainer />} />

      <Route path={ROUTES.DETAILS_PAGE} element={<DetailsPageContainer />} />

      <Route path="*" element={<Navigate to={ROUTES.HOME_PAGE} />} />
    </Routes>
  );
};

export default AppRoutes;
