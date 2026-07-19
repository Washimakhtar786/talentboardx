import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/Auth/LoginPage";
import JobListPage from "../pages/Jobseeker/JobListPage";
import Dashboard from "../pages/Dashboard";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;