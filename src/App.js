import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
// import SideMenu from "./layouts/SideMenu";
import ButtonView from "./views/ButtonView";
import InputView from "./views/InputView";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/input" />} />
      <Route path="/button" element={<ButtonView />} />
      <Route path="/input" element={<InputView />} />
    </Routes>
  );
}

export default App;
