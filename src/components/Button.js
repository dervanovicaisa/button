import "../style/button.scss";
function Button({ className }) {
  return (
    <div className={`${className} ml-auto`}>
      <div className="w-80 m-auto pt-5">
        <div className="header text-title">
          <h2 className="font-weight-500">Buttons</h2>
        </div>
      </div>
    </div>
  );
}

export default Button;
