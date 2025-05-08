import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Signup from "./Pages/Auth/Signup";
import Login from "./Pages/Auth/Login";
import NotFound from "./Pages/NotFound";
import Denied from "./Pages/Auth/Denied";
import AdminLayout from "./Pages/Admin/AdminLayout";
import Dashboard from "./Pages/Admin/Dashboard";
import ManageAuctions from "./Pages/Admin/ManageAuctions";
import CreateAuction from "./Pages/Admin/CreateAuction";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/denied" element={<Denied />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/** Admin related pages */}
        <Route path="/admin/auctions/createauction" element={<CreateAuction />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="auctions" element={<ManageAuctions />} />
          {/* <Route path="users" element={<ManageUsers />} />
          <Route path="reports" element={<Reports />} /> */}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
