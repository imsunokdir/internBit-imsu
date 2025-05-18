// components/CustomInput.jsx
import React from "react";

const CustomInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  disabled = false,
  error = "",
  helperText = "",
  className = "",
  customStyles,
  ...props
}) => {
  const inputId = `input-${name}`;

  return (
    <div className={`w-full max-w-full ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={helperText ? `${inputId}-helper` : undefined}
        className={`
          w-full px-4 py-2 rounded-md shadow-sm border text-base
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition duration-150 ease-in-out
          ${error ? "border-red-500" : "border-gray-300"}
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
        `}
        {...props}
      />
      {(helperText || error) && (
        <p
          id={`${inputId}-helper`}
          className={`mt-1 text-sm ${error ? "text-red-600" : "text-gray-500"}`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default CustomInput;
