import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TextSection from "../components/text-section/text-section.jsx";

describe("Text section component", () => {
  const onChangeData = vi.fn();
  it("render title", () => {
    render(
      <TextSection text={"test"} align="left" onChangeData={onChangeData} />
    );
    expect(
      screen.getByText(
        (text, element) =>
          element.tagName.toLowerCase() === "h2" && text === `Text`
      )
    ).toBeInTheDocument();
  });
  it("render align left", () => {
    render(
      <TextSection text={"test"} align="left" onChangeData={onChangeData} />
    );
    expect(
      screen.getByText(
        (text, element) =>
          element.tagName.toLowerCase() === "p" && text === `Alignment`
      )
    ).toBeInTheDocument();
  });

  /* it("renders alignment buttons and textarea", () => {
    render(
      <TextSection text="Hello" align="center" onChangeData={mockOnChangeData} />
    );

    // Check alignment buttons (icons)
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
    expect(screen.getByText("Alignment")).toBeInTheDocument();
    expect(screen.getByText("Text")).toBeInTheDocument();
  }); */

  /* it("calls onChangeData when alignment button is clicked", () => {
    render(
      <TextSection text="" align="left" onChangeData={mockOnChangeData} />
    );

    // Find all alignment buttons by role 'button'
    const buttons = screen.getAllByRole("button");
    // If wrapper_item is not a button, fallback to query by SVG title or container
    // For now, simulate click on all wrapper_item divs
    const left = screen.getAllByTestId("icon")[0];
    fireEvent.click(left);
    expect(mockOnChangeData).toHaveBeenCalledWith("align", "left");
  });

  it("calls onChangeData when textarea changes", () => {
    render(
      <TextSection text="" align="left" onChangeData={mockOnChangeData} />
    );
    const textarea = screen.getByPlaceholderText("Enter text");
    fireEvent.change(textarea, { target: { value: "New text" } });
    expect(mockOnChangeData).toHaveBeenCalledWith("text", "New text");
  }); */
});
