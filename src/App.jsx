import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import NewGoal from "./pages/NewGoal";
import Categories from "./pages/Categories";
import Archive from "./pages/Archive";
import Settings from "./pages/Settings";
import GoalDetails from "./pages/GoalDetails";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/goals/new" element={<NewGoal />} />

        <Route path="/goals/:id" element={<NewGoal />} />

        <Route path="/categories" element={<Categories />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}