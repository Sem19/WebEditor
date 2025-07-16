import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Header from "../components/header/header.jsx";

describe("Header Test Component", () => {
  const mockUser = { name: "Vasya" };

  const onLogout = vi.fn();
  beforeEach(() => {
    render(<Header user={mockUser} logOut={onLogout} />);
  });

  it("render user name title", () => {
    expect(
      screen.getByText(
        (text, element) =>
          element.tagName.toLowerCase() === "h2" &&
          text === `AcountName: ${mockUser.name}`
      )
    ).toBeInTheDocument();
  });
  it("render log out button", () => {
    const logOutButton = screen.getByRole("button", { name: /LogOut/i });
    expect(logOutButton).toBeInTheDocument();
    fireEvent.click(logOutButton);
    expect(onLogout).toHaveBeenCalled();
  });
});
