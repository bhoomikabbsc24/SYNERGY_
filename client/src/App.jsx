import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashboard";
import CreateRequest from "./pages/CreateRequest";
import Requests from "./pages/Requests";
import RequestDetails from "./pages/RequestDetails";
import Resources from "./pages/Resources";
import ShareResource from "./pages/ShareResource";
import BorrowReturn from "./pages/BorrowReturn";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import ListItem from "./pages/ListItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/create-request" element={<CreateRequest />} />

        <Route path="/requests" element={<Requests />} />

        <Route path="/request-details" element={<RequestDetails />} />

        <Route path="/resources" element={<Resources />} />

        <Route path="/share-resource" element={<ShareResource />} />

        <Route path="/borrow-return" element={<BorrowReturn />} />

        <Route path="/notifications" element={<Notifications />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/list-item" element={<ListItem />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;