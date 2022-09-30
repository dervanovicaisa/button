function Input({
  error,
  disabled,
  helperText,
  startIcon,
  endIcon,
  value,
  size,
  fullwidth,
  multline,
  row,
}) {
  let classes = "";
  if (error !== undefined) {
    classes += "error";
  }
  if (disabled !== undefined) {
    classes += "disabled";
  }
  if (helperText !== undefined) {
    classes += "helperText";
  }
  if (startIcon !== undefined) {
    classes += "startIcom";
  }
  if (endIcon !== undefined) {
    classes += "endIcon";
  }
  if (size !== undefined) {
    classes += size;
  }
  if (fullwidth !== undefined) {
    classes += "fullwidth";
  }
  if (multline !== undefined) {
    classes += multline;
  }
  if (row !== undefined) {
    classes += row;
  }
  return (
    <div className="styled-div">
      {row && multline ? (
        <textarea row={row} placeholder="Placeholder" />
      ) : (
        <input
          placeholder="Placeholder"
          defaultValue={value}
          className={classes}
          disabled={disabled}
        />
      )}
      {helperText && (
        <label
          className={
            helperText && error ? "label text-danger" : "label text-muted"
          }
        >
          {helperText}
        </label>
      )}
    </div>
  );
}

export default Input;
