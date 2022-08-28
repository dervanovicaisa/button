import "./App.css";
import Button from "./components/Button";
import SideMenu from "./layouts/SideMenu";

function App() {
  return (
    <div className="main d-flex">
      <SideMenu className="w-15" />
      <div id="button-section" className="w-85 ml-auto">
        <div className="w-80 m-auto pt-5">
          <div className="header text-title">
            <h2 className="font-weight-500">Buttons</h2>
          </div>
          <div className="buttons">
            <div>
              <Button label="Default" />
            </div>
            <div>
              <Button label="Default" variant="outline" />
            </div>
            <div>
              <Button label="Default" variant="text" />
            </div>
            <div>
              <Button
                label="Default
"
                className="disableShadow"
                disableShadow={true}
              />
            </div>
            <div className="d-flex gap-24">
              <Button label="Disabled" disabled />
              <Button label="Disabled" variant="text" disabled />
            </div>
            <div className="d-flex gap-24">
              <Button
                label="Default
"
                color="primary"
                startIcon="shopping_cart"
              />
              <Button label="Default" color="primary" endIcon="shopping_cart" />
            </div>
            <div className="d-flex gap-24">
              <Button label="Default" size="sm" />
              <Button label="Default" size="md" />
              <Button label="Default" size="lg" />
            </div>
            <div className="d-flex gap-24 four-box">
              <Button label="Default" color="default" />
              <Button label="Primary" color="primary" />
              <Button label="Secondary" color="secondary" />
              <Button label="Danger" color="danger" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
