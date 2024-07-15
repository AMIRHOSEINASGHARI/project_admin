"use client";

// react
import { useEffect, useState } from "react";

const CustomInput = ({
  type,
  name,
  label,
  value,
  defaultValue,
  onChange,
  wrapperClassName,
  min,
  max,
  readOnly,
  disabled,
}) => {
  const [active, setActive] = useState(false);

  const onFocus = () => {
    setActive(() => true);
  };

  const onBlur = () => {
    if (value?.length === 0) {
      setActive(() => false);
    }
  };

  useEffect(() => {
    if (value?.length !== 0) {
      setActive(() => true);
    }
  }, []);

  return (
    <div className={`input-group ${wrapperClassName && wrapperClassName}`}>
      <input
        disabled={disabled || false}
        readOnly={readOnly || false}
        type={type || "text"}
        name={name || "input"}
        value={value}
        defaultValue={defaultValue || ""}
        onChange={onChange}
        className="input w-full"
        onFocus={onFocus}
        onBlur={onBlur}
        min={min && min}
      />
      {label && (
        <label className={`user-label ${active && "active"}`}>{label}</label>
      )}
    </div>
  );
};

export default CustomInput;
