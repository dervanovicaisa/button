import "../style/button.scss";
function Button({
  className,
  variant,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
  label,
}) {
  let classList = " ";

  if (className !== undefined) {
    classList += className;
  } else {
    classList += " ";
  }
  if (size !== undefined) {
    classList += size;
  } else {
    classList += " ";
  }
  if (color !== undefined) {
    classList += color;
  } else {
    classList += " ";
  }
  if (disableShadow !== undefined && disableShadow === true) {
    classList += "disableShadow";
  } else {
    classList += " ";
  }
  if (variant !== undefined) {
    classList += variant;
  } else {
    classList += " ";
  }
  return (
    <button className={`btn text-label ${classList}`} disabled={disabled}>
      {startIcon !== undefined ? (
        <span className="material-icons">{startIcon}</span>
      ) : null}
      {label}
      {endIcon !== undefined ? (
        <span className="material-icons">{endIcon}</span>
      ) : null}
    </button>
  );
}

export default Button;
