import "./App.css";
import Button from "./components/Button";
import SideMenu from "./layouts/SideMenu";

function App() {
  return (
    <div className="main d-flex">
      <SideMenu className="w-15" />
      <Button className="w-85" />
    </div>
  );
}

export default App;
