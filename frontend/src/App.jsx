import "./styles/colors.css";
import "./styles/utilities.css";
import Auth from "./pages/Auth";
import LandingPage from "./pages/Landing";
import Button from "./components/shared/Button";    
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
         <Routes>
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/auth" element={<Auth />} />
        </Routes>
    </div>
  );
}

export default App;
