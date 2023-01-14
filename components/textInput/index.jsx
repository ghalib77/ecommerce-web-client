import classNames from "classnames";
import { forwardRef } from "react";

const TextInput = forwardRef(
  ({ name, type, placeholder, handleOnChange, error }, ref) => {
    return (
      <div className="items-start form-control">
        <label className="label">
          <span className="label-text">{name}</span>
        </label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className={classNames(
            "w-full input input-bordered",
            Boolean(error[name]) ? "input-error" : null
          )}
          onChange={handleOnChange}
          ref={ref}
        />
        <span className="px-1 mt-1 text-xs text-error">{error[name]}</span>
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
