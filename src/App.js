import { Route, Routes } from "react-router-dom";
import "./App.css";
// import SideMenu from "./layouts/SideMenu";
import ButtonView from "./views/ButtonView";
import InputView from "./views/InputView";

function App() {
  return (
    <Routes>
      <Route exact path="/">
        {/* <div className="main d-flex">
          <SideMenu className="w-15" />
        </div> */}
        <Route path="/button" element={<ButtonView />} />
        <Route path="/input" element={<InputView />} />
      </Route>
    </Routes>
  );
}

export default App;
