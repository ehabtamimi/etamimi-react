import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const InputField = (props: Props) => {
  return (
    <>
      {props.type == "checkbox" ? (
        <div className="input-group">
          <div className="form-check">
            <input {...props} />
            <label className="form-check-label">{props.title}</label>
          </div>
        </div>
      ) : (
        <div className="input-group">
          <label className="input-group-text">{props.title}</label>
          <input {...props} />
        </div>
      )}
    </>
  );
};

export default InputField;
