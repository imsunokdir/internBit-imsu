import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CustomButton from "../CustomButton";

describe("CustomButton", () => {
  test("renders button with default props", () => {
    render(<CustomButton>Click Me</CustomButton>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-blue-600");
  });

  test("calls onClick handler", () => {
    const handleClick = vi.fn();
    render(<CustomButton onClick={handleClick}>Press</CustomButton>);
    fireEvent.click(screen.getByRole("button", { name: /press/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies fullWidth class", () => {
    render(<CustomButton fullWidth>Submit</CustomButton>);
    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toHaveClass("w-full");
  });

  test("is disabled when disabled=true", () => {
    const handleClick = vi.fn();
    render(
      <CustomButton onClick={handleClick} disabled>
        Disabled
      </CustomButton>
    );
    const button = screen.getByRole("button", { name: /disabled/i });
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("uses aria-label if provided", () => {
    render(<CustomButton ariaLabel="save-button">Save</CustomButton>);
    expect(screen.getByLabelText("save-button")).toBeInTheDocument();
  });
});
