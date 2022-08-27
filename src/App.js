import "./App.css";
import Button from "./components/Button";
import SideMenu from "./layouts/SideMenu";

function App() {
  return (
    <div className="main d-flex">
      <SideMenu className="w-15" />
      <div className="w-85 ml-auto">
        <div className="w-80 m-auto pt-5">
          <div className="header text-title">
            <h2 className="font-weight-500">Buttons</h2>
          </div>
          <div className="buttons">
            <div>
              <Button label="Deafult" />
            </div>
            <div>
              <Button label="Deafult" variant="outline" />
            </div>
            <div>
              <Button label="Deafult" variant="text" />
            </div>
            <div>
              <Button
                label="Deafult"
                className="disableShadow"
                disableShadow={true}
              />
            </div>
            <div className="d-flex gap-24">
              <Button label="Deafult" disabled />
              <Button label="Deafult" variant="text" disabled />
            </div>
            <div className="d-flex gap-24">
              <Button
                label="Deafult"
                color="primary"
                startIcon="shopping_cart"
              />
              <Button label="Deafult" color="primary" endIcon="shopping_cart" />
            </div>
            <div className="d-flex gap-24">
              <Button label="Deafult" size="sm" />
              <Button label="Deafult" size="md" />
              <Button label="Deafult" size="lg" />
            </div>
            <div className="d-flex gap-24">
              <Button label="Deafult" color="default" />
              <Button label="Deafult" color="primary" />
              <Button label="Deafult" color="secondary" />
              <Button label="Deafult" color="danger" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
