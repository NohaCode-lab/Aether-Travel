import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { EmptyState } from "./EmptyState";

describe("EmptyState Component", () => {
  it("renders the title correctly", () => {
    render(<EmptyState title="لا توجد بيانات" />);

    expect(screen.getByText("لا توجد بيانات")).toBeInTheDocument();
  });

  it("renders the description when provided", () => {
    render(
      <EmptyState
        title="العنوان"
        description="يرجى إضافة بعض البيانات للبدء."
      />,
    );

    expect(
      screen.getByText("يرجى إضافة بعض البيانات للبدء."),
    ).toBeInTheDocument();
  });

  it("renders a custom icon when provided", () => {
    render(
      <EmptyState
        title="العنوان"
        icon={<span data-testid="custom-icon">✨</span>}
      />,
    );

    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });

  it("renders an action component when provided", () => {
    render(<EmptyState title="العنوان" action={<button>إضافة جديد</button>} />);

    expect(
      screen.getByRole("button", { name: "إضافة جديد" }),
    ).toBeInTheDocument();
  });
});
