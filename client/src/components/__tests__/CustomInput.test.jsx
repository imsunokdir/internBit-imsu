// components/__tests__/CustomInput.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CustomInput from "../CustomInput";

describe("CustomInput", () => {
  const defaultProps = {
    name: "email",
    label: "Email Address",
    value: "",
    onChange: vi.fn(),
  };

  test("renders input with label", () => {
    render(<CustomInput {...defaultProps} />);
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
  });

  test("calls onChange when input changes", () => {
    render(<CustomInput {...defaultProps} />);
    const input = screen.getByLabelText(/email address/i);
    fireEvent.change(input, { target: { value: "test@example.com" } });
    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  test("shows error message if error prop is passed", () => {
    render(<CustomInput {...defaultProps} error="This field is required" />);
    expect(screen.getByText(/this field is required/i)).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  test("shows helperText if no error", () => {
    render(<CustomInput {...defaultProps} helperText="Enter your email" />);
    expect(screen.getByText(/enter your email/i)).toBeInTheDocument();
  });

  test("input is disabled when disabled prop is true", () => {
    render(<CustomInput {...defaultProps} disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });
});
