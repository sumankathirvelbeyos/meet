import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "pages/NotFound";
const Energy = React.lazy(() => import("pages/Energy"));
const Equality = React.lazy(() => import("pages/Equality"));
const Employmentpractises = React.lazy(
  () => import("pages/Employmentpractises"),
);
const Emissions = React.lazy(() => import("pages/Emissions"));
const Water = React.lazy(() => import("pages/Water"));
const Waste = React.lazy(() => import("pages/Waste"));
const Healthsaftey = React.lazy(() => import("pages/Healthsaftey"));
const Effluents = React.lazy(() => import("pages/Effluents"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/effluents" element={<Effluents />} />
          <Route path="/healthsaftey" element={<Healthsaftey />} />
          <Route path="/waste" element={<Waste />} />
          <Route path="/water" element={<Water />} />
          <Route path="/emissions" element={<Emissions />} />
          <Route
            path="/employmentpractises"
            element={<Employmentpractises />}
          />
          <Route path="/equality" element={<Equality />} />
          <Route path="/energy" element={<Energy />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
