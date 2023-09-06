import React, { OptionHTMLAttributes } from "react";

type Props = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement> & { options: string[] },
  HTMLSelectElement
>;

const DropdownMenu = (props: Props) => {
  return (
    <div className="input-group">
      <span className="input-group-text">{props.title}</span>
      <select className="" {...props}>
        {props.options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
