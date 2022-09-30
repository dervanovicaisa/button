import Input from "../components/Input";
import "../style/input.scss";
function InputView() {
  return (
    <div id="input-section" className="w-85 ml-auto">
      <div className="w-80 m-auto pt-5">
        <div className="header text-title">
          <h2 className="font-weight-500">Input</h2>
        </div>
        <div className="inputs">
          <div>
            <Input />
          </div>
          <div>
            <Input error={true} />
          </div>
          <div>
            <Input disabled={true} />
          </div>
          <div className="d-flex gap-24">
            <Input helperText="Some interesting text" />
            <Input helperText="Some interesting text" error={true} />
          </div>
          <div className="d-flex gap-24">
            <Input startIcon="shopping_cart" />
            <Input endIcon="shopping_cart" />
          </div>
          <div>
            <Input value={"Text"} />
          </div>
          <div className="d-flex gap-24">
            <Input size="sm" />
            <Input size="md" />
          </div>
          <div>
            <Input fullwidth={true} />
          </div>
          <div>
            <Input multline={true} row="4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputView;
