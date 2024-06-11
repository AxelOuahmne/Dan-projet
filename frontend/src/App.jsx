import { Route, Routes } from "react-router-dom";


// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";

// import AuthLayout from "./layouts/AuthLayout";
// import GuestLayout from "./layouts/GuestLayout";
// import Status from "./pages/Status";
// import Paiement from "./pages/Paiement";

import { About, Contact, Services } from "./pages";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </div> 
    </div>
  );
}

export default App;
