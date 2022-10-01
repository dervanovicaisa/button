import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
// import SideMenu from "./layouts/SideMenu";
import ButtonView from "./views/ButtonView";
import InputView from "./views/InputView";

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route
        exact
        path="/"
        render={() => {
          return navigate("/input");
        }}
      >
        <Route path="/button" element={<ButtonView />} />
        <Route path="/input" element={<InputView />} />
      </Route>
    </Routes>
  );
}

export default App;
